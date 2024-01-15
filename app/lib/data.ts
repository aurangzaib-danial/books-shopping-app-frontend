import { Book } from './definitions';

const developmentUrlPrefix = 'http://localhost:3000';
const productionUrlPrefix = 'http://example.com';

async function getData<T>(resource : string) : Promise<T> {
  const prefix = process.env.NODE_ENV === 'development' ? developmentUrlPrefix : productionUrlPrefix;

  const res = await fetch(prefix + resource, { cache: 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function fetchBooks() {
  const books = await getData<Book[]>('/books');

  return books;
}
