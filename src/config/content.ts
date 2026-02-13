export const SITE_CONFIG = {
  name: 'ZYNCO',
  tagline: 'Smart Solutions',
  description: 'We partner with enterprises, institutions, and growing businesses to solve real operational challenges using secure technology, reliable systems, and practical business advisory support.',
} as const;

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
] as const;

export const HERO_CONTENT = {
  title: 'Business Solutions That',
  titleHighlight: 'Work',
  description: 'We partner with enterprises, institutions, and growing businesses to solve real operational challenges using secure technology, reliable systems, and practical business advisory support.',
  cta: {
    primary: 'Explore Solutions',
    secondary: 'Contact Us',
  },
} as const;
