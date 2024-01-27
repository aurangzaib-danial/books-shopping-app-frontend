import { addToCart } from '@/app/lib/actions';

export async function POST(request: Request) {
  const { id } = await request.json();
  addToCart(id);

  return Response.json({ status: "book added" });
}
