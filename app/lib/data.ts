import { Book, Genre, Order } from './definitions';
import { apiHost, generateToken } from './utils';

async function getData<T>(resource : string) : Promise<T> {
  const res = await fetch(apiHost() + resource, { cache: 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export async function fetchLatestBooks() {
  const books = await getData<Book[]>('/books?latest=1');
  return books;
}

export async function fetchBook(id : string) {
  const book = await getData<Book>('/books/' + id);
  return book;
}

export async function fetchGenres() {
  const genres = await getData<Genre[]>('/genres');
  return genres;
}

export async function fetchBooksByIds(ids : string[]) {
  const books = await getData<Book[]>(`/books?ids=${ids.join()}`);
  return books;
}

export async function fetchOrders() {
  const token = await generateToken();
  const orders = await getData<Order[]>(`/orders?token=${token}`);
  return orders;
}

export async function fetchFilteredBooks(q : string) {
  const books = await getData<Book[]>(`/search?q=${q}`);
  return books;
}

export async function fetchGenre(id : string) {
  const genre = await getData<Genre>(`/genres/${id}`);
  return genre;
}

export async function fetchBooks() {
  const books = await getData<Book[]>('/books');
  return books;
}
