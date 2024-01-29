import { getCart, setCart } from "@/app/lib/actions";
import { generateToken, postData } from "@/app/lib/utils";

export async function POST(request: Request) {
  const cart = await getCart();
  const token = await generateToken();
  
  await postData('/orders', { books_ids: cart, token: token});
  await setCart([]);

  return Response.json({ status: "order created" });
}
