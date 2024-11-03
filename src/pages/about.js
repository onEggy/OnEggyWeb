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
import ProjectLogos from "./home/projectlogos";
import Head from "next/head";
import EnquiryModal from "./components/EnquiryModal";
import FaqSection from "./components/faq";
import PartnerShowcase from "./components/partnerShowcase";
import ContactUs from "./home/contactUs";

const About = () => {

  const partners = [
    { name: "AWS Partner", logo: "/partnerlogos/AWSpartner.png", rating: 4.5 },
    { name: "Xloud Technologies", logo: "/partnerlogos/xloudtechnologies.png", rating: 4.5 },
    // { name: "Xloud Technologies", logo: "/partnerlogos/xloudtechnologies.png" },
    // { name: "Xloud Technologies", logo: "/partnerlogos/xloudtechnologies.png" },
    // Add more partners as needed
  ];

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
      <Head>
       <meta name="keywords" content={currentPageData?.keywords} />
      </Head>
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        mainCss={'mt-16'}
        headCss={'font-[500] sm:leading-tight'}
      />
      <Section2 />
      <Section3
        boxTitle1={boxTitle1}
        boxTitle2={boxTitle2}
        boxParaTitle={boxParaTitle}
        boxContent={boxContent}
      />
      <PartnerShowcase partners={partners} />
      <Section4 />
      <GetFreeProp
        head={"Let's get things begun"}
        para={"Contact us today to learn more about how our digital services may assist your company in growing and succeeding online"}
        buttonText={"Get your free proposal"}
      />
      <div className="sm:-mt-20  my-8 platform-div">
        {/* <Platforms /> */}
        {/* <Platformsrtl /> */}
        {/* <Platforms /> */}
        <ProjectLogos />
        <ProjectLogos direction="right" />
        {/* <ProjectLogos /> */}
      </div>
      <Headline title={titleAbout} desc={descAbout} titleCss={'md:font-bold md:text-4xl'} descCss={'md:w-36rem] mt-7 md:ml-16 md:font-semibold'} />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-6 sm:gap-y-16 gap-10 mb-16 justify-items-stretch] px-4 sm:px-0 my-16 ">
        {compoArray.map(
          (item, index) => (
            // console.log(item.head),
            (<Section5 key={index} head={item} index={index} />)
          )
        )}
      </div>
      <FaqSection />
      <ContactUs />
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default About;
