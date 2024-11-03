import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/projectlogos.json";

const ProjectLogos = ({ direction = "left" }) => {
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
        <Marquee pauseOnHover={false} direction={direction} speed={40} pauseOnClick={false} gradient={true} gradientColor={"white"} autoFill={true}>
          {projectLogosData.projectLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.url}
              alt={logo.alt}
              className="project_logo mx-6 sm:mx-8 md:mx-10 object-contain"  // Adjust margin for spacing between logos
              style={{ 
                width: "120px",   // Default size for mobile screens
                height: "auto",
                maxWidth: "180px", // Larger size for larger screens
                maxHeight: "90px"  // Set a maximum height for consistency
              }}
            />
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default ProjectLogos;
