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
      <div className="mt-16 sm:max-h-screen justify-between ">
        <div className="flex px-4">
          {/*WRAPPER*/}
          <div style={{ width: "50rem" }}>
            {/*HEADINGS*/}
            <h1 className="text-[45px] lg:-ml-2 font-medium mb-2 leading-tight md:text-6xl md:font-semibold theme-heading">
              Empowering Businesses with Cloud, DevOps & Beyond
            </h1>
            <Image
              src="/ai.png"
              alt="OnEggy Technologies DevOps and Cloud Consulting and Managed tech"
              width={0}
              height={0}
              sizes="100vw"
              className="md:hidden"
              style={{ width: "80%", height: "auto", margin: "auto" }}
            />
            <p className="mt-12 text-justify font-spaceGrotesk sm:pr-48 px-0">
            OnEggy’s IT solutions focus on leveraging cutting-edge Cloud and DevOps practices, transforming your business with a personal touch.
            </p>
            <ConsultationButton buttonPlaceholder={buttonPlaceholder} />
          </div>
          <div className="ml-auto md:block hidden">
            <Image src="/ai.png" alt="aiImage" width={500} height={478} />
          </div>
        </div>

        <Projectlogos />
        <Awards />
        <Headline
          mainCss="md:ml-4"
          title={title}
          desc={desc}
          width={''}
          titleCss={'md:font-bold md:text-4xl '}
          descCss={' w-[25rem] ml-0 md:w-[40rem] mt-7'}
        />
        <div className="flex flex-col justify-center   px-6 mt-10 overflow-hidden sm:flex-row sm:flex-wrap sm:px-0 ">
          {serviceData?.arr?.map((skill, index) => (
            <Technology key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="hidden md:flex justify-end  ">
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
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
