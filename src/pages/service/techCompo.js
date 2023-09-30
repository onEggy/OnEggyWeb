import React from "react";
import Headline from "../components/headline";
import Section5 from "../about/section5";

const techCompo = () => {
  const title = "Web Development Services";
  const desc =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";
  const compoArray = [
    {
      head: "Front-end Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
    {
      head: "Back-end Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
    {
      head: "CMS Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
    {
      head: "eCommerce Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
    {
      head: "SaaS Apps Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
    {
      head: "Custom Web Development",
      para: "Contact us today to learn more about how our digital marketing services can succeed online.",
      image: "/service/speaker.png",
      alt: "Speaker Image",
    },
  ];

  return (
    <div className="mt-10 px-4">
      <Headline title={title} desc={desc} />

      <div className="flex flex-wrap sm:flex-row justify-center mt-10">
        {compoArray.map((head, index) => (
          <Section5 key={index} head={head} index={index} />
        ))}
      </div>
    </div>
  );
};

export default techCompo;
