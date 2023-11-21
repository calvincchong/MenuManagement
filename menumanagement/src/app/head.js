'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { gtmId, pageview } from '../lib/gtm';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Head() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    if (pathname) {
      pageview(url);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <title>Koo Koo Chicken</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="Koo Koo Chicken"
        content="Malaysian Comfort Food in Brooklyn NY"
      />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;500;700;900&display=swap"
        rel="stylesheet"
      ></link> */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtmId}');
          `,
        }}
      />
    </>
  );
}
