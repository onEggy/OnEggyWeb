import React from "react";
import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Headline from "../components/headline";
import TechCompo from "./techCompo";
import GetFreeProp from "../home/getFreeProp";
import Footer from "../components/footer";
import EngagementModel from "./engagementModel";
import Sidebar from "../components/sidebar";

const services = () => {
  const head = "IT Services You Can Count On";
  const sentence =
    "With OnEggy's IT Services, you can leave your mark on the digital world. Transform your company with our cutting-edge and effective digital solutions to help you succeed.";
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const title = "Our Services";
  const desc = "Step-by-Step Guide to Achieving Your Business Goals";
  const arr = [
    {
      development: "Web Development",
      content:
        "We create websites and web apps to ensure that you are noticed and heard in the proper circles.",
    },
    {
      development: "App Development",
      content:
        "If you've been thinking about app development to help your business grow, OnEggy Technologies is the company to turn to. We offer end-to-end development services for mobile apps for Android and iOS platforms that meet your organization's requirements.",
    },
    {
      development: "MVP Development",
      content:
        "At OnEggy Technologies, we specialise in creating custom MVP Solutions that can propel your business to success.",
    },
    {
      development: "Custom App Development",
      content:
        "We specialise in developing custom software solutions that enable organisations to prosper in today's volatile digital economy.",
    },
    {
      development: "UI / UX Design",
      content:
        "where creativity meets utility to generate appealing UI/UX designs. We create user-centric experiences that make a lasting impact on your audience and propel your business to new heights.",
    },
    {
      development: "QA / Testing",
      content:
        "your reliable partner for complete QA Testing and Load Testing services. We ensure that your digital goods are of the greatest quality, offering excellent performance even under severe user demands.",
    },
    {
      development: "IT Staffing Service",
      content:
        "We take pleasure in providing top-tier IT Staffing Services that bring a pool of competent experts straight to your workplace. Our specialised in-house staff works directly with your organisation to provide the technical assistance and experience required to establish and manage powerful IT resources.",
    },
  ];
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
