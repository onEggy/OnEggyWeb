import React from "react";
import Navbar from "./components/navbar";
import MainHeadline from "./components/mainHeadline";
import Footer from "./components/footer";
import GetFreeProp from "./home/getFreeProp";
import Compo from "./blogOne/compo";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";

const blogOne = () => {
  const currentPageData = seoData["/blog"];
  const head = "We Serve ";
  const head2 = "Trending Brews!"
  const sentence =
    "Create your unique footprint in the digital world with OnEggy’s IT services. Transform your business with our cutting-edge and effective digital solutions to pave your path to success.";
  const showButton = false;
  const arr = [
    {
      head: "Business",
      title: "Top 6 free website mockup tools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities. Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockup tools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities. Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
    {
      head: "Business",
      title: "Top 6 free website mockup tools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities. Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
  ];

  const CategoryList = ['Web Design', 'Development', 'UI/UX', 'Branding']
  const tagList = ['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life']



  return (
    <div className="max-w-7xl mx-auto">
      <NextSeo
        title={currentPageData.title}
        description={currentPageData.description}
      />
      <Navbar />
      <Sidebar />
      <div className="w-full md:w-5/6  mx-auto">
        <MainHeadline
          mainCss={'mt-10'}
          headCss={''}
          head2Css={'sm:mt-2 w-full sm:mb-10 mt-[3px]'}
          pCss={' md:w-11/12 '}
          head={head} head2={head2} sentence={sentence} showButton={showButton} />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 px-4">
          {arr.map((props, index) => (
            <Compo key={index} {...props} />
          ))}
        </div>
        <div className="hidden lg:block w-full md:w-1/4 px-4 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold sm:mb-10">Categories</h2>
          <ul className="font-semibold text-lg mt-4">
            {CategoryList.map(category => {

              return (<li className="border rounded-xl px-6 py-4 my-2 hover:bg-l_blue cursor-pointer flex items-center">
                <img
                  src="/blog/1.png"
                  alt="Seeing Something???"
                  width={38}
                  className="mr-4"
                />
                {category}
              </li>)

            })}

          </ul>
          <h3 className="text-3xl font-bold sm:mt-10">All Tags</h3>
          <ul className="flex flex-wrap mt-2 -ml-2">
            {tagList.map(tag => {
              return (
                <li className="border rounded-[3rem] py-2 px-4 my-1 mx-2">
                  {tag}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
     
      <GetFreeProp
        head={'Looking for any personalized service'}
        para={'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.'}
      />

      <div className="w-full md:w-3/4 px-4 md:mb-3 ">
        {arr?.slice(0,1).map((props, index) => (
          <Compo key={index} {...props} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default blogOne;
