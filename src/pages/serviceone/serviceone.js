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
import Benefits from "./benefits";
import Offers from "./offers";
import Talks from "./talk";
import Section5 from "../about/section5";
import aboutPageData from "../../../public/data/aboutPage.json";
import TechnologyStack from "../service/technologyStack";

const Home = (skill) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    brands,
    alternative,
    compoArray,
    titleAbout,
    descAbout,
    head,
    sentence,
    showButton,
    boxTitle1,
    boxTitle2,
    boxParaTitle,
    boxContent,
  } = aboutPageData;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const skillsArray = [
    {
      title: "Website Development",
      imageSrc: "/home/landingComponent/1.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Application Development",
      imageSrc: "/home/landingComponent/2.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "UI/UX Designing",
      imageSrc: "/home/landingComponent/3.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "DevOps Services",
      imageSrc: "/home/landingComponent/4.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "QA & Testing",
      imageSrc: "/home/landingComponent/5.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Cloud Manage Services",
      imageSrc: "/home/landingComponent/6.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
  ];

  const mapIcons = {
    faArrowRight,
  };

  const title = "Services";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include";
  const buttonPlaceholder = "Talk to Kubernetes Expert";

  return (
    <div className="landingPage1 container max-w-7xl mx-auto">
      <Navbar />
      <Sidebar />
      <div className="mt-16 sm:max-h-screen justify-between">
        <div className="flex px-4">
          {/*WRAPPER*/}
          <div style={{ width: "589px" }}>
            {/*HEADINGS*/}
            <h1 className="text-6xl font-semibold theme-heading">
              Trusted Managed Services for Kubernetes
            </h1>
            <Image
              src="/kubernetes.png"
              alt="service"
              width={0}
              height={0}
              sizes="100vw"
              className="md:hidden"
              style={{ width: "80%", height: "auto", margin: "auto" }}
            />
            <p className="mt-12 text-justify font-spaceGrotesk sm:pr-48 px-0">
              From advising and implementation to optimization and support -
              making Kubernetes easier for you.
            </p>
            <ConsultationButton buttonPlaceholder={buttonPlaceholder} />
          </div>
          <div className="ml-auto md:block hidden">
            <Image
              src="/kubernetes.png"
              alt="service"
              width={500}
              height={478}
            />
          </div>
        </div>

        <Projectlogos />
        <Benefits />
        <Marksheet />
        <Offers />
        <Headline title={titleAbout} desc={descAbout} />
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-6 sm:gap-y-16 gap-10 mb-16 justify-items-stretch] px-4 sm:px-0 mt-10 ">
          {compoArray.map(
            (item, index) => (
              console.log(item.head),
              (<Section5 key={index} head={item} index={index} />)
            )
          )}
        </div>
        <GetFreeProp />
        <TechnologyStack />
        <Awards />
        <Talks />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
