'use client';

import { useEffect, useState } from 'react';

import { CatsGrid } from './CatsGrid';
import { CatData } from '@/types';
import { CatCard } from './CatCard';
import { CatsLoader } from './CatsLoader';
import { catsStorage } from '@/utils';

export function FavoriteCatsCatalog() {
  const [cats, setCats] = useState<CatData[] | null>(null);

  useEffect(() => {
    setCats(catsStorage.getAllCats());
  }, []);

  const onRemoveCatFromFav = (catId: string): void => {
    setCats(p => p && p.filter(({ id }) => id != catId));
  };

  if (!cats) {
    return <CatsLoader />;
  }

  if (cats.length == 0) {
    return <div className="mt-4">Тут пока пусто</div>;
  }

  return (
    <CatsGrid>
      {cats.map(cat => (
        <CatCard key={cat.id} cat={cat} onRemoveCat={onRemoveCatFromFav} />
      ))}
    </CatsGrid>
  );
}
