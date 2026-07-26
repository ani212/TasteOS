import type { DesignOption } from './types';

export const colors: DesignOption[] = [
  { id: 'co-pastel', category: 'colorMood', name: 'Pastel', promptFragment: 'soft pastel colors' },
  { id: 'co-earthy', category: 'colorMood', name: 'Earthy', promptFragment: 'warm earthy tones' },
  { id: 'co-jewel', category: 'colorMood', name: 'Jewel tones', promptFragment: 'deep jewel tones' },
  { id: 'co-neon', category: 'colorMood', name: 'Neon on dark', promptFragment: 'neon accents on dark background' },
  { id: 'co-greyscale', category: 'colorMood', name: 'Greyscale plus one accent', promptFragment: 'strict greyscale with a single vibrant accent color' },
  { id: 'co-muted', category: 'colorMood', name: 'Muted and dusty', promptFragment: 'muted dusty palette' },
  
  { id: 'cg-sunset', category: 'colorGradient', name: 'Sunset', promptFragment: 'warm sunset gradients', previewType: 'sunset' },
  { id: 'cg-aurora', category: 'colorGradient', name: 'Aurora mesh', promptFragment: 'soft aurora mesh gradients', previewType: 'aurora' },
  { id: 'cg-ocean', category: 'colorGradient', name: 'Ocean', promptFragment: 'cool ocean blue gradients', previewType: 'ocean' },
  
  { id: 'cv-60-30-10', category: 'colorVocab', name: '60–30–10 rule', promptFragment: 'follow the 60-30-10 color rule' },
  { id: 'cv-one-accent', category: 'colorVocab', name: 'one accent colour only', promptFragment: 'use exactly one accent color' },
  { id: 'cv-low-sat', category: 'colorVocab', name: 'low saturation', promptFragment: 'overall low saturation' },
];
