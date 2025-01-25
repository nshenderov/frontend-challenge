import cls from './CardsGrid.module.scss';

export function CardsGrid({ children }: { children: React.ReactNode }) {
  return <section className={cls['cards-grid']}>{children}</section>;
}
