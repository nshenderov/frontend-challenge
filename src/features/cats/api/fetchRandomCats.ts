import { CatData } from '../types';

type PromiseAbortTuple = readonly [Promise<CatData[]>, AbortController['abort']];

export function fetchRandomCats(page: number): PromiseAbortTuple {
  const apiKey = process.env.NEXT_PUBLIC_CATS_API_KEY;

  if (!apiKey) throw new Error('API key is missing');

  const controller = new AbortController();
  const query = `https://api.thecatapi.com/v1/images/search?size=small&limit=24&page=${page}`;
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };

  const promise = fetch(query, { headers, signal: controller.signal }).then(res => res.json());

  return [promise, controller.abort.bind(controller)];
}
