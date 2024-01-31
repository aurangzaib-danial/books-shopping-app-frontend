import { fetchBooks } from "../lib/data";
import BooksGrid from "../ui/books_grid";

export default async function Page() {
  const books = await fetchBooks();
  
  return (
    <main className="container-fixed mt-4">
      <h1 className="text-lg font-semibold mb-4">All Books</h1>
      <BooksGrid books={books} />
    </main>
  );
}
