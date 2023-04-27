'use client';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

export default function AuthContext({ children }) {
  console.log(sessionprovider);
  return <SessionProvider>{children}</SessionProvider>;
}
