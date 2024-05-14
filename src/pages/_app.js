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
        <link rel="icon" href={'/favicon-32x32.png'} />
      </Head>

      <Component {...pageProps} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-93P0M9DCHW" />
      <Script
        id={'gscript'}
      >

        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-93P0M9DCHW')`}

      </Script>

    </div>
  );
}

export default App;
