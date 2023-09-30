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

const about = () => {
  const brands = [
    "../about/amazon.png",
    "../about/dribble.png",
    "../about/hubspot.png",
    "../about/notion.png",
    "../about/netflix.png",
    "../about/zoom.png",
  ];

  const alternative = [
    "Amazon",
    "Dribble",
    "Hubspot",
    "Notion",
    "Netflix",
    "Zoom",
  ];

  const compoArray = [
    {
      head: "Customer Satisfacton",
      para: "Customer Satisfaction first. OpenSource Dev & DevOps. Elevate website with top-notch designs, UI, and growth.",
      image: "../about/thumb.png",
      alt: "Thumb",
    },
    {
      head: "Tech Innovation",
      para: "Tech Innovation drives us. OpenSource Dev & DevOps. Elevate website with cutting-edge designs, UI, and growth.",
      image: "../about/bulb.png",
      alt: "Bulb",
    },
    {
      head: "Honesty Culture",
      para: "Integrity is our pillar, and an honest culture fosters trust with clients and employees.",
      image: "../about/handshake.png",
      alt: "HandShake",
    },
    {
      head: "No-Compromise Quality",
      para: "We deliver reliable IT solutions, exceeding expectations with excellence in every project we undertake.",
      image: "../about/certify.png",
      alt: "Certify",
    },
  ];

  const title = "Our core values";
  const desc =
    "We investigate the basics of innovation while retaining the synergy that channels implementation.";
  const head = "Tested & Derived Solutions";
  const sentence =
    " This is the stage at which your solution is introduced on the real market with real clients.";
  const showButton = true;
  const buttonPlaceholder = "Book a consultation";
  const boxTitle1 = "Your dreams";
  const boxTitle2 = "empowered.";
  const boxParaTitle = "What we do?";
  const boxContent =
    "We create delectable dishes by combining design and technology with additional cheese of awesomeness. With demonstrated experience in accelerating the growth of start-ups by analyzing their needs and delivering the growth package. We make your dreams a reality. We're Oneggy. Our routine is to be ahead of schedule and under budget, to be forward-thinking and to create a seamless digital life. Every concept you bring to the table is nourished and ready to be implemented. With us, you invest in brand building and digital growth rather than design and development.";

  return (
    <div className="bg-cover bg-right sm:min-h-screen container mx-auto sm:px-20">
      <Navbar />
      <Sidebar/>
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
        {compoArray.map((head, index) => (
          <Section5 key={index} head={head} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default about;
