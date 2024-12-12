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
import Link from "next/link";
import serviceData from "../../../public/data/serviceData.json";
import PartnerShowcase from "../components/partnerShowcase";
import FaqSection from "../components/faq";
import HiringBanner from "../components/hiring";
import LatestBlogs from "../components/latestBlogs";
// import Lottie from 'react-lottie-player';
// import ScheduleCall from "../components/scheduleCall";
// import OffersMarquee from "../components/OffersSection";
import SlidingBanner from "../components/SlindingBanner";

const Home = (skill) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getFreePropText = { head: "Let's get things begun", para: "Contact us today to learn more about how our digital services may assist your company in growing and succeeding online" }

  const mapIcons = {
    faArrowRight,
  };

  const title = "Services";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include";
  const buttonPlaceholder = "Book a Consultataion";

  return (
    <div className="landingPage1 container max-w-7xl mx-auto overflow-x-hidden md:overflow-x-visible">
      <Navbar />
      <Sidebar />
      <SlidingBanner />
      <div className="mt-16 sm:max-h-screen flex flex-col md:flex-row items-center justify-between px-4">

        {/* Left Content */}
        <div className="md:w-1/2 lg:w-[50%] space-y-6 text-center md:text-left">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Empowering Businesses with Cloud, DevOps & Beyond
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed md:max-w-lg lg:max-w-xl">
            OnEggy’s IT solutions focus on leveraging cutting-edge Cloud and DevOps practices, transforming your business with a personal touch.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <ConsultationButton buttonPlaceholder={buttonPlaceholder} />
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 lg:w-[40%] flex justify-center md:justify-end mt-10 md:mt-0">
          <Image
            src="/hero-oneggy-technologeis.png"
            alt="OnEggy Technologies DevOps and Cloud Consulting and Managed tech"
            width={500}
            height={478}
            priority
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full"
          />
        </div>
      </div>

      {/* Rest of the page components */}
      <Projectlogos />
      <PartnerShowcase />
      <HiringBanner />
      <Awards />
      <Headline
        mainCss="md:ml-4"
        title={title}
        desc={desc}
        width={''}
        titleCss={'md:font-bold md:text-4xl '}
        descCss={' w-[25rem] ml-0 md:w-[40rem] mt-7'}
      />
      <div className="flex flex-col justify-center px-6 mt-10 overflow-hidden sm:flex-row sm:flex-wrap sm:px-0">
        {serviceData?.arr?.map((skill, index) => (
          <Technology key={index} skill={skill} index={index} />
        ))}
      </div>

      <div className="hidden md:flex justify-end">
        <div className="mr-7 mt-4 p-[8px] bg-l_black transform -rotate-[30deg] text-[4px] scale-150 cursor-pointer" style={{ borderRadius: '50%' }}>
          <span className="text-white">
            <FontAwesomeIcon icon={faArrowRight} size="4x" />
          </span>
        </div>
        <div className="mr-8 mt-5 cursor-pointer">
          <Link href={'/services'}>Learn More</Link>
        </div>
      </div>
      <GetFreeProp
        head={getFreePropText.head}
        para={getFreePropText.para}
        buttonText="Get your proposal"
      />
      <Marksheet />
      <LatestBlogs />
      <Testimonials />
      <FaqSection />
      {/* <ScheduleCall /> */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
