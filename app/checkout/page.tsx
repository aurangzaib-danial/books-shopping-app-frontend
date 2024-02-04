import { getCart } from "../lib/actions";
import { fetchBooksByIds } from "../lib/data";
import { calculateTotalBooksPrices } from "../lib/utils";
import PaymentForm from "../ui/payment_form";
import { redirect } from 'next/navigation';

export default async function Page() {
  const cart = await getCart();

  if (cart.length === 0) {
    redirect("/");
  } 

  const books = await fetchBooksByIds(cart);

  return (
    <main className="mt-5 mx-auto w-full max-w-64">
      <div className="text-center mb-4">
        <h2 className="font-semibold text-xl">Checkout</h2>
        <p className="mt-2">Total: ${calculateTotalBooksPrices(books)}</p>
      </div>
      <section>
        <PaymentForm />
      </section>
    </main>
  );
}
