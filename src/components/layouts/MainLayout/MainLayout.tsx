import { Outlet } from 'react-router';
import { Header } from '@/components';

import cls from './MainLayout.module.scss';

export function MainLayout() {
  return (
    <div className={cls['main-layout']}>
      <Header />
      <Outlet />
    </div>
  );
}
