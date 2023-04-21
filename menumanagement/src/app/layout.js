import './globals.css';
import Providers from './Providers';
import Analytics from '../components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
