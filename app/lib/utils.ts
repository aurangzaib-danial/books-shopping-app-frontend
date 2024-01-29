import { auth } from "@/auth";
import { Book } from "./definitions"
import jwt from 'jsonwebtoken';
import email from "next-auth/providers/email";

export function apiHost() {
  const development = 'http://localhost:3000';
  const production = 'http://example.com';

  return process.env.NODE_ENV === 'development' ? development : production;
}

export async function postData(route : string, params : any) {
  const url = apiHost() + route;
  const authReq = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
    body: JSON.stringify(params)
  });
  return authReq;
}

export function calculateTotalBooksPrices(books: Book[]) {
  return books.reduce((acc, book) => acc + book.price, 0);
}

export async function generateToken() {
  const userEmail = (await auth())!.user!.email;
  const secretKey = process.env.AUTH_SECRET!;
  const expirationTimeInSeconds = 60;

  const payload = {
    user_email: userEmail,
    exp: Math.floor(Date.now() / 1000) + expirationTimeInSeconds,
  };


  const token = jwt.sign(payload, secretKey);

  return token;
}
