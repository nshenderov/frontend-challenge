'use client';

import { useEffect, useState } from 'react';

import { CatsGrid } from './CatsGrid';
import { CatData } from '@/types';
import { CatCard } from './CatCard';
import { CatsLoader } from './CatsLoader';

export function FavoriteCatsCatalog() {
  const [cats, setCats] = useState<CatData[] | null>(null);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const parsedCats = [];
    for (const key of keys) {
      if (key.startsWith('CAT_')) {
        const catData = localStorage.getItem(key);
        if (catData) {
          parsedCats.push(JSON.parse(catData));
        }
      }
    }
    setCats(parsedCats);
  }, []);

  const onRemoveCatFromFav = (catId: string) => {
    setCats(p => p && p.filter(({ id }) => id != catId));
  };

  if (!cats) {
    return <CatsLoader />;
  }

  return (
    <CatsGrid>
      {cats && cats.map(cat => <CatCard key={cat.id} cat={cat} onRemoveCat={onRemoveCatFromFav} />)}
    </CatsGrid>
  );
}
