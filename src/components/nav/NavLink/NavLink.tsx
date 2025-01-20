import { NavLink as RouterNavLink } from 'react-router';

import cls from './NavLink.module.scss';

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};

export function NavLink({ path, children }: NavLinkProps) {
  return (
    <RouterNavLink
      to={path}
      className={({ isActive }) => `${cls['nav-link']} ${isActive ? cls.active : ''}`}
    >
      {children}
    </RouterNavLink>
  );
}
