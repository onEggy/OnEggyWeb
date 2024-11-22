import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Headline from "../components/headline";
import Footer from "../components/footer";
import GetFreeProp from "../home/getFreeProp";
import Marksheet from "../home/marksheet";
import Section3 from "../about/section3";
import TechCompo from "./techCompo";
import TechnologyStack from "./technologyStack";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Marquee from "react-fast-marquee";
import seoData from "../../../public/data/service-seo.json";
import serviceData from "../../../public/data/serviceData.json";
import CaseStudyComponent from "../components/caseStudiesMarquee";
import LatestBlogs from "../components/latestBlogs";

// Dynamically Imported Components
const PartnerShowcase = dynamic(() => import("../components/partnerShowcase"), { ssr: false });
const Testimonials = dynamic(() => import("../home/testimonials"), { ssr: false });
const ContactUs = dynamic(() => import("../home/contactUs"), { ssr: false });
const EnquiryModal = dynamic(() => import("../components/EnquiryModal"), { ssr: false });

const service = (props) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.oneggy.com/";

  const head = props.development || "Web Development";
  const head2 = props.heading;
  const sentence = props.headingContent;
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const boxTitle1 = props.boxTitleOne;
  const boxTitle2 = props.boxTitleTwo;
  const boxParaTitle = props.secondHeading;
  const boxContent = props.secondHeadingContent;
  const title = props.thirdHeading;
  const desc = props.thirdHeadingContent;

  return (
    <div className="mx-auto md:max-w-7xl">
      <NextSeo
        title={props?.["meta-title"]}
        description={props?.["meta-description"]}
      />
      <Head>
        <meta name="keywords" content={props?.["meta-keywords"]} />
        <link
          rel="canonical"
          href={`${baseUrl}service/${props?.["meta-title-slug"]}`}
        />
      </Head>
      <Navbar />
      <MainHeadline
        head={head}
        head2={head2}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        mainCss={"mt-4 "}
        headCss={"sm:w-10/12 sm:mt-24 "}
        head2Css={"sm:font-thin w-full sm:mb-10 mt-[3px]"}
        pCss={"md:w-11/12 sm:text-xl mb-7"}
      />
      <div className="mt-16">
        <Section3
          boxTitle1={boxTitle1}
          boxTitle2={boxTitle2}
          boxParaTitle={boxParaTitle}
          boxContent={boxContent}
        />
        <Headline
          mainCss={"md:ml-12"}
          title={title}
          desc={desc}
          titleCss={"md:font-bold md:text-4xl"}
          descCss={"md:w-[32rem] font-semibold mt-7 md:ml-12 "}
        />

        {/* Marquee for Project Showcase */}
        <div className="mt-24">
          {/* <Marquee gradient={false} pauseOnHover={true} speed={50} gradientWidth={50}>
            {props?.projects?.map((data, index) => (
              <div key={index} className="h-auto w-auto px-6">
                <Image
                  src={data.image}
                  alt={`Project Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder-image.jpg" // Replace with your placeholder image
                />
              </div>
            ))}
          </Marquee> */}
          <CaseStudyComponent />
        </div>
      </div>

      {/* Modular Components */}
      <TechCompo
        serviceTypeHeading={props.serviceType}
        serviceTypeDescription={props.serviceInfo}
        serviceTypes={props.serviceTypes}
      />
      <PartnerShowcase />
      <Testimonials />
      <GetFreeProp
        head={"Let’s make things happen"}
        para={
          "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
        }
        buttonText="Get your free proposal"
      />
      <TechnologyStack />
      <LatestBlogs />
      <Marksheet />
      <ContactUs />
      <EnquiryModal />
      <Footer />
    </div>
  );
};

export default service;

// Fetch dynamic props for service type
export async function getStaticProps({ params: { type } }) {
  const path = serviceData?.arr?.find((x) => x?.["meta-title-slug"] === type);
  return { props: path || {} };
}

// Generate paths dynamically
export async function getStaticPaths() {
  const paths = serviceData?.arr?.map((x) => ({
    params: { type: x?.["meta-title-slug"] },
  }));
  return {
    paths,
    fallback: false,
  };
}
