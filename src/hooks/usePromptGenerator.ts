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

    const bType = getFragments(['buildType'])[0] || 'website';
    
    let prompt = `Design a responsive ${bType} for a target user.\n\n`;

    const styleFrags = getFragments(['style']);
    if (styleFrags.length > 0) {
      prompt += `Use ${styleFrags[0]} as the dominant visual direction`;
      if (styleFrags.length > 1) {
        prompt += `, supported by ${styleFrags[1]}`;
      }
      prompt += '.\n';
    }

    const themeFrags = getFragments(['theme']);
    const colorMoodFrags = getFragments(['colorMood', 'colorGradient', 'colorVocab']);
    if (themeFrags.length > 0 || colorMoodFrags.length > 0) {
      prompt += `Apply a ${themeFrags[0] || 'suitable theme'}. `;
      if (colorMoodFrags.length > 0) {
        prompt += `Use ${colorMoodFrags.join(', ')}.\n`;
      } else {
        prompt += '\n';
      }
    }

    const typeFrags = getFragments(['typography', 'typeVocab']);
    if (typeFrags.length > 0) {
      prompt += `Use ${typeFrags.join(' and ')}.\n\n`;
    }

    const layoutFrags = getFragments(['layout']);
    if (layoutFrags.length > 0) {
      prompt += `Structure the page using a ${layoutFrags.join(' and ')}.\n`;
    }

    const compFrags = getFragments(['button', 'corner', 'shadow']);
    if (compFrags.length > 0) {
      prompt += `Components should use ${compFrags.join(', ')}.\n`;
    }

    const motionFrags = getFragments(['motion']);
    if (motionFrags.length > 0) {
      prompt += `Motion should feature ${motionFrags.join(', ')}.\n`;
    }

    const spaceFrags = getFragments(['spacing', 'spacingVocab']);
    if (spaceFrags.length > 0) {
      prompt += `Maintain ${spaceFrags.join(' and ')}.\n`;
    }

    const imageryFrags = getFragments(['imagery']);
    if (imageryFrags.length > 0) {
      prompt += `Use ${imageryFrags.join(', ')}.\n`;
    }
    
    prompt += '\n';

    const voiceFrags = getFragments(['voice']);
    if (voiceFrags.length > 0) {
      prompt += `The voice should feel ${voiceFrags.join(' and ')}.\n`;
    }

    const principleFrags = getFragments(['voicePrinciple']);
    if (principleFrags.length > 0) {
      prompt += `Prioritize: ${principleFrags.join(', ')}.\n`;
    }

    const avoidFrags = getFragments(['voiceAvoid']);
    if (avoidFrags.length > 0) {
      prompt += `Avoid ${avoidFrags.join(', ')}.\n`;
    }

    prompt += '\nThe result must be mobile-first, accessible to WCAG AA, fully responsive, visually consistent, and production-ready.';

    return prompt.trim();
  }, [selectedIds]);
}
