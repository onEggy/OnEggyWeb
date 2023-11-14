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

const services = () => {
  const { head, sentence, showButton, buttonPlaceholder, title, desc, arr } =
    serviceData;

  return (
    <div className="max-w-7xl container mx-auto">
      <Navbar />
      <Sidebar />
      <MainHeadline
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <Headline title={title} desc={desc} />
      <div className="mt-16 m-4">
        {arr.map((props, index) => (
          <TechCompo key={index} {...props} index={index} />
        ))}
      </div>
      <div className="px-4 sm:px-0">
        <GetFreeProp />
        <EngagementModel />
      </div>
      <Footer />
    </div>
  );
};

export default services;
