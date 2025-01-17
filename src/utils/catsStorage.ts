import { CatData } from '@/types';

const STORAGE_KEYS_PREFIX = 'CAT_';

function prefixKey(key: string): string {
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
  getAllCats(): CatData[] {
    const parsedCats = [];

    const keys = Object.keys(localStorage);
    for (const key of keys) {
      if (key.startsWith(STORAGE_KEYS_PREFIX)) {
        const catData = localStorage.getItem(key);
        if (catData) {
          parsedCats.push(JSON.parse(catData));
        }
      }
    }

    return parsedCats;
  },
  saveCat(cat: CatData): void {
    localStorage.setItem(prefixKey(cat.id), JSON.stringify(cat));
  },
  removeCat(catId: string): void {
    localStorage.removeItem(prefixKey(catId));
  },
};
