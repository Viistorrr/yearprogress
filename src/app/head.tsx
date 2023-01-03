import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>vYear Progress</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="A simple a simple progress bar" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@viistorrr" />
      <meta name="twitter:creator" content="@viistorrr" />
      <meta name="twitter:title" content="vYear Progress" />
      <meta name="twitter:description" content="A simple year progress bar" />
      <meta
        name="twitter:image"
        content="https://vyearprogress.vercel.app/assets/imgs/preview.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="vYear Progress" />
      <meta property="og:description" content="A simple year progress bar" />
      <meta
        property="og:image"
        content="https://vyearprogress.vercel.app/assets/imgs/preview.png"
      />
      <meta property="og:url" content="https://vyear-progress.vercel.app/" />
      <meta property="og:site_name" content="vYear Progress" />
      <meta property="og:locale" content="en_US" />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3ZY266V0CC"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZY266V0CC');
            `}
      </Script>
    </>
  );
}
