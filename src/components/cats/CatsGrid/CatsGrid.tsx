import cls from './CatsGrid.module.scss';

export function CatsGrid({ children }: { children: React.ReactNode }) {
  return <section className={cls['cats-grid']}>{children}</section>;
}
