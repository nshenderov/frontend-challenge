import { CatData } from '@/types';

export async function fetchCats(page: number): Promise<CatData[]> {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?size=small&limit=20&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_CATS_API_KEY ?? '',
      },
    }
  );

  const data = await res.json();

  return data;
}
