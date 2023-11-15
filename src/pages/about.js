import React from "react";
import GetFreeProp from "./home/getFreeProp";
import Navbar from "./components/navbar";
import Section1 from "./components/mainHeadline";
import Section2 from "./about/section2";
import Section3 from "./about/section3";
import Section4 from "./about/section4";
import Section5 from "./about/section5";
import Headline from "./components/headline";
import Platforms from "./about/platforms";
import Platformsrtl from "./about/platformsrtl";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { useRef } from "react";
import aboutPageData from "../../public/data/aboutPage.json";
import seoData from "../../public/data/seo-data.json";

import { NextSeo } from "next-seo";

const About = () => {
  const currentPageData = seoData["/about"];
  const {
    brands,
    alternative,
    compoArray,
    titleAbout,
    descAbout,
    head,
    sentence,
    showButton,
    buttonPlaceholder,
    boxTitle1,
    boxTitle2,
    boxParaTitle,
    boxContent,
  } = aboutPageData;

  return (
    <div className="bg-cover bg-right sm:min-h-screen landingPage1 container max-w-7xl mx-auto">
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
      <Section2 />
      <Section3
        boxTitle1={boxTitle1}
        boxTitle2={boxTitle2}
        boxParaTitle={boxParaTitle}
        boxContent={boxContent}
      />
      <Section4 />
      <GetFreeProp />
      <div className="sm:mt-8 my-8 platform-div">
        <Platforms />
        <Platformsrtl />
        <Platforms />
      </div>
      <Headline title={titleAbout} desc={descAbout} />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-6 sm:gap-y-16 gap-10 mb-16 justify-items-stretch] px-4 sm:px-0 mt-10 ">
        {compoArray.map(
          (item, index) => (
            console.log(item.head),
            (<Section5 key={index} head={item} index={index} />)
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default About;
