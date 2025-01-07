import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import seoData from "../../public/data/seo-data.json";
import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/style.css";
import "../styles/benefits.css";
import Script from "next/script";
import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";  // Import FontAwesome styles

// FontAwesome config to avoid auto-adding CSS
config.autoAddCss = false;

// Load Space Grotesk font using next/font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600", "700"],
  display: "swap",  // Ensure fallback font displays while loading
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPageData = seoData[router.pathname];

  useEffect(() => {
    if (currentPageData) {
      console.log("SEO Data loaded for:", router.pathname);
    }
  }, [router.pathname]);

  return (
    <div className={spaceGrotesk.className}>  {/* Apply font style class */}
      <DefaultSeo
        title={currentPageData ? currentPageData.title : "Default Title"}
        description={currentPageData ? currentPageData.description : "Default Description"}
      />
      <Head>
        <link rel="icon" href={'/favicon-v1.ico'} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v1.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-v1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-v1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "OnEggy Technologies",
                "url": "https://www.oneggy.com",
                "logo": "https://www.oneggy.com/logov1.png",
                "sameAs": [
                  "https://www.linkedin.com/company/oneggy",
                  "https://www.instagram.com/oneggytechnologies",
                  "https://www.facebook.com/oneggytechnologies"
                ]
              }
            )
          }}
        />
      </Head>

      <Component {...pageProps} />

      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-93P0M9DCHW"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-93P0M9DCHW');
        `}
      </Script>

      {/* Clarity Tracking Script */}
      <Script
        strategy="afterInteractive"
        id="clarity-script"
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
