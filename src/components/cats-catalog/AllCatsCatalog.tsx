'use client';

import { useEffect, useState } from 'react';

import { CatsGrid } from './CatsGrid';
import { CatData } from '@/types';
import { fetchCats } from '@/utils';
import { CatCard } from './CatCard';
import { CatsLoader } from './CatsLoader';
import { CatsMoreLoader } from './CatsMoreLoader';
import { useElementInView } from '@/hooks';

export function AllCatsCatalog() {
  const [cats, setCats] = useState<CatData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [targetRef, isInView] = useElementInView({ threshold: 0.1 });

  useEffect(() => {
    const [promise, cancel] = fetchCats(pageNumber);

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
    return <CatsLoader />;
  }

  return (
    <>
      <CatsGrid>
        {cats.map((cat, idx) => (
          <CatCard key={cat.id + idx} cat={cat} />
        ))}
      </CatsGrid>
      <CatsMoreLoader ref={targetRef as React.Ref<HTMLDivElement>} />
    </>
  );
}
