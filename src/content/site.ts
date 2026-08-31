import type { NavigationItem, SocialLink } from '../types/content';

export const site = {
  label: '',
  copyright: '// © 2026 SOFTWARE ENGINEER ARCHIVE. ALL RIGHTS RESERVED.',
  logo: '/mark.svg',
  profileImage: '/JV.jpeg',
};

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Stack', href: '/stack' },
  { label: 'Experience', href: '/experience' },
  { label: 'Interests', href: '/interests' },
  { label: 'Contact', href: '/contact' },
];

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/jvicrosario1106' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/julius-victor-rosario-b6509222b/',
  },
  { label: 'Email', href: 'mailto:jvrosario1106@gmail.com' },
];
