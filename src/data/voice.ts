import type { DesignOption } from './types';

export const voice: DesignOption[] = [
  { id: 'vo-friendly', category: 'voice', name: 'Friendly and warm', promptFragment: 'friendly, warm, and approachable copy' },
  { id: 'vo-plain', category: 'voice', name: 'Plain and direct', promptFragment: 'plain, direct, and utilitarian copy' },
  { id: 'vo-premium', category: 'voice', name: 'Premium and reserved', promptFragment: 'premium, reserved, and sophisticated copy' },

  { id: 'vp-hierarchy', category: 'voicePrinciple', name: 'hierarchy should be obvious immediately', promptFragment: 'ensure visual hierarchy is immediately obvious' },
  { id: 'vp-calm', category: 'voicePrinciple', name: 'calm rather than busy', promptFragment: 'design should feel calm rather than busy' },

  { id: 'va-purple', category: 'voiceAvoid', name: 'default purple gradient', promptFragment: 'default SaaS purple gradients' },
  { id: 'va-generic', category: 'voiceAvoid', name: 'generic stock illustration', promptFragment: 'generic startup stock illustrations' },
];
