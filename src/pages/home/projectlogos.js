import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/projectlogos.json";

const ProjectLogos = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="sm:mt-14 my-12  md:ml-4">
      <div className="inner">
        <Marquee pauseOnHover={true} speed={50}>
          {projectLogosData.projectLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.url}
              alt={logo.alt}
              className="project_logo mx-4"  // Adjust margin for spacing between logos
              style={{ filter: "grayscale(100%)", width: "160px", height: "54px" }}
            />
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default ProjectLogos;
