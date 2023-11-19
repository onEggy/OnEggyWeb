import React from "react";
import { useRouter } from "next/router";
import Navbar from "./components/navbar";
import MainHeadline from "./components/mainHeadline";
import Headline from "./components/headline";
import Testimonials from "./home/testimonials";
import Footer from "./components/footer";
import GetFreeProp from "./home/getFreeProp";
import Marksheet from "./home/marksheet";
import Section3 from "./about/section3";
import TechCompoService from "./service/techCompoService";
import TechnologyStack from "./service/technologyStack";
import Slider from "react-slick";
import Sidebar from "./components/sidebar";
import serviceData from "../../public/data/serviceData.json";
import { NextSeo } from "next-seo";

const service = () => {
  const router = useRouter();
  const { id } = router.query;

  const service = serviceData.services.find((s) => s.id === id);
  if (!service) {
    return <p>Service not found</p>;
  }
  const {
    pageTitle,
    perpageSentence,
    perPageShowButton,
    ourWork,
    workDesc,
    projectImage,
    boxTitle1,
    boxTitle2,
    boxParaTitle1,
    boxContent,
  } = service;

  
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
      <NextSeo title={pageTitle} />
      <Navbar />
      <Sidebar />
      <MainHeadline
        head={pageTitle}
        sentence={perpageSentence}
        showButton={perPageShowButton}
        buttonPlaceholder="Book a consultation"
      />
      <div className="mt-16">
        <Section3
          boxTitle1={boxTitle1}
          boxTitle2={boxTitle2}
          boxParaTitle={boxParaTitle1}
          boxContent={boxContent}
        />
        <Headline title={ourWork} desc={workDesc} />
        <div className="mt-5">
          <Slider {...sliderSettings}>
            {projectImage.map((image, index) => (
              <div key={index} className="h-auto w-auto p-2 ">
                <img src={image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <TechCompoService id={id} serviceData={service} />
      <TechnologyStack id={id} serviceData={service} />
      <Testimonials />
      <GetFreeProp />
      <Marksheet />
      <Footer />
    </div>
  );
};

export default service;
