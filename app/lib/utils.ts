import { Book } from "./definitions"

export function apiHost() {
  const development = 'http://localhost:3000';
  const production = 'http://example.com';

  return process.env.NODE_ENV === 'development' ? development : production;
}

export async function postData(route : string, params : any) {
  const url = apiHost() + route;
  const authReq = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
    body: JSON.stringify(params)
  });
  return authReq;
}

export function calculateTotalBooksPrices(books: Book[]) {
  return books.reduce((acc, book) => acc + book.price, 0);
}
