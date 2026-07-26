import type { DesignOption } from './types';

export const typography: DesignOption[] = [
  { id: 'ty-grotesque', category: 'typography', name: 'Grotesque sans', description: 'Clean, objective, modern', examples: 'Inter, Roboto', promptFragment: 'grotesque sans-serif typography' },
  { id: 'ty-geometric', category: 'typography', name: 'Geometric sans', description: 'Circular, precise, friendly', examples: 'Futura, Poppins', promptFragment: 'geometric sans-serif typography' },
  { id: 'ty-expressive', category: 'typography', name: 'Expressive serif', description: 'High contrast, elegant, premium', examples: 'Fraunces, Playfair', promptFragment: 'expressive high-contrast serif typography' },
  { id: 'ty-mono', category: 'typography', name: 'Monospace', description: 'Technical, tabular, raw', examples: 'JetBrains Mono', promptFragment: 'monospace typography for technical precision' },

  { id: 'tv-oversized', category: 'typeVocab', name: 'oversized display headline', promptFragment: 'oversized display headlines' },
  { id: 'tv-tight', category: 'typeVocab', name: 'tight heading tracking', promptFragment: 'tight tracking on headings' },
  { id: 'tv-serif-sans', category: 'typeVocab', name: 'serif headings with sans body', promptFragment: 'serif headings paired with clean sans-serif body copy' },
];
