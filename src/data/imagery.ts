import type { DesignOption } from './types';

export const imagery: DesignOption[] = [
  { id: 'im-3d', category: 'imagery', name: '3D rendered illustration', promptFragment: 'premium 3D rendered illustrations' },
  { id: 'im-flat', category: 'imagery', name: 'flat vector illustration', promptFragment: 'minimal flat vector illustrations' },
  { id: 'im-none', category: 'imagery', name: 'no imagery, typography only', promptFragment: 'typography-led design with absolutely no imagery' },
];
