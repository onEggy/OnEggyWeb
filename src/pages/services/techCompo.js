import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechCompo = ({ development, index, content, image }) => {
  const [isExpanded, setExpanded] = useState(false);

  function bg_color(index) {
    if (index === 0 || index === 2 || index === 4 || index === 6)
      return "bg-blue";
    else return "bg-offWhite";
  }

  function arrow_color(index) {
    if (index === 0 || index === 2 || index === 4 || index === 6)
      return "text-blue";
    else return "text-offWhite";
  }

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 17,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div
      className={` ${bg_color(
        index
      )} container mt-10 border border-b-[5px] border-l_black rounded-[3rem] p-8`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="mainData flex">
          <div>
            <h2 className="font-bold text-5xl mr-10">0{index + 1}</h2>
          </div>
          <div className="place-self-center">
            <h2 className="font-semibold text-xl">{development}</h2>
          </div>
        </div>
        <div className="flex items-center buttonClass">
          <div className="transform -rotate-[30deg] mr-3">
            <Link href="/service/service">
              <span
                className={`rounded-full p-2 pt-5 bg-black ${arrow_color(
                  index
                )} text-[6px]`}
              >
                <FontAwesomeIcon icon={faArrowRight} size="4x" />
              </span>
            </Link>
          </div>
          <Link href="/service/service">
            <p>Learn more</p>
          </Link>
        </div>
      </div>
      <hr className="border-t-2 border-black mb-2" />
      <div className={`content ${isExpanded ? "expanded" : ""}`}>
        {content}
        {isExpanded && (
          <Slider {...sliderSettings}>
            {Array.isArray(image) ? (
              image.map((imageName, i) => (
                <img
                  key={i}
                  src={imageName}
                  alt={`Icon ${i + 1}`}
                  className="h-10 mt-5"
                />
              ))
            ) : (
              <img src={image} alt="Icon" className="h-20" />
            )}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default TechCompo;
