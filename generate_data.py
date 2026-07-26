import os
import json

base_dir = "src/data"

files = {
    "types.ts": """export type DesignOption = {
  id: string;
  category: string;
  name: string;
  description?: string;
  examples?: string;
  promptFragment: string;
  previewType?: string;
};
""",
    "buildTypes.ts": """import { DesignOption } from './types';

export const buildTypes: DesignOption[] = [
  { id: 'bt-landing', category: 'buildType', name: 'Landing page', promptFragment: 'landing page' },
  { id: 'bt-website', category: 'buildType', name: 'Full website', promptFragment: 'full website' },
  { id: 'bt-mobile', category: 'buildType', name: 'Mobile application', promptFragment: 'mobile application' },
  { id: 'bt-webapp', category: 'buildType', name: 'Web application', promptFragment: 'web application' },
  { id: 'bt-saas', category: 'buildType', name: 'SaaS product', promptFragment: 'SaaS product' },
  { id: 'bt-dashboard', category: 'buildType', name: 'Dashboard', promptFragment: 'dashboard' },
  { id: 'bt-portfolio', category: 'buildType', name: 'Portfolio', promptFragment: 'portfolio' },
  { id: 'bt-ecommerce', category: 'buildType', name: 'E-commerce store', promptFragment: 'e-commerce store' },
  { id: 'bt-blog', category: 'buildType', name: 'Blog or publication', promptFragment: 'blog or publication' },
  { id: 'bt-email', category: 'buildType', name: 'Email template', promptFragment: 'email template' },
  { id: 'bt-pitch', category: 'buildType', name: 'Pitch deck', promptFragment: 'pitch deck' },
  { id: 'bt-docs', category: 'buildType', name: 'Documentation website', promptFragment: 'documentation website' },
  { id: 'bt-waitlist', category: 'buildType', name: 'Waitlist page', promptFragment: 'waitlist page' },
];
""",
    "styles.ts": """import { DesignOption } from './types';

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
""",
    "colors.ts": """import { DesignOption } from './types';

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
""",
    "typography.ts": """import { DesignOption } from './types';

export const typography: DesignOption[] = [
  { id: 'ty-grotesque', category: 'typography', name: 'Grotesque sans', description: 'Clean, objective, modern', examples: 'Inter, Roboto', promptFragment: 'grotesque sans-serif typography' },
  { id: 'ty-geometric', category: 'typography', name: 'Geometric sans', description: 'Circular, precise, friendly', examples: 'Futura, Poppins', promptFragment: 'geometric sans-serif typography' },
  { id: 'ty-expressive', category: 'typography', name: 'Expressive serif', description: 'High contrast, elegant, premium', examples: 'Fraunces, Playfair', promptFragment: 'expressive high-contrast serif typography' },
  { id: 'ty-mono', category: 'typography', name: 'Monospace', description: 'Technical, tabular, raw', examples: 'JetBrains Mono', promptFragment: 'monospace typography for technical precision' },

  { id: 'tv-oversized', category: 'typeVocab', name: 'oversized display headline', promptFragment: 'oversized display headlines' },
  { id: 'tv-tight', category: 'typeVocab', name: 'tight heading tracking', promptFragment: 'tight tracking on headings' },
  { id: 'tv-serif-sans', category: 'typeVocab', name: 'serif headings with sans body', promptFragment: 'serif headings paired with clean sans-serif body copy' },
];
""",
    "themes.ts": """import { DesignOption } from './types';

export const themes: DesignOption[] = [
  { id: 'th-light', category: 'theme', name: 'Light and airy', promptFragment: 'light and airy theme with abundant whitespace', previewType: 'light' },
  { id: 'th-true-dark', category: 'theme', name: 'True dark', promptFragment: 'true dark theme using deep blacks', previewType: 'dark' },
  { id: 'th-warm-paper', category: 'theme', name: 'Warm paper', promptFragment: 'warm paper-like background colors instead of pure white', previewType: 'warm' },
  { id: 'th-high-contrast', category: 'theme', name: 'High contrast', promptFragment: 'high contrast monochrome theme', previewType: 'contrast' },
];
""",
    "layouts.ts": """import { DesignOption } from './types';

export const layouts: DesignOption[] = [
  { id: 'la-bento', category: 'layout', name: 'Bento grid', promptFragment: 'bento box grid layout', previewType: 'bento' },
  { id: 'la-single', category: 'layout', name: 'Single column', promptFragment: 'focused single column layout', previewType: 'single' },
  { id: 'la-split', category: 'layout', name: 'Split screen', promptFragment: 'split screen 50/50 layout', previewType: 'split' },
  { id: 'la-sidebar', category: 'layout', name: 'Sidebar application shell', promptFragment: 'sidebar navigation application shell', previewType: 'sidebar' },
];
""",
    "components.ts": """import { DesignOption } from './types';

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
""",
    "motion.ts": """import { DesignOption } from './types';

export const motion: DesignOption[] = [
  { id: 'mo-micro', category: 'motion', name: 'subtle micro-interactions', promptFragment: 'subtle micro-interactions on interactive elements' },
  { id: 'mo-lift', category: 'motion', name: 'cards lift on hover', promptFragment: 'cards elevate and lift on hover' },
  { id: 'mo-none', category: 'motion', name: 'no animation', promptFragment: 'no animation, instant transitions' },
];
""",
    "spacing.ts": """import { DesignOption } from './types';

export const spacing: DesignOption[] = [
  { id: 'sp-airy', category: 'spacing', name: 'Airy', promptFragment: 'airy spacing with generous whitespace' },
  { id: 'sp-balanced', category: 'spacing', name: 'Balanced', promptFragment: 'balanced standard spacing' },
  { id: 'sp-compact', category: 'spacing', name: 'Compact', promptFragment: 'compact high-density spacing' },

  { id: 'sv-8px', category: 'spacingVocab', name: '8px spacing system', promptFragment: 'strict 8px baseline grid spacing' },
  { id: 'sv-whitespace', category: 'spacingVocab', name: 'whitespace as separator', promptFragment: 'use whitespace instead of borders to separate content' },
];
""",
    "imagery.ts": """import { DesignOption } from './types';

export const imagery: DesignOption[] = [
  { id: 'im-3d', category: 'imagery', name: '3D rendered illustration', promptFragment: 'premium 3D rendered illustrations' },
  { id: 'im-flat', category: 'imagery', name: 'flat vector illustration', promptFragment: 'minimal flat vector illustrations' },
  { id: 'im-none', category: 'imagery', name: 'no imagery, typography only', promptFragment: 'typography-led design with absolutely no imagery' },
];
""",
    "voice.ts": """import { DesignOption } from './types';

export const voice: DesignOption[] = [
  { id: 'vo-friendly', category: 'voice', name: 'Friendly and warm', promptFragment: 'friendly, warm, and approachable copy' },
  { id: 'vo-plain', category: 'voice', name: 'Plain and direct', promptFragment: 'plain, direct, and utilitarian copy' },
  { id: 'vo-premium', category: 'voice', name: 'Premium and reserved', promptFragment: 'premium, reserved, and sophisticated copy' },

  { id: 'vp-hierarchy', category: 'voicePrinciple', name: 'hierarchy should be obvious immediately', promptFragment: 'ensure visual hierarchy is immediately obvious' },
  { id: 'vp-calm', category: 'voicePrinciple', name: 'calm rather than busy', promptFragment: 'design should feel calm rather than busy' },

  { id: 'va-purple', category: 'voiceAvoid', name: 'default purple gradient', promptFragment: 'default SaaS purple gradients' },
  { id: 'va-generic', category: 'voiceAvoid', name: 'generic stock illustration', promptFragment: 'generic startup stock illustrations' },
];
""",
    "recipes.ts": """export const recipes = [
  {
    id: 'r-fintech',
    title: 'Premium fintech',
    positioning: 'Trustworthy, crisp, and high-contrast.',
    prompt: 'Design a responsive web application for a premium fintech product.\\n\\nUse Swiss / International as the dominant visual direction, supported by minimalist. Apply a strict greyscale with a single vibrant accent color. Use geometric sans-serif typography for headings and monospace for data.\\n\\nStructure the page using a dashboard layout. Components should use sharp 0px corner radii and soft diffused elevation shadows. Motion should feature subtle micro-interactions.\\n\\nThe result must be mobile-first, accessible, and production-ready.'
  },
  {
    id: 'r-dev',
    title: 'Modern developer tool',
    positioning: 'Dark, technical, and dense.',
    prompt: 'Design a responsive documentation website for a modern developer tool.\\n\\nUse terminal interface as the dominant visual direction. Apply a true dark theme using deep blacks with neon accents. Use monospace typography everywhere for technical precision.\\n\\nStructure the page using a sidebar navigation application shell. Motion should be instant with no animation. Maintain compact high-density spacing.\\n\\nThe result must be mobile-first, accessible, and production-ready.'
  }
];
""",
    "resources.ts": """export const resources = [
  { name: 'Mobbin', category: 'Real product interfaces', description: 'Library of real-world mobile and web UI patterns.', url: 'https://mobbin.com' },
  { name: 'Godly', category: 'Landing pages', description: 'Astronomically good web design inspiration.', url: 'https://godly.website' },
  { name: 'Fontshare', category: 'Typography', description: 'Free fonts service from Indian Type Foundry.', url: 'https://fontshare.com' },
  { name: 'Realtime Colors', category: 'Colour tools', description: 'Visualize color palettes on a real website.', url: 'https://realtimecolors.com' },
];
""",
    "glossary.ts": """export const glossary = [
  { term: 'Hierarchy', definition: 'The visual arrangement of elements in a way that implies importance.' },
  { term: 'Whitespace', definition: 'The empty space between and around elements, used to reduce noise and separate groups.' },
  { term: 'Contrast', definition: 'The difference in visual properties that makes an object distinguishable from other objects and the background.' },
  { term: 'Affordance', definition: 'Visual clues in a design that suggest how users should interact with an element.' },
];
"""
}

for filename, content in files.items():
    with open(os.path.join(base_dir, filename), "w", encoding="utf-8") as f:
        f.write(content)

print("Data files generated.")
