import BooksGrid from '@/app/ui/books_grid';
import { notFound } from 'next/navigation';
import { fetchGenre } from '@/app/lib/data';

export default async function Page ({params} : {params: {id: string}}) {
  const id = params.id;
  const genre = await fetchGenre(id);

  if (!genre) {
    notFound();
  }

  const noContent = <p className='text-center'>This genre has no books yet.</p>

  return (
    <main className="container-fixed mt-4">
      <h1 className='text-lg font-semibold mb-4'>{ genre.name }</h1>
      { genre.books!.length === 0 ? noContent : <BooksGrid books={genre.books!} /> }
    </main>
  );
}
