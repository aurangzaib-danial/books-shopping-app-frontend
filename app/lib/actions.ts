'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { postData } from './utils';

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
