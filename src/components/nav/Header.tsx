import { NavLink } from './NavLink';

const ROUTES = [
  { path: '/', text: 'Все котики' },
  { path: '/favorite-cats', text: 'Любимые котики' },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-center bg-mat-blue px-16
        shadow-mat sm:justify-start"
    >
      <nav className="flex h-full items-center">
        {ROUTES.map(({ path, text }) => (
          <NavLink key={path} href={path}>
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
