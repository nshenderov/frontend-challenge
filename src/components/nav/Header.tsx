import { NavLink } from './NavLink';

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-center bg-mat-blue px-16
        shadow-mat sm:justify-start"
    >
      <nav className="flex h-full items-center">
        <NavLink href={'/'}>Все котики</NavLink>
        <NavLink href={'/favorite-cats'}>Любимые котики</NavLink>
      </nav>
    </header>
  );
}
