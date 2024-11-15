import React from "react";
import Navbar from "./components/navbar";
import Section1 from "./components/mainHeadline";
import VideoSection from "./team/videoSection";
import CarouselImages from "./team/carouselImages";
import TeamCompo from "./team/teamCompo";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { NextSeo } from "next-seo";
import seoData from "../../public/data/seo-data.json";
import teamPageData from "../../public/data/teamPage.json";
import Head from "next/head";
import EnquiryModal from "./components/EnquiryModal";

const Team = () => {
  const showButton = true;
  const { head, sentence, buttonPlaceholder } = teamPageData;
  const currentPageData = seoData["/team"];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';
  return (
    <div className="mx-auto max-w-7xl">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
       <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
        <link
          rel="canonical"
          href={`${baseUrl}service/${props?.['meta-title-slug']}`}
        />
      </Head>
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        mainCss={'w-full mt-12 sm:mt-24'}
        headCss={'tracking-wide font-[400] leading-tight text-3xl w-5/6 '}
        pCss={'sm:text-xl md:w-11/12'}

      />
      <VideoSection />
      <CarouselImages />
      <TeamCompo />
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default Team;
