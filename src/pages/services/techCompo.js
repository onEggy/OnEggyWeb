import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const TechCompo = ({ development, index, content, image, ...props }) => {
  const [isExpanded, setExpanded] = useState(false);

  function bg_color(index) {
    return index % 2 === 0 ? "bg-offWhite" : "bg-blue";
  }

  function arrow_color(index) {
    return index % 2 === 0 ? "text-offWhite" : "text-blue";
  }

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <Link href={`/service/${props?.["meta-title-slug"]}`} passHref>
      <div
        className={`${bg_color(
          index
        )} container mt-10 border border-b-[5px] border-l_black rounded-[3rem] p-16 cursor-pointer`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="mainData flex">
            <div>
              <h2 className="font-bold text-5xl mr-10">0{index + 1}</h2>
            </div>
            <div className="place-self-center">
              <h2 className="font-bold md:text-3xl -ml-4">{development}</h2>
            </div>
          </div>

          <div className="flex items-center buttonClass scale-50 md:scale-100">
            <div className="transform -rotate-[30deg] mr-3">
              <Link href={`/service/${props?.['meta-title-slug']}`} className="">
                <span className={`rounded-full p-3 pt-8 pb-3 bg-black ${arrow_color(index)} text-[6px]`}>
                  <FontAwesomeIcon icon={faArrowRight} size="5x" />
                </span>
              </Link>
            </div>
            <p className="ml-4 md:ml-0">Learn more</p>
          </div>
        </div>

        <hr className="border-t-2 border-black my-10" />

        <div className={`content overflow-hidden text-md ${isExpanded ? "expanded" : ""}`}>
          <p className="text-sm md:text-md">{content}</p>
          {isExpanded && (
            <Marquee
              pauseOnHover={false}
              speed={30}
              pauseOnClick={false}
              autoFill
              className="mt-14 scale-150 w-8/12 mx-auto p-1 ease-in duration-300"
            >
              {Array.isArray(image) ? (
                image.map((imageName, i) => (
                  <img
                    key={i}
                    src={imageName}
                    alt={`OnEggy Technologies tech stack ${i + 1}`}
                    className="h-15 w-auto mx-[1.5rem] px-10 mt-5"
                  />
                ))
              ) : (
                <img
                  src={image}
                  alt="OnEggy Technologies tech stack"
                  className="h-15 mx-[1.5rem] w-auto"
                />
              )}
            </Marquee>
          )}
        </div>
      </div>
    </Link>
  );
};

export default TechCompo;
