"use client";
import Script from "next/script";
import { usePathname, useRouter } from "next/navigation";

export default function Head() {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <title>Progreso del Año - Dev @viistorrr</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="A simple a simple progress bar" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@viistorrr" />
      <meta name="twitter:creator" content="@viistorrr" />
      <meta name="twitter:title" content="Year Progress" />
      <meta name="twitter:description" content="A simple year progress bar" />
      <meta
        name="twitter:image"
        content="https://www.yearprogress.info/assets/imgs/preview.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Year Progress" />
      <meta property="og:description" content="A simple year progress bar" />
      <meta
        property="og:image"
        content="https://www.yearprogress.info/assets/imgs/preview.png"
      />
      <meta property="og:url" content="https://www.yearprogress.info/" />
      <meta property="og:site_name" content="Year Progress" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@viistorrr" />
      <meta name="twitter:creator" content="@viistorrr" />
      <meta name="twitter:title" content="Progreso del Año" />
      <meta
        name="twitter:description"
        content="Una simple barra de progreso que te muestra el porcentaje de avance del año "
      />
      <meta
        name="twitter:image"
        content="https://www.progresodelano.info/assets/imgs/preview.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Progreso del Año" />
      <meta
        property="og:description"
        content="Una simple barra de progreso que te muestra el porcentaje de avance del año"
      />
      <meta
        property="og:image"
        content="https://www.progresodelano.info/assets/imgs/preview.png"
      />
      <meta property="og:url" content="https://www.progresodelano.info/" />
      <meta property="og:site_name" content="Progreso del Año" />
      <meta property="og:locale" content="es_ES" />

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
