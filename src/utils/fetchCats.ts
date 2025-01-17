import { CatData } from '@/types';

type FetchCatsProps = readonly [Promise<CatData[]>, AbortController['abort']];

export function fetchCats(page: number): FetchCatsProps {
  const apiKey = process.env.NEXT_PUBLIC_CATS_API_KEY;

  if (!apiKey) throw new Error('API key is missing');

  const controller = new AbortController();
  const query = `https://api.thecatapi.com/v1/images/search?size=small&limit=24&page=${page}`;
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };

  const getCats = fetch(query, { headers, signal: controller.signal }).then(res => res.json());

  return [getCats, controller.abort.bind(controller)];
}
