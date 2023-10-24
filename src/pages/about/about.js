import React from "react";
import GetFreeProp from "../home/getFreeProp";
import Navbar from "../components/navbar";
import Section1 from "../components/mainHeadline";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Headline from "../components/headline";
import Platforms from "./platforms";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import aboutPageData from "../../../public/data/aboutPage.json";

const About = () => {
  const {
    brands,
    alternative,
    compoArray,
    title,
    desc,
    head,
    sentence,
    showButton,
    buttonPlaceholder,
    boxTitle1,
    boxTitle2,
    boxParaTitle,
    boxContent,
  } = aboutPageData;

  return (
    <div className="bg-cover bg-right sm:min-h-screen landingPage1 container max-w-7xl mx-auto">
      <Navbar />
      <Sidebar />
      <Section1
        head={head}
        sentence={sentence}
        showButton={showButton}
        buttonPlaceholder={buttonPlaceholder}
      />
      <Section2 />
      <Section3
        boxTitle1={boxTitle1}
        boxTitle2={boxTitle2}
        boxParaTitle={boxParaTitle}
        boxContent={boxContent}
      />
      <Section4 />
      <GetFreeProp />
      <div className="sm:mt-8 my-8 platform-div">
        <section style={{ "--speed": `${20000}ms` }} className="leftSwipe">
          <Platforms brands={brands} alternative={alternative} />
        </section>
        <section style={{ "--speed": `${10000}ms` }} className="rightSwipe">
          <Platforms brands={brands} alternative={alternative} />
        </section>
        <section style={{ "--speed": `${30000}ms` }} className="leftSwipe">
          <Platforms brands={brands} alternative={alternative} />
        </section>
      </div>
      <Headline title={title} desc={desc} />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-6 sm:gap-y-16 gap-10 mb-16 justify-items-stretch] px-4 sm:px-0 mt-10 ">
        {compoArray.map(
          (item, index) => (
            console.log(item.head),
            (<Section5 key={index} head={item} index={index} />)
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default About;
