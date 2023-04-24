export const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = url => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
