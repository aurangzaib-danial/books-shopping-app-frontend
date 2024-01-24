import { getCart, removeFromCart } from "../lib/actions";
import { fetchBooksByIds } from "../lib/data";
import { calculateTotalBooksPrices } from "../lib/utils";

export default async function Page() {
  return (
    <main className="mt-5 mx-auto max-w-52 text-center">
      <h2 className="font-semibold text-xl">Your cart</h2>
      <section id="cart" className="mt-5">
        <CartContents />
      </section>
    </main>
  );
}

async function CartContents() {
  const cart = await getCart();

  if (cart.length === 0) {
    return <p>Cart has no items in it</p>;
  }

  const books = await fetchBooksByIds(cart);

  return (
    <>
      {books.map(book => (
        <article key={book.id} className="border-b border-gray-300 mb-4 pb-4">
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <img src="https://placehold.co/70x70" className="inline" alt="Placeholder image" />
          <p className="mt-3">{ book.title }</p>
          <p className="mb-3">${ book.price }</p>
          <form action={removeFromCart.bind(null, book.id)}>
            <button className="primary-button">Remove</button>
          </form>
        </article>
      ))}

      <p className="mb-2">Total: ${calculateTotalBooksPrices(books)}</p>
      <button className="checkout-button">Check out</button>
    </>
  );
}
