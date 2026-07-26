import type { DesignOption } from './types';

export const themes: DesignOption[] = [
  { id: 'th-light', category: 'theme', name: 'Light and airy', promptFragment: 'light and airy theme with abundant whitespace', previewType: 'light' },
  { id: 'th-true-dark', category: 'theme', name: 'True dark', promptFragment: 'true dark theme using deep blacks', previewType: 'dark' },
  { id: 'th-warm-paper', category: 'theme', name: 'Warm paper', promptFragment: 'warm paper-like background colors instead of pure white', previewType: 'warm' },
  { id: 'th-high-contrast', category: 'theme', name: 'High contrast', promptFragment: 'high contrast monochrome theme', previewType: 'contrast' },
];
