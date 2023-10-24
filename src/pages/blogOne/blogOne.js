import React from "react";
import Navbar from "../components/navbar";
import MainHeadline from "../components/mainHeadline";
import Footer from "../components/footer";
import GetFreeProp from "../home/getFreeProp";
import Compo from "./compo";
import Sidebar from "../components/sidebar";

const blogOne = () => {
  const head = "We Serve Trending Brews!";
  const sentence =
    "Create your unique footprint in the digital world with OnEggy’s IT services. Transform your business with our cutting-edge and effective digital solutions to pave your path to success.";
  const showButton = false;
  const arr = [
    {
      head: "Business",
      title: "Top 6 free website mockuptools 2022",
      content:
        "We are a team of Artists, Innovators & Strategists who left their ordinary life to invent and reinvent the common. Our Passion for technologies changes problems into opportunities. Our heart is full of creative juice that shapes ideas, Our mind is on a quest to transform the ordinary into the extraordinary. This is our code that energizes deep-rooted human desires and makes people pursue their dreams. We took an oath to stick to the Code and call ourselves Code Theorem.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Sidebar />
      <div className="w-full md:w-5/6  mx-auto">
        <MainHeadline head={head} sentence={sentence} showButton={showButton} />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-3/4 px-4">
          {arr.map((props, index) => (
            <Compo key={index} {...props} />
          ))}
        </div>
        <div className="w-full md:w-1/4 px-4 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold">Categories</h2>
          <ul className="font-semibold text-lg mt-4">
            <li className="border rounded-xl px-6 py-4 my-2 hover:bg-l_blue cursor-pointer flex items-center">
              <img
                src="/blog/1.png"
                alt="Seeing Something???"
                width={38}
                className="mr-4"
              />
              Web Design
            </li>
            <li className="border rounded-xl px-6 py-4 my-2 hover:bg-l_blue cursor-pointer flex items-center">
              <img
                src="/blog/2.png"
                alt="Seeing Something???"
                width={38}
                className="mr-4"
              />
              Development
            </li>
          </ul>
          <h3 className="text-3xl font-bold mt-8">All Tags</h3>
          <ul className="flex flex-wrap mt-2">
            <li className="border rounded-[3rem] py-2 px-4 my-1 mx-2">
              Business
            </li>
            <li className="border rounded-[3rem] py-2 px-4 my-1 mx-2">
              Experience
            </li>
          </ul>
        </div>
      </div>
      <GetFreeProp />
      <div className="w-full md:w-3/4 px-4">
        {arr.map((props, index) => (
          <Compo key={index} {...props} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default blogOne;
