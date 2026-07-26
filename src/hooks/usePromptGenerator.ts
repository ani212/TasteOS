import { useMemo } from 'react';
import type { DesignOption } from '../data/types';
import { buildTypes } from '../data/buildTypes';
import { styles } from '../data/styles';
import { colors } from '../data/colors';
import { typography } from '../data/typography';
import { themes } from '../data/themes';
import { layouts } from '../data/layouts';
import { components } from '../data/components';
import { motion } from '../data/motion';
import { spacing } from '../data/spacing';
import { imagery } from '../data/imagery';
import { voice } from '../data/voice';

export function usePromptGenerator(selectedIds: string[]) {
  return useMemo(() => {
    if (selectedIds.length === 0) return '';

    const allOptions = [
      ...buildTypes, ...styles, ...colors, ...typography,
      ...themes, ...layouts, ...components, ...motion,
      ...spacing, ...imagery, ...voice
    ];

    const selectedOptions = selectedIds.map(id => allOptions.find(o => o.id === id)).filter(Boolean) as DesignOption[];

    const getFragments = (categoryList: string[]) => 
      selectedOptions.filter(o => categoryList.includes(o.category)).map(o => o.promptFragment);

    // Helper to format arrays nicely
    const formatList = (items: string[]) => {
      if (items.length === 0) return '';
      if (items.length === 1) return items[0];
      if (items.length === 2) return `${items[0]} and ${items[1]}`;
      return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
    };

    const bType = getFragments(['buildType'])[0] || 'web application';
    
    let prompt = `Design a premium, production-ready ${bType} for a target user.\n\n`;

    const styleFrags = getFragments(['style']);
    if (styleFrags.length > 0) {
      prompt += `Use ${styleFrags[0]} as the dominant visual direction`;
      if (styleFrags.length > 1) {
        prompt += `, supported by a ${styleFrags[1]} aesthetic`;
      }
      prompt += '.\n';
    }

    const themeFrags = getFragments(['theme']);
    const colorMoodFrags = getFragments(['colorMood', 'colorGradient', 'colorVocab']);
    if (themeFrags.length > 0 || colorMoodFrags.length > 0) {
      prompt += `Establish a ${themeFrags[0] || 'balanced'} theme. `;
      if (colorMoodFrags.length > 0) {
        prompt += `The palette should feature ${formatList(colorMoodFrags)}.\n`;
      } else {
        prompt += '\n';
      }
    }

    const typeFrags = getFragments(['typography', 'typeVocab']);
    if (typeFrags.length > 0) {
      prompt += `For typography, use ${formatList(typeFrags)}.\n\n`;
    }

    const layoutFrags = getFragments(['layout']);
    if (layoutFrags.length > 0) {
      prompt += `Structure the page using a ${formatList(layoutFrags)}.\n`;
    }

    const compFrags = getFragments(['button', 'corner', 'shadow']);
    if (compFrags.length > 0) {
      prompt += `Components should be styled with ${formatList(compFrags)}.\n`;
    }

    const motionFrags = getFragments(['motion']);
    if (motionFrags.length > 0) {
      prompt += `Motion and interactions should feature ${formatList(motionFrags)}.\n`;
    }

    const spaceFrags = getFragments(['spacing', 'spacingVocab']);
    if (spaceFrags.length > 0) {
      prompt += `Maintain ${formatList(spaceFrags)} throughout the interface.\n`;
    }

    const imageryFrags = getFragments(['imagery']);
    if (imageryFrags.length > 0) {
      prompt += `For visuals, rely on ${formatList(imageryFrags)}.\n`;
    }
    
    prompt += '\n';

    const voiceFrags = getFragments(['voice']);
    if (voiceFrags.length > 0) {
      prompt += `The tone of the copywriting should feel ${formatList(voiceFrags)}.\n`;
    }

    const principleFrags = getFragments(['voicePrinciple']);
    if (principleFrags.length > 0) {
      prompt += `Key design principles to prioritize: ${formatList(principleFrags)}.\n`;
    }

    const avoidFrags = getFragments(['voiceAvoid']);
    if (avoidFrags.length > 0) {
      prompt += `Strictly avoid ${formatList(avoidFrags)}.\n`;
    }

    prompt += '\nThe result must be mobile-first, strictly accessible to WCAG AA standards, fully responsive, visually consistent, and entirely production-ready.';

    return prompt.trim();
  }, [selectedIds]);
}
