export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];

export const COMPANY_NAME = 'ASP IT Services';
export const COMPANY_TAGLINE = 'Transforming Ideas into Digital Reality';
