import React from "react";
import Navbar from "./components/navbar";
import MainHeadline from "./components/mainHeadline";
import Headline from "./components/headline";
import Testimonials from "./home/testimonials";
import Footer from "./components/footer";
import GetFreeProp from "./home/getFreeProp";
import Marksheet from "./home/marksheet";
import Section3 from "./about/section3";
import TechCompo from "./service/techCompo";
import TechnologyStack from "./service/technologyStack";
import Slider from "react-slick";
import Sidebar from "./components/sidebar";
import { NextSeo } from "next-seo";
import seoData from "../../public/data/service-seo.json";

const service = () => {
  const head = "Web Development Making Benchmarking Products";
  const sentence =
    "Code Theorems have the right strategies for providing well-structured, immensely secured, nicely interactive, and user-friendly website development services that are benchmarking in the industry and help you win the market in your domain.";
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const title = "Our Work";
  const desc =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";
  const projects = [
    {
      image: "../client/1.png",
    },
    {
      image: "../client/2.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
  ];
  const boxTitle1 = "Secured";
  const boxTitle2 = "Standardized";
  const boxParaTitle = "How we do it?";
  const boxContent =
    "Your search for owning a website that is standard, secured and provides ease in growing your business virtually to get the top place in the industry ends here, at Code Theorem. Our talented tech geeks will drive you through the whole website development solutions to achieve your desired result of having a custom website.";

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Sidebar />
      <MainHeadline
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <div className="mt-16">
        <Section3
          boxTitle1={boxTitle1}
          boxTitle2={boxTitle2}
          boxParaTitle={boxParaTitle}
          boxContent={boxContent}
        />
        <Headline title={title} desc={desc} />
        <div className="mt-5">
          <Slider {...sliderSettings}>
            {projects.map((data, index) => (
              <div key={index} className="h-auto w-auto p-2 ">
                <img src={data.image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <TechCompo />
      <TechnologyStack />
      <Testimonials />
      <GetFreeProp />
      <Marksheet />
      <Footer />
    </div>
  );
};

export default service;
