import { Order, Book } from "../lib/definitions";
import { fetchOrders } from "../lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    status?: string;
  }
}) {
  const status = searchParams?.status;
  const orders = await fetchOrders();

  return (
    <main className="mt-4 max-w-sm mx-auto">
      <h1 className="text-center text-xl font-semibold mb-4">Orders</h1>

      { status && <p className="bg-green-300 text-green-800 font-semibold p-4 rounded-md my-4">
        Your order has been sent to your email.
      </p> }

      { orders.length === 0 && <p className="text-center">You have no orders.</p> }

      {orders.map((order : Order) => (
        <article key={order.id} className="border border-gray-300 rounded-md p-4 mb-4">
          <p>Order number: {order.id}</p>
          <p>Date placed: {(new Date(order.created_at)).toLocaleDateString('en-GB')}</p>
          <p>Total: ${order.total}</p>
          <p>Books ordered:</p>
          <ul className="list-disc pl-6">
            {order.books.map((book : Book) => (
              <li key={book.id}>{ book.title }</li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}
