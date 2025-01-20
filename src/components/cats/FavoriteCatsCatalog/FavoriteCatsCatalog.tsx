import { useEffect, useState } from 'react';

import { CatData } from '@/types';
import { favCatsIdb } from '@/store';
import { CatCard, CatsGrid, Loader } from '@/components';

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
    return <Loader text="загружаем котиков" />;
  }

  if (cats.length == 0) {
    return <div className={cls.placeholder}>Тут пока пусто</div>;
  }

  return (
    <CatsGrid>
      {cats.map(cat => (
        <CatCard key={cat.id} cat={cat} onRemoveCat={onRemoveCatFromFav} />
      ))}
    </CatsGrid>
  );
}
