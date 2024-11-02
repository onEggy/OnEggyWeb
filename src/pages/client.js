import React from "react";
import Navbar from "./components/navbar";
import GetFreeProp from "./home/getFreeProp";
import Section1 from "./components/mainHeadline";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import nextseo, { NextSeo } from "next-seo";

import clientPageData from "../../public/data/clientPage.json";
import serviceData from "../../public/data/serviceData.json";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import EnquiryModal from "./components/EnquiryModal";

const Client = () => {
  const currentPageData = seoData["/client"];

  const {
    projects1,
    projects2,
    projects3,
    showButton,
    head,
    sentence,
    buttonPlaceholder,
  } = clientPageData;

  let allProjects = []

  serviceData?.arr?.map(types => {

    types?.projects?.map(project => {
      allProjects.push({ ...project, image: project.image?.replace('../', '/') })
    })

  })


  const settings = {
    // dots: true,
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
    // customPaging: function (i) {
    //   const isActive = i === currentSlide;
    //   return isActive ? <ActiveDot /> : <NormalDot />;
    // },
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };


  console.log(allProjects[0])




  return (
    <div className="max-w-7xl mx-auto">
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
      />
      {/* <div className="sm:flex mt-10 ">
        {allProjects?.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[350px] w-[329px] sm:h-[378px] sm:w-[356px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />

          </div>
        ))}
      </div> */}

      <Slider {...settings} className="md:ml-10">
        {allProjects.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </Slider>





      <Slider {...settings} className="mt-16 md:ml-10">
        {allProjects.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </Slider>

      <GetFreeProp
        head
        para={sentence} />

      <Slider {...settings} className="md:ml-10">
        {allProjects.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </Slider>
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default Client;
