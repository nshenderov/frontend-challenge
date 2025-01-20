import { AllCatsCatalog } from '@/components';
import cls from './AllCats.module.scss';

export function AllCats() {
  return (
    <main className={cls['all-cats-page']}>
      <AllCatsCatalog />
    </main>
  );
}
