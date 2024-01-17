import { AuthParams } from "./definitions";

export function apiHost() {
  const development = 'http://localhost:3000';
  const production = 'http://example.com';

  return process.env.NODE_ENV === 'development' ? development : production;
}

export async function authenticateWithApi(params : AuthParams) {
  const url = apiHost() + '/sign_in';
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
