import { Inter } from "next/font/google";
import Head from "next/head";
import Landing from "./home/landing";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });
const currentPageData = seoData["/"];

export default function App() {
  return (
    <div>
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
       <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
      </Head>
      <Landing />
    </div>
  );
}
