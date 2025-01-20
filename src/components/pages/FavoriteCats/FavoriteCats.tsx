import { FavoriteCatsCatalog } from '@/components';
import cls from './FavoriteCats.module.scss';

export function FavoriteCats() {
  return (
    <main className={cls['favorite-cats-page']}>
      <FavoriteCatsCatalog />
    </main>
  );
}
