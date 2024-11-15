import React from "react";
import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Headline from "../components/headline";
import Testimonials from "../home/testimonials";
import Footer from "../components/footer";
import GetFreeProp from "../home/getFreeProp";
import Marksheet from "../home/marksheet";
import Section3 from "../about/section3";
import TechCompo from "./techCompo";
import TechnologyStack from "./technologyStack";
import Slider from "react-slick";
import Sidebar from "../components/sidebar";
import { NextSeo } from "next-seo";
import seoData from "../../../public/data/service-seo.json";
import serviceData from "../../../public/data/serviceData.json";
import Head from "next/head";
import EnquiryModal from "../components/EnquiryModal";
import ContactUs from "../home/contactUs";
import PartnerShowcase from "../components/partnerShowcase";

const service = (props) => {

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';

  // console.log('porps',props)
  const head = props.development || "Web Development";
  const head2 = props.heading
  const sentence =props.headingContent;
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const boxTitle1 = props.boxTitleOne;
  const boxTitle2 = props.boxTitleTwo;
  const boxParaTitle = props.secondHeading;
  const boxContent =props.secondHeadingContent;
  const title = props.thirdHeading;
  const desc =props.thirdHeadingContent;

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: 'linear',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto md:max-w-7xl">
      <NextSeo
        title={props?.['meta-title']}
        description={props?.['meta-description']}
      />
      <Head>
        <meta name="keywords" content={props?.['meta-keywords']} />
        <link
          rel="canonical"
          href={`${baseUrl}/services/${props?.['meta-title-slug']}`}
        />
      </Head>
      <Navbar />
      <Sidebar />
      <MainHeadline
        head={head}
        head2={head2}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
        mainCss={'mt-4 '}
        headCss={'sm:w-10/12 sm:mt-24 '}
        head2Css={'sm:font-thin w-full sm:mb-10 mt-[3px]'}
        pCss={'md:w-11/12 sm:text-xl mb-7'}
      />
      <div className="mt-16">
        <Section3
          boxTitle1={boxTitle1}
          boxTitle2={boxTitle2}
          boxParaTitle={boxParaTitle}
          boxContent={boxContent}
        />
        <Headline
          mainCss={'md:ml-12'}
          title={title}
          desc={desc}
          titleCss={'md:font-bold md:text-4xl'}
          descCss={'md:w-[32rem] font-semibold mt-7 md:ml-12 '}
        />

        <div className="mt-24 md:-ml-0">
          <Slider {...sliderSettings}>
            {props?.projects?.map((data, index) => (
              <div key={index} className="h-auto w-auto p-10 ">
                <img src={data.image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <TechCompo serviceTypes={props.serviceTypes} />
      <PartnerShowcase />
      <Testimonials />
      <GetFreeProp
        head={'Let’s make things happen'}
        para={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
        buttonText="Get your free proposal" />
      <TechnologyStack />
      <Marksheet />
      <ContactUs />
      <EnquiryModal />
      <Footer />
    </div>
  );
};



export default service;


export async function getStaticProps({ params: { type } }) {

  let path = await serviceData?.arr?.filter(x => x?.['meta-title-slug'] == type)
  return { props: path[0] }

}


export async function getStaticPaths() {

  let paths = await serviceData?.arr?.map(x => {
    return { params: { type: x?.['meta-title-slug'] } }
  })

  // console.log('path is ',paths)

  return {
    paths,
    fallback: false
  }
}
