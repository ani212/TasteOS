import type { DesignOption } from './types';

export const styles: DesignOption[] = [
  { id: 'st-minimalist', category: 'style', name: 'Minimalist', description: 'Stripped back to essentials', examples: 'Apple, Vercel', promptFragment: 'minimalist, ultra-clean aesthetic', previewType: 'minimalist' },
  { id: 'st-swiss', category: 'style', name: 'Swiss / International', description: 'Strict grids, objective photography, sans-serif', examples: 'Muji, Braun', promptFragment: 'Swiss style, strict grid systems, objective minimalism', previewType: 'swiss' },
  { id: 'st-neobrutalism', category: 'style', name: 'Neo-brutalism', description: 'Harsh contrasts, thick borders, raw edges', examples: 'Gumroad, Figma', promptFragment: 'neo-brutalism, high contrast borders, raw unpolished edges', previewType: 'neobrutalism' },
  { id: 'st-glassmorphism', category: 'style', name: 'Glassmorphism', description: 'Frosted glass effects, background blurs', examples: 'macOS, Linear', promptFragment: 'glassmorphism, frosted glass panels, background blurs', previewType: 'glassmorphism' },
  { id: 'st-terminal', category: 'style', name: 'Terminal / hacker', description: 'Monospace fonts, dark themes, green/amber accents', examples: 'Stripe CLI, Vercel Terminal', promptFragment: 'terminal interface, monospace data density, hacker aesthetic', previewType: 'terminal' },
  { id: 'st-editorial', category: 'style', name: 'Editorial', description: 'Magazine layouts, expressive typography', examples: 'Stripe Press, The New York Times', promptFragment: 'premium editorial print design, expressive serif typography, asymmetrical layouts', previewType: 'editorial' },
  { id: 'st-bauhaus', category: 'style', name: 'Bauhaus', description: 'Primary colors, geometric shapes, functionalism', examples: 'Bauhaus Dessau', promptFragment: 'Bauhaus design, geometric shapes, primary colors, functional minimalism', previewType: 'bauhaus' },
  { id: 'st-y2k', category: 'style', name: 'Y2K chrome', description: 'Retro-futurism, metallic textures, acid colors', examples: 'Early 2000s web', promptFragment: 'Y2K retro-futurism, chrome textures, metallic gradients', previewType: 'y2k' },
];
