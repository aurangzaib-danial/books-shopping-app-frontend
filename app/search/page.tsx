import Link from "next/link";
import { fetchFilteredBooks } from "../lib/data";
import BooksGrid from "../ui/books_grid";

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
      <BooksGrid books={books} />
    </main>
  );
}
