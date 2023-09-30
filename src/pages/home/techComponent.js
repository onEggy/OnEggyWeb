import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Technology = ({ skill, index }) => {
  const mapIcons = {
    faArrowRight,
  };

  function returnBgColor(index) {
    if (index === 0 || index === 3) {
      return "bg-offWhite";
    } else if (index === 2 || index === 5) {
      return "bg-l_black";
    } else return "bg-l_blue";
  }

  function textColor(index) {
    if (index === 0 || index === 3 || index === 5) {
      return "bg-blue ";
    } else return "bg-white";
  }

  function arrowBg(index) {
    if (index === 0 || index === 3 || index === 1 || index === 4) {
      return "bg-black";
    } else return "bg-white";
  }

  function arrowColor(index) {
    if (index === 0 || index === 3 || index === 1 || index === 4) {
      return "text-l_blue";
    } else return "text-l_black";
  }

  function linkColor(index) {
    if (index === 0 || index === 3 || index === 1 || index === 4) {
      return "text-l_black";
    } else return "text-white";
  }

  function returnMargin(index) {
    if (index == 0 || index == 2 || index === 4) {
      return "sm:mr-4 mr-0";
    } else {
      return "sm:ml-4 ml-0";
    }
  }

  return (
    <div
      className={`border border-b-[5px] border-l_black rounded-[3rem] ${returnBgColor(
        index
      )} flex sm:justify-between my-4 px-4 sm:px-0-full w-full sm:w-[38rem] ${returnMargin(
        index
      )}`}
    >
      <div className="">
        <h2
          className={`sm:text-3xl text-xl font-semibold rounded-md px-1 ${textColor(
            index
          )} sm:ml-12 mt-10 service_heading`}
        >
          {skill.title.split(" ")[0]}
        </h2>
        <h2
          className={`sm:text-3xl text-xl font-semibold rounded-md px-1 ${textColor(
            index
          )} sm:ml-12 service_heading`}
        >
          {skill.title.split(" ").length == 2
            ? skill.title.split(" ")[1]
            : skill.title.split(" ").slice(1).join(" ")}
        </h2>
        <div className="flex">
          <span
            className={`rounded-full bg-white transform -rotate-[30deg]  md:ml-12 p-4 pt-4 mt-32 mb-10 ${arrowBg(
              index
            )} ${arrowColor(index)}`}
          >
            <FontAwesomeIcon icon={mapIcons[skill.icon]} size="1x" />
          </span>
          <a
            href={skill.learnMoreLink}
            className={`text-blue-500 hover:underline mt-[8rem] ml-[15px] ${linkColor(
              index
            )}`}
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex">
        <img
          src={skill.imageSrc}
          alt={skill.title}
          width={0}
          height={0}
          style={{
            // width:'100%',
            height: "auto",
          }}
          sizes="100vw"
          className="self-center sm:mr-10 w-60 h-24"
        />
      </div>
    </div>
  );
};

export default Technology;
