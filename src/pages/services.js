import React from "react";
import Navbar from "./components/navbar";
import MainHeadline from "./components/mainHeadline";
import Headline from "./components/headline";
import TechCompo from "./services/techCompo";
import GetFreeProp from "./home/getFreeProp";
import Footer from "./components/footer";
import EngagementModel from "./services/engagementModel";
import Sidebar from "./components/sidebar";
import serviceData from "../../public/data/serviceData.json";
import { NextSeo } from "next-seo";
import seoData from "../../public/data/seo-data.json";
import Head from "next/head";
import EnquiryModal from "./components/EnquiryModal";

const services = () => {
  const { head, sentence, showButton, buttonPlaceholder, title, desc, arr, head2, para2 } =
    serviceData;

  return (
    <div className="max-w-7xl container mx-auto">
      <NextSeo
        title={serviceData.title}
        description={serviceData.desc}
      />

      <Head>
        <meta name="keywords" content={seoData['/services']?.keywords} />
      </Head>
      <Navbar />
      <Sidebar />
      <MainHeadline
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        headCss={'sm:w-10/12 mt-12 sm:mt-24 sm:mb-10'}
        pCss={'md:w-11/12 sm:text-xl '}
      />

      <Headline
        title={title}
        desc={desc}
        mainCss={'md:ml-4'}
        titleCss={'md:font-bold text-4xl'}
        descCss={'md:w-[18rem] mt-7 md:ml-12  '}
      />
      <div className="mt-16 m-4">
        {arr.map((props, index) => (
         props.publicVisible &&  <TechCompo key={index} {...props} index={index} />
        ))}
      </div>
      <div className="px-4 sm:px-0">
        <GetFreeProp head={head2} para={para2} />
        <EngagementModel />
      </div>
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default services;
