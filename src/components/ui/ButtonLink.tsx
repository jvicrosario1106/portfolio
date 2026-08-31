import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function ButtonLink({ children, href, icon, variant = 'primary' }: ButtonLinkProps) {
  const className = `button-link button-link--${variant}`;

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} >
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
