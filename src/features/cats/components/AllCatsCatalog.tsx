'use client';

import { useEffect, useState } from 'react';

import { useElementInView } from '@/hooks';

import { CardsGrid } from './CardsGrid';
import { CatCard } from './CatCard';
import { CatalogSkeletonLoader } from './CatalogSkeletonLoader';
import { fetchRandomCats } from '../api';
import { type CatData } from '../types';

export function AllCatsCatalog() {
  const [cats, setCats] = useState<CatData[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [targetRef, isInView] = useElementInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    const [promise, cancel] = fetchRandomCats(pageNumber);

    promise
      .then(data => setCats(c => [...c, ...data]))
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
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
      <div ref={targetRef} className="animate-pulse">
        ... загружаем еще котиков ...
      </div>
    </>
  );
}
