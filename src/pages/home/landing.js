import Image from "next/image";
import React, { useState } from "react";
import Projectlogos from "./projectlogos";
import Awards from "./awards";
import Technology from "./techComponent";
import GetFreeProp from "./getFreeProp";
import Headline from "../components/headline";
import Marksheet from "./marksheet";
import Testimonials from "./testimonials";
import ContactUs from "./contactUs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ConsultationButton from "../components/consultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/sidebar";
import servicesData from "../../../public/data/serviceData.json";

const Home = (skill) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const skillsArray = servicesData.services;

  const mapIcons = {
    faArrowRight,
  };

  const title = "Services";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include";
  const buttonPlaceholder = "Book a Consultataion";

  return (
    <div className="landingPage1 container max-w-7xl mx-auto">
      <Navbar />
      <Sidebar />
      <div className="mt-16 sm:max-h-screen justify-between">
        <div className="flex">
          <div style={{ width: "589px" }}>
            <h1 className="text-6xl font-semibold theme-heading">
              Transforming Technology with a Human Touch
            </h1>
            <Image
              src="/ai.png"
              alt="aiImage"
              width={0}
              height={0}
              sizes="100vw"
              className="md:hidden"
              style={{ width: "80%", height: "auto", margin: "auto" }}
            />
            <p className="mt-12 text-justify font-spaceGrotesk sm:pr-48 px-0">
              With OnEggy's IT services, you can leave your mark in the digital
              world. Transform your company with our cutting-edge and effective
              digital solutions to set you on the way to success.
            </p>
            <ConsultationButton buttonPlaceholder={buttonPlaceholder} />
          </div>
          <div className="ml-auto md:block hidden">
            <Image src="/ai.png" alt="aiImage" width={500} height={478} />
          </div>
        </div>

        <Projectlogos />
        <Awards />
        <Headline title={title} desc={desc} />
        <div className="flex flex-wrap sm:flex-row justify-center flex-col px-6 sm:px-0 mt-10 overflow-hidden">
          {skillsArray.slice(0, 6).map((service, index) => (
            <Technology key={index} skill={service} index={index} />
          ))}
        </div>

        <div className="md:flex justify-end  hidden overflow-hidden">
          <div className="mr-5 mt-5 rounded-full p-1 bg-l_black transform -rotate-[30deg] text-[4px] cursor-pointer">
            <span className="text-white">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <div className="mr-8 mt-5 cursor-pointer">
            <a href={skill.learnMoreLink}>Learn More</a>
          </div>
        </div>
        <GetFreeProp />
        <Marksheet />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
