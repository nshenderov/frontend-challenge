import { NavLink } from '@/components';
import cls from './Header.module.scss';

export function Header() {
  return (
    <header className={cls.header}>
      <nav>
        <NavLink path="/">Все котики</NavLink>
        <NavLink path="/favorite-cats">Любимые котики</NavLink>
      </nav>
    </header>
  );
}
