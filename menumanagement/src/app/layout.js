import './globals.css';
import Providers from './Providers';
import Analytics from '../components/Analytics';
import { gtmId, pageview } from '../lib/gtm';

export default function RootLayout({ children }) {
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
          {/* <Analytics /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
