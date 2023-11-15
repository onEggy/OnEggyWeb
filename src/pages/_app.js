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

config.autoAddCss = false;

function App({ Component, pageProps }) {
  const router = useRouter();
  const currentPageData = seoData[router.pathname];

  useEffect(() => {
    if (currentPageData) {
      console.log(
        `Viewing ${currentPageData.title} - ${currentPageData.description}`
      );
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
      <Component {...pageProps} />
    </div>
  );
}

export default App;
