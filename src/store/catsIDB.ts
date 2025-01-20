import { CatData } from '@/types';

const DB_NAME = 'cats';
const FCATS_STORE_NAME = 'favorite';

const openRequest = indexedDB.open(DB_NAME);
let db: IDBDatabase;

openRequest.onupgradeneeded = () => {
  const db = openRequest.result;
  if (!db.objectStoreNames.contains(FCATS_STORE_NAME)) {
    db.createObjectStore(FCATS_STORE_NAME, { keyPath: 'id' });
  }
};

openRequest.onsuccess = () => {
  db = openRequest.result;

  db.onversionchange = () => {
    db.close();
    location.reload();
  };
};

openRequest.onerror = () => {
  throw new Error('Failed to open the storage');
};

export const favCatsIdb = {
  hasCat(catId: string): Promise<boolean> {
    const store = db.transaction(FCATS_STORE_NAME, 'readonly').objectStore(FCATS_STORE_NAME);
    const request = store.get(catId);

    const promise = new Promise<boolean>((res, rej) => {
      request.onsuccess = () => {
        if (request.result !== undefined) {
          res(true);
        } else {
          res(false);
        }
      };
      request.onerror = () => {
        rej(request.error);
      };
    });

    return promise;
  },
  getAllCats(): Promise<CatData[]> {
    const store = db.transaction(FCATS_STORE_NAME, 'readonly').objectStore(FCATS_STORE_NAME);
    const request = store.getAll();

    const promise = new Promise<CatData[]>((res, rej) => {
      request.onsuccess = () => {
        res(request.result);
      };
      request.onerror = () => {
        rej(request.error);
      };
    });

    return promise;
  },
  saveCat(cat: CatData): Promise<string> {
    const store = db.transaction(FCATS_STORE_NAME, 'readwrite').objectStore(FCATS_STORE_NAME);
    const request = store.add(cat);

    const promise = new Promise<string>((res, rej) => {
      request.onsuccess = () => {
        res('success');
      };
      request.onerror = () => {
        rej(request.error);
      };
    });

    return promise;
  },
  removeCat(catId: string): Promise<string> {
    const store = db.transaction(FCATS_STORE_NAME, 'readwrite').objectStore(FCATS_STORE_NAME);
    const request = store.delete(catId);

    const promise = new Promise<string>((res, rej) => {
      request.onsuccess = () => {
        res('success');
      };
      request.onerror = () => {
        rej(request.error);
      };
    });

    return promise;
  },
};
