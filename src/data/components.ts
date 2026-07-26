import type { DesignOption } from './types';

export const components: DesignOption[] = [
  { id: 'cb-pill', category: 'button', name: 'Pill buttons', promptFragment: 'fully rounded pill buttons' },
  { id: 'cb-sharp', category: 'button', name: 'Sharp rectangular buttons', promptFragment: 'sharp 0px radius rectangular buttons' },
  { id: 'cb-ghost', category: 'button', name: 'Ghost buttons', promptFragment: 'subtle ghost buttons' },

  { id: 'cc-sharp', category: 'corner', name: 'Sharp 0px', promptFragment: 'sharp 0px corner radii everywhere' },
  { id: 'cc-soft', category: 'corner', name: 'Soft 16px', promptFragment: 'soft 16px corner radii' },

  { id: 'cs-none', category: 'shadow', name: 'No shadow', promptFragment: 'flat design with absolutely no shadows' },
  { id: 'cs-soft', category: 'shadow', name: 'Soft diffused', promptFragment: 'soft diffused elevation shadows' },
  { id: 'cs-hard', category: 'shadow', name: 'Hard offset', promptFragment: 'hard offset solid shadows' },
];
