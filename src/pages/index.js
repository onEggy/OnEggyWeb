// import { Inter } from "next/font/google";
import Head from "next/head";
import Landing from "./home/landing";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";
import EnquiryModal from "./components/EnquiryModal";

// const inter = Inter({ subsets: ["latin"] });
const currentPageData = seoData["/"];

export default function App() {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';

  return (
    <div>
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
        <link
          rel="canonical"
          href={`${baseUrl}`}
        />
      </Head>
      <Landing />
      <EnquiryModal />
    </div>
  );
}
