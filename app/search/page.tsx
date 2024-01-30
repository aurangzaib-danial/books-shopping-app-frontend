import Link from "next/link";
import { fetchFilteredBooks } from "../lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  }
}) {
  const q = searchParams?.q || '';
  const books = await fetchFilteredBooks(q);
  
  return (
    <main className="container-fixed mt-4">
      <h1 className="text-lg font-semibold mb-4">Search results:</h1>
      <section className="books-grid">
        {books.map(book => (
          <Link href={`/books/${book.id}`} key={book.id}>
            <article>
              <img src="https://placehold.co/250x250" />
              <p>{book.title}</p>
              <p>${book.price}</p>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
