import { useEffect, useState } from 'react';

import { CatData } from '@/types';
import { useElementInView } from '@/hooks';
import { fetchRandomCats } from '@/api';
import { CatCard, CardsGrid, LoaderText, CatalogSkeletonLoader } from '@/components';

export function AllCatsCatalog() {
  const [cats, setCats] = useState<CatData[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [targetRef, isInView] = useElementInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    const [promise, cancel] = fetchRandomCats(pageNumber);

    promise
      .then(data => {
        setCats(c => [...c, ...data]);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name !== 'AbortError') throw err;
      });

    return () => {
      cancel();
    };
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(p => ++p);
  }, [isInView]);

  if (cats.length == 0) {
    return <CatalogSkeletonLoader />;
  }

  return (
    <>
      <CardsGrid>
        {cats.map((cat, idx) => (
          <CatCard key={cat.id + idx} cat={cat} />
        ))}
      </CardsGrid>
      <div ref={targetRef}>
        <LoaderText text="загружаем еще котиков" />
      </div>
    </>
  );
}
