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

const service = (props) => {

  // console.log('porps',props)
  const head = props.development || "Web Development";
  const head2 = "Making Benchmarking Products"
  const sentence =
    "Code Theorems have the right strategies for providing well-structured, immensely secured, nicely interactive, and user-friendly website development services that are benchmarking in the industry and help you win the market in your domain.";
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const title = "Our Work";
  const desc =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";
  const projects = [
    {
      image: "../client/1.png",
    },
    {
      image: "../client/2.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
    {
      image: "../client/3.png",
    },
  ];
  const boxTitle1 = "Secured";
  const boxTitle2 = "Standardized";
  const boxParaTitle = "How we do it?";
  const boxContent =
    "Your search for owning a website that is standard, secured and provides ease in growing your business virtually to get the top place in the industry ends here, at Code Theorem. Our talented tech geeks will drive you through the whole website development solutions to achieve your desired result of having a custom website.";

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          mainCss={''}
          title={title}
          desc={desc}
          titleCss={'md:font-bold md:text-4xl'}
          descCss={'md:w-[32rem] font-semibold mt-7 md:ml-12 '}
        />

        <div className="mt-24 md:-ml-10">
          <Slider {...sliderSettings}>
            {projects.map((data, index) => (
              <div key={index} className="h-auto w-auto p-10 ">
                <img src={data.image} alt={`Project Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <TechCompo serviceTypes={props.serviceTypes}  />
      <TechnologyStack />
      <Testimonials />
      <GetFreeProp
        head={'Let’s make things happen'}
        para={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
        buttonText="Get your free proposal" />
      <Marksheet />
      <Footer />
    </div>
  );
};



export default service;


export async function getStaticProps({ params: { type } }) {


  // console.log('type is ', type)
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
    fallback: true
  }
}
