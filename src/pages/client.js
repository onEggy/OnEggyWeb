import React from "react";
import Navbar from "./components/navbar";
import GetFreeProp from "./home/getFreeProp";
import Section1 from "./components/mainHeadline";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";
import clientPageData from "../../public/data/clientPage.json";
import serviceData from "../../public/data/serviceData.json";
import Image from "next/image";
import Slider from "react-slick";
import EnquiryModal from "./components/EnquiryModal";

const Client = () => {
  const currentPageData = seoData["/client"];
  const {
    head,
    sentence,
    showButton,
    buttonPlaceholder,
  } = clientPageData;

  // Gather all projects from serviceData
  const allProjects = serviceData?.arr?.flatMap(types =>
    types.projects?.map(project => ({
      ...project,
      image: project.image?.replace('../', '/'),
    })) || []
  );

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 0.98,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'linear',
    pauseOnHover: false,
    arrows: true,
    centerMode: true,
    centerPadding: "35.33%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "22%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0.98,
          slidesToScroll: 1,
          centerPadding: "4%",
        },
      },
    ],
  };

  // Reusable ProjectSlider component
  const ProjectSlider = ({ projects }) => (
    <Slider {...sliderSettings} className="mt-10 md:ml-10">
      {projects.map((data, index) => (
        <div key={data.id || index} className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10">
          <Image
            src={data.image}
            alt={data.alt || `Project Image ${index + 1}`}
            width={595}
            height={378}
            className="rounded-lg object-cover"
            priority={index < 2} // Prioritize the first few images for better UX
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
        keywords={currentPageData?.keywords}
      />
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      
      {/* Project Sliders */}
      <ProjectSlider projects={allProjects} />
      <GetFreeProp head={head} para={sentence} />
      <ProjectSlider projects={allProjects} />
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default Client;
