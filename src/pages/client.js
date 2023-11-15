import React from "react";
import Navbar from "./components/navbar";
import GetFreeProp from "./home/getFreeProp";
import Section1 from "./components/mainHeadline";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import nextseo from "next-seo";

import clientPageData from "../../public/data/clientPage.json";

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

  return (
    <div className="max-w-7xl mx-auto">
      <nextseo
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
      <div className="sm:flex mt-10">
        {projects1.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[350px] w-[329px] sm:h-[378px] sm:w-[356px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="sm:flex sm:mt-10">
        {projects2.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </div>
      <GetFreeProp />
      <div className="sm:flex sm:mt-10">
        {projects3.map((data, index) => (
          <div
            key={index}
            className="mx-auto p-4 h-[350px] w-[329px] sm:h-[378px] sm:w-[356px] sm:mx-10"
          >
            <img src={data.image} alt={`Project Image ${index}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Client;
