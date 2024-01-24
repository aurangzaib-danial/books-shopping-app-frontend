'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { postData } from './utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

export async function authenticate(
  _: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export interface SignUpFormState {
  errors: string[];
}

export async function signUp(prevState : SignUpFormState | undefined, formData : FormData) {
  const params = {
    'email': formData.get('email'),
    'password': formData.get('password'),
    'confirm_password': formData.get('confirm_password')
  };

  const request = await postData('/sign_up', params);
  const response = await request.json();
  if (request.ok) {
    await signIn('credentials', formData);
  } else {
    return { errors: response.errors };
  }
}

export async function addToCart(id : string) {
  let cart = await getCart();
  if (!cart.includes(id)) {
    cart.push(id);
    setCart(cart);
  }

  revalidatePath('/cart');
  redirect('/cart');
}

export async function getCart() {
  const cart = cookies().get('cart');
  if (!cart || cart.value === '') {
    return [];
  } else {
    return cart.value.split('.');
  }
}

function setCart(cart : string[]) {
  cookies().set('cart', cart.join('.'));
}

export async function removeFromCart(id : string | number) {
  id = id.toString();
  const cart = await getCart();
  if (cart.includes(id)) {
    setCart(cart.filter((itemId : string) => itemId !== id));
  }
}

export async function cartCount() {
  const cart = await getCart();
  return cart.length;
}
