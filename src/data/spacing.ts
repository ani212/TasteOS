import type { DesignOption } from './types';

export const spacing: DesignOption[] = [
  { id: 'sp-airy', category: 'spacing', name: 'Airy', promptFragment: 'airy spacing with generous whitespace' },
  { id: 'sp-balanced', category: 'spacing', name: 'Balanced', promptFragment: 'balanced standard spacing' },
  { id: 'sp-compact', category: 'spacing', name: 'Compact', promptFragment: 'compact high-density spacing' },

  { id: 'sv-8px', category: 'spacingVocab', name: '8px spacing system', promptFragment: 'strict 8px baseline grid spacing' },
  { id: 'sv-whitespace', category: 'spacingVocab', name: 'whitespace as separator', promptFragment: 'use whitespace instead of borders to separate content' },
];
