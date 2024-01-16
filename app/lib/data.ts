import { Book } from './definitions';
import { apiHost } from './utils';

async function getData<T>(resource : string) : Promise<T> {
  const res = await fetch(apiHost() + resource, { cache: 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function fetchBooks() {
  const books = await getData<Book[]>('/books');

  return books;
}
