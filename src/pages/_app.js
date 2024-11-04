import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import seoData from "../../public/data/seo-data.json";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import "@/styles/style.css";
import "@/styles/benefits.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Script from "next/script";
import Head from "next/head";

config.autoAddCss = false;

function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPageData = seoData[router.pathname];

  useEffect(() => {
    if (currentPageData) {

    }
  }, [router.pathname]);

  return (
    <div>
      <DefaultSeo
        title={currentPageData ? currentPageData.title : "Default Title"}
        description={
          currentPageData ? currentPageData.description : "Default Description"
        }
      />
      <Head>
        <link rel="icon" href={'/favicon-v1.ico'} />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v1.png" />

        {/* Favicon for browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-v1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-v1.png" />
        {/* Preconnect to Google Fonts to establish early connection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* Load Google Fonts asynchronously with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-93P0M9DCHW"/>
      <Script
        id={'gscript'}
      >

        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-93P0M9DCHW')`}

      </Script>
        
        <Script 
        strategy="lazyOnload"
        onLoad={() => console.log('Clarity script loaded')}
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oiwat3swu4");
          `,
        }}
      />

    </div>
  );
}

export default App;
