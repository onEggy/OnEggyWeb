import React from "react";
import Navbar from "../components/navbar";
import GetFreeProp from "../home/getFreeProp";
import Section1 from "../components/mainHeadline";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

const client = () => {
  const projects1 = [
    {
      image: "/client/1.png",
    },
    {
      image: "/client/2.png",
    },
    {
      image: "/client/3.png",
    },
  ];

  const projects2 = [
    {
      image: "/client/4.png",
    },
    {
      image: "/client/5.png",
    },
  ];

  const projects3 = [
    {
      image: "/client/6.png",
    },
    {
      image: "/client/7.png",
    },
    {
      image: "/client/8.png",
    },
  ];

  const showButton = true;
  const head = "Creating Disruptive Products from Dreams";
  const sentence =
    " Oneggy thrives on turning dreams into disruptive reality as she embarks on an innovation journey. We challenge the norm with audacious creativity, creating extraordinary products that push the boundaries of what's possible, igniting transformative success for our clients and reshaping industries.";
  const buttonPlaceholder = "Book a consultation";
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <div className="sm:flex  mt-10">
        {projects1.map((data) => (
          <div className="mx-auto p-4 h-[350px] w-[329px] sm:h-[378px] sm:w-[356px] sm:mx-10">
            <img src={data.image} alt="Project Image" />
          </div>
        ))}
      </div>
      <div className="sm:flex sm:mt-10 ">
        {projects2.map((data) => (
          <div className="mx-auto p-4 h-[226.85px] w-[329px] sm:h-[378px] sm:w-[595px] sm:mx-10">
            <img src={data.image} alt="Project Image" />
          </div>
        ))}
      </div>
      <GetFreeProp />
      <div className="sm:flex  sm:mt-10">
        {projects3.map((data) => (
          <div className="mx-auto p-4 h-[350px] w-[329px] sm:h-[378px] sm:w-[356px] sm:mx-10">
            <img src={data.image} alt="Project Image" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default client;
