import { useEffect, useState } from 'react';

import { CatData } from '@/types';
import { useElementInView } from '@/hooks';
import { fetchAllCats } from '@/api';
import { CatCard, CatsGrid, Loader } from '@/components';

export function AllCatsCatalog() {
  const [cats, setCats] = useState<CatData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [targetRef, isInView] = useElementInView({ threshold: 0.1 });

  useEffect(() => {
    const [promise, cancel] = fetchAllCats(pageNumber);

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
    return <Loader text="загружаем котиков" />;
  }

  return (
    <>
      <CatsGrid>
        {cats.map((cat, idx) => (
          <CatCard key={cat.id + idx} cat={cat} />
        ))}
      </CatsGrid>
      <div ref={targetRef as React.Ref<HTMLDivElement>}>
        <Loader text="загружаем еще котиков" />
      </div>
    </>
  );
}
