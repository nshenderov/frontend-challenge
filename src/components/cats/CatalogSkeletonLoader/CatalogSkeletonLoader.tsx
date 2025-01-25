import { CardsGrid } from '@/components';

import cls from './CatalogSkeletonLoader.module.scss';

export function CatalogSkeletonLoader() {
  return (
    <CardsGrid>
      {Array.from({ length: 24 }).map((_v, i) => (
        <div key={i} className={cls['card-skeleton']} />
      ))}
    </CardsGrid>
  );
}
