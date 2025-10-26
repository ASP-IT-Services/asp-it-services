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
    id: 'process',
    label: 'Process',
    href: '#process',
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
export const COMPANY_TAGLINE = 'Transform Your Business with Enterprise-Grade IT Solutions';
export const COMPANY_DESCRIPTION = 'We deliver cutting-edge technology solutions that drive measurable business growth and innovation. From custom software development to cloud infrastructure, we\'re your trusted technology partner for digital transformation.';
