import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectLogosData from "../../../public/data/projectlogos.json";

const ProjectLogos = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20,
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
    <main className="sm:mt-14 my-12">
      <div className="inner">
        <Slider {...sliderSettings}>
          {projectLogosData.projectLogos.map((logo) => (
            <div key={logo.id}>
              <img
                src={logo.url}
                alt={logo.alt}
                className="project_logo"
                style={{
                  filter: "grayscale(100%)",
                  width: "160px",
                  height: "54px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default ProjectLogos;
