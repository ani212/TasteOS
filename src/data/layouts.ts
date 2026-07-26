import type { DesignOption } from './types';

export const layouts: DesignOption[] = [
  { id: 'la-bento', category: 'layout', name: 'Bento grid', promptFragment: 'bento box grid layout', previewType: 'bento' },
  { id: 'la-single', category: 'layout', name: 'Single column', promptFragment: 'focused single column layout', previewType: 'single' },
  { id: 'la-split', category: 'layout', name: 'Split screen', promptFragment: 'split screen 50/50 layout', previewType: 'split' },
  { id: 'la-sidebar', category: 'layout', name: 'Sidebar application shell', promptFragment: 'sidebar navigation application shell', previewType: 'sidebar' },
];
