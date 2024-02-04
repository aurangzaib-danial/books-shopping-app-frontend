import {fetchLatestBooks, fetchGenres} from "./lib/data";
import Link from 'next/link';
import BooksGrid from "./ui/books_grid";

export default async function Page() {
  const [books, genres] = await Promise.all([
    fetchLatestBooks(),
    fetchGenres()
  ]);

  return (
    <main className="container-fixed" id="main-grid">
      <section id="genres">
        <div className="border border-gray-300 rounded-md text-lg p-4">
          <h2 className="mb-4 font-medium">Genres:</h2>
          <ul className="list-disc pl-4 underline">
            {genres.map(genre => (
              <li key={genre.id}><Link href={`/genres/${genre.id}`}>{ genre.name }</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="md:pt-4 md:pl-10 text-lg" id="new-releases">
        <h2 className="text-lg font-medium mb-4">New Releases: </h2>
        <BooksGrid books={books} />
      </section>
    </main>
  );
}
