import { notFound } from 'next/navigation';
import { fetchBook } from '@/app/lib/data';
import { addToCart } from '@/app/lib/actions';

export default async function Page({ params }: { params: {id: string}}) {
  const id = params.id;
  const book = await fetchBook(id);

  if (!book) {
    notFound();
  }

  const addToCartWithId = addToCart.bind(null, id);

  return (
    <main className="container-fixed mt-4 gap-7" id="book-grid">
      { /* eslint-disable-next-line @next/next/no-img-element */ }
      <div><img src="https://placehold.co/250x300" alt="Placeholder image" className="rounded-md" />
      </div>

      <div className="py-2 pr-2 text-lg border-r border-gray-300 ">
        <p className="mb-2 font-medium">{book.title}</p>
        <p className="mb-2 italic">Author: {book.author}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate animi assumenda, quis earum expedita quidem nobis nostrum atque dolorem quo enim quia sed suscipit corrupti saepe nisi fugit? Sed, inventore.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sunt voluptates dolores ut veniam sed aliquam delectus et quidem commodi ad praesentium eligendi a pariatur repellat sequi, minima unde expedita.
        </p>
      </div>

      <div>
        <h2 className="font-medium mb-3">eBook Formats:</h2>
        <ul className="list-disc pl-4 mb-2">
          <li>PDF for desktop/tablets</li>
          <li>epub for Apple Books, e-readers</li>
          <li>mobi for Kindle readers</li>
        </ul>
        <p className="mb-4">Get all eBook formats here for <strong>${book.price}</strong> (USD)</p>
        <form action={addToCartWithId}>
          <button className="primary-button">Add to cart</button>
        </form>
      </div>
    </main>
  );
}
