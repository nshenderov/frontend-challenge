'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex h-full items-center px-6 text-center font-semibold text-white transition-all
        duration-200 hover:text-opacity-100
        ${pathname == href ? 'bg-mat-blue-accent' : 'text-opacity-70'}`}
      href={href}
    >
      {children}
    </Link>
  );
}
