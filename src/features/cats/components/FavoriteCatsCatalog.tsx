'use client';

import { useEffect, useState } from 'react';

import { DotsLoader } from '@/components';

import { CardsGrid } from './CardsGrid';
import { CatCard } from './CatCard';
import { catsStore } from '../store';
import { type CatData } from '../types';

export function FavoriteCatsCatalog() {
  const [cats, setCats] = useState<CatData[] | null>(null);

  useEffect(() => {
    setCats(catsStore.getAllCats());
  }, []);

  const onRemoveCatFromFav = (catId: string): void => {
    setCats(p => p && p.filter(({ id }) => id != catId));
  };

  if (!cats) {
    return <DotsLoader className="m-6" />;
  }

  if (cats.length == 0) {
    return <p className="mt-4">Пусто! Добавьте котиков в любимые!</p>;
  }

  return (
    <CardsGrid>
      {cats.map(cat => (
        <CatCard key={cat.id} cat={cat} onRemoveCat={onRemoveCatFromFav} />
      ))}
    </CardsGrid>
  );
}
