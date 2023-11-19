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

const Team = () => {
  const showButton = true;
  const { head, sentence, buttonPlaceholder } = teamPageData;
  const currentPageData = seoData["/team"];
  return (
    <div className="mx-auto max-w-7xl">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <VideoSection />
      <CarouselImages />
      <TeamCompo />
      <Footer />
    </div>
  );
};

export default Team;
