import type { DesignOption } from './types';

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
