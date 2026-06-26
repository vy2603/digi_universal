export const navItems = [
  {
    type: 'link',
    href: '/',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'About Us',
    href: '/about',
  },
  {
    type: 'dropdown',
    label: 'Services',
    items: [
      { href: '/services', label: 'All Services' },
      { href: '/services/performance-marketing', label: 'Performance Marketing' },
      { href: '/services/google-meta-ads', label: 'Google & Meta Ads' },
      { href: '/services/seo', label: 'SEO' },
      { href: '/services/web-design', label: 'Web Design & Development' },
      { href: '/services/social-media', label: 'Social Media Management' },
      { href: '/services/ecommerce', label: 'E-Commerce Marketing' },
    ],
  },
  {
    type: 'link',
    label: 'Real Estate',
    href: '/real-estate',
  },
  {
    type: 'link',
    label: 'Blog',
    href: '/blog',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
