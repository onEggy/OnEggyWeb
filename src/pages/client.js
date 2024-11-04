import React from "react";
import dynamic from 'next/dynamic';
import Navbar from "./components/navbar";
import GetFreeProp from "./home/getFreeProp";
import Section1 from "./components/mainHeadline";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import clientPageData from "../../public/data/clientPage.json";
import seoData from "../../public/data/seo-data.json";
import serviceData from "../../public/data/serviceData.json";
import Link from "next/link";

const EnquiryModal = dynamic(() => import('./components/EnquiryModal'), { ssr: false });

const Client = () => {
  const currentPageData = seoData["/client"];
  const { head, sentence, showButton, buttonPlaceholder } = clientPageData;

  const allProjects = serviceData?.arr?.flatMap(types =>
    types?.projects?.map(project => ({
      ...project,
      image: project.image?.replace('../', '/')
    }))
  ) || [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'linear',
    pauseOnHover: false,
    arrows: true,
    centerMode: true,
    centerPadding: "20%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5%",
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo title={currentPageData.title} description={currentPageData.description} />
      <Head>
        <meta name="keywords" content={currentPageData?.keywords} />
      </Head>

      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        headCss="text-center text-4xl font-bold text-gray-900 mt-8 mb-2"
        pCss="text-center text-xl text-gray-700 mt-2"
      />

      {/* Case Studies Section */}
      <div className="my-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-8">Our Case Studies</h2>
        
        <Slider {...settings} className="mb-12">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-md md:max-w-2xl lg:max-w-3xl"
            >
              <div className="relative h-80 md:h-96">
                <Image
                  src={project.image}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title || `Project ${index + 1}`}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <Link href={`/service/${project.slug}`} passHref>
                  <a className="inline-flex items-center px-4 py-2 text-blue-500 hover:text-blue-700 transition font-medium">
                    View Case Study
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414l-3.293 3.293a1 1 0 01-1.414-1.414l5-5z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Call to Action */}
      <div className="my-12 py-8 bg-blue-100 text-center rounded-lg mx-4 sm:mx-auto sm:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Want to Learn More About Our Work?</h2>
        <p className="text-gray-700 mb-6">Discover how we can help transform your business with our innovative solutions.</p>
        <GetFreeProp head="Get in Touch" para="Reach out for a free consultation and let's discuss your project." />
      </div>

      {/* Additional Carousel for Highlights */}
      <Slider {...settings} className="mt-16 mb-16 px-4 sm:px-6 lg:px-8">
        {allProjects.slice(0, 5).map((data, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <Image
              src={data.image}
              alt={`Additional Project ${index + 1}`}
              width={595}
              height={378}
              layout="responsive"
              quality={75}
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>

      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default Client;
