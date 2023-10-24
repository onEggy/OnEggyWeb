import React from "react";
import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import VideoSection from "./videoSection";
import CarouselImages from "./carouselImages";
import TeamCompo from "./teamCompo";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import teamPageData from "../../../public/data/teamPage.json";

const Team = () => {
  const showButton = true;
  const { head, sentence, buttonPlaceholder } = teamPageData;

  return (
    <div className="mx-auto max-w-7xl">
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
