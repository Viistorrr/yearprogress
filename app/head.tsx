"use client";
import Script from "next/script";
import { usePathname, useRouter } from "next/navigation";

export default function Head() {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <title>Progreso del Año</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="⏳Un simple conteo del porcentaje de avance del año" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@viistorrr" />
      <meta name="twitter:creator" content="@viistorrr" />
      <meta name="twitter:title" content="Progreso del Año" />
      <meta name="twitter:description" content="⏳Un simple conteo del porcentaje de avance del año" />
      <meta
        name="twitter:image"
        content="https://vyearprogress.vercel.app/assets/imgs/prev.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Progreso del Año" />
      <meta property="og:description" content="⏳Un simple conteo del porcentaje de avance del año" />
      <meta
        property="og:image"
        content="https://vyearprogress.vercel.app/assets/imgs/prev.png"
      />
      <meta property="og:url" content="https://vyearprogress.vercel.app/" />
      <meta property="og:site_name" content="Progreso del Año" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@viistorrr" />
      <meta name="twitter:creator" content="@viistorrr" />
      <meta name="twitter:title" content="Progreso del Año" />
      <meta
        name="twitter:description"
        content="⏳Un simple conteo del porcentaje de avance del año"
      />
      <meta
        name="twitter:image"
        content="https://vyearprogress.vercel.app/assets/imgs/prev.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Progreso del Año" />
      <meta
        property="og:description"
        content="⏳Un simple conteo del porcentaje de avance del año"
      />
      <meta
        property="og:image"
        content="https://vyearprogress.vercel.app/assets/imgs/prev.png"
      />
      <meta property="og:url" content="https://vyearprogress.vercel.app/" />
      <meta property="og:site_name" content="Progreso del Año" />
      <meta property="og:locale" content="es_ES" />
      <meta name="google-site-verification" content="dAw0AMvRwpe0g3xMUzxVgYEwlO6qtZM_tUT7kLgbM7k" />
      

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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3769837006415356"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
