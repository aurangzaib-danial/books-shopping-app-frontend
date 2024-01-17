// For configuration NextAuth like telling it what to do when a user visit a protected page
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/sign_in',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnOrdersPage = nextUrl.pathname.startsWith('/orders');
      const isOnSignInPage = nextUrl.pathname.startsWith('/sign_in');
      const isOnSignUpPage = nextUrl.pathname.startsWith('/sign_up');

      if (isOnOrdersPage) {
        return isSignedIn ? true : false;
      }

      if (isSignedIn && (isOnSignInPage || isOnSignUpPage)) {
        return Response.redirect(new URL('/orders', nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
