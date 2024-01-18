// For exporting custom authentication functions and user verification logic

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {postData} from '@/app/lib/utils';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const params = {
          email: credentials?.email,
          password: credentials?.password
        };

        const apiAuthRes = await postData('/sign_in', params);
        const res = await apiAuthRes.json();

        if (apiAuthRes.ok) {
          return res.user;
        }

        console.log(res.message);
        return null;
      },
    }),
  ],
});
