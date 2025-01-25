import { useEffect, useState } from 'react';

import { CatData } from '@/types';
import { favCatsIdb } from '@/store';
import { CatCard, CardsGrid, LoaderDots } from '@/components';

import cls from './FavoriteCatsCatalog.module.scss';

export function FavoriteCatsCatalog() {
  const [cats, setCats] = useState<CatData[] | null>(null);

  useEffect(() => {
    favCatsIdb
      .getAllCats()
      .then(favCats => {
        setCats(favCats);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  const onRemoveCatFromFav = (catId: string): void => {
    setCats(p => (p ? p.filter(({ id }) => id != catId) : null));
  };

  if (!cats) {
    return <LoaderDots className={cls['favorite-cats-loader']} />;
  }

  if (cats.length == 0) {
    return <div className={cls.placeholder}>Пусто! Добавьте котиков в любимые!</div>;
  }

  return (
    <CardsGrid>
      {cats.map(cat => (
        <CatCard key={cat.id} cat={cat} onRemoveCat={onRemoveCatFromFav} />
      ))}
    </CardsGrid>
  );
}
