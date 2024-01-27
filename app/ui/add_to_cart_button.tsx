'use client';
import { useRouter } from "next/navigation";

export default function AddToCartButton({ id } : {id : string}) {
  const { push, refresh } = useRouter();
  
  async function onSubmit(e : React.SyntheticEvent) {
    e.preventDefault();
    await fetch('/cart/add', 
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify({ id }),
      }
    );

    push('/cart');
    refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <button className="primary-button">Add to cart</button>
    </form>
  );
}
