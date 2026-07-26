import type { DesignOption } from './types';

export const motion: DesignOption[] = [
  { id: 'mo-micro', category: 'motion', name: 'subtle micro-interactions', promptFragment: 'subtle micro-interactions on interactive elements' },
  { id: 'mo-lift', category: 'motion', name: 'cards lift on hover', promptFragment: 'cards elevate and lift on hover' },
  { id: 'mo-none', category: 'motion', name: 'no animation', promptFragment: 'no animation, instant transitions' },
];
