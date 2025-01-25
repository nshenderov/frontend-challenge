import { CardsGrid } from './CardsGrid';

export function CatalogSkeletonLoader() {
  return (
    <CardsGrid>
      {Array.from({ length: 24 }).map((v, i) => (
        <CardSkeleton key={i} />
      ))}
    </CardsGrid>
  );
}

function CardSkeleton() {
  return (
    <div className={'h-[225px] w-[225px]'}>
      <div className={'h-full w-full animate-pulse bg-gray-200'} />
    </div>
  );
}
