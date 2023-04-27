import './globals.css';
import Providers from './Providers';
import { gtmId, pageview } from '../lib/gtm';
// import { Session } from 'next-auth';
import { headers } from 'next/headers';
import { SessionProvider } from 'next-auth/react';
// import AuthContext from './AuthContext';

// get sessions? \
async function getSession(cookie) {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length ? session : null;
}

export default async function RootLayout({ children }) {
  const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Providers>
          <SessionProvider session={session}>{children}</SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
