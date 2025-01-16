import { CatData } from '@/types';

const STORAGE_KEYS_PREFIX = 'CAT_';

function prefixKey(key: string) {
  return `${STORAGE_KEYS_PREFIX}${key}`;
}

export const catsStorage = {
  getCat(catId: string): CatData | null {
    const cat = localStorage.getItem(prefixKey(catId));

    if (cat) {
      return JSON.parse(cat);
    }

    return null;
  },
  saveCat(cat: CatData) {
    localStorage.setItem(prefixKey(cat.id), JSON.stringify(cat));
  },
  removeCat(catId: string) {
    localStorage.removeItem(prefixKey(catId));
  },
};
