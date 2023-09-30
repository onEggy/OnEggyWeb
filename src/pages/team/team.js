import React from "react";
import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import VideoSection from "./videoSection";
import CarouselImages from "./carouselImages";
import TeamCompo from "./teamCompo";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const team = () => {
  const showButton = true;
  const head = "Tech Heroes Creating Extraordinary Solutions!";
  const sentence =
    "Discover our team of Tech Heroes, who are knowledgeable and enthusiastic about cutting-edge technology. We collaborate to create remarkable online solutions, pushing the envelope to offer excellence for your digital success.";
  const buttonPlaceholder = "Book a consultation";

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

export default team;
