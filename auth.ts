// For exporting custom authentication functions and user verification logic

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {apiHost} from './app/lib/utils';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // const parsedCredentials = z
        //   .object({ email: z.string().email(), password: z.string().min(6) })
        //   .safeParse(credentials);
 
        // if (parsedCredentials.success) {
        //   const { email, password } = parsedCredentials.data;
        //   const user = await getUser(email);
        //   if (!user) return null;
        // }

        // const url = apiHost() + '/login';
        // const authReq = await fetch(url, {method: "post", cache: 'no-cache'});
        // const authRes = await authReq.json();

        console.log(credentials);
 
        return null;
      },
    }),
  ],
});
