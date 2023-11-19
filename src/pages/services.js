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
  const { services } = serviceData;
    console.log(services);
    const head="IT Services You Can Count On"; 
    const sentence="With OnEggy's IT Services, you can leave your mark on the digital world. Transform your company with our cutting-edge and effective digital solutions to help you succeed.";
    const showButton = true;
    const buttonPlaceholder="Book a consultation";
    const title="Our Services";
    const desc="Step-by-Step Guide to Achieving Your Business Goals";
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
        {services.map((props, index) => (
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
