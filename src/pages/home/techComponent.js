import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Technology = ({ skill, index }) => {
  if (!skill || typeof skill !== "object" || !skill.development || !skill.imageSrc) {
    console.error("Invalid skill object or missing title:", skill);
    return null;
  }

  function returnBgColor(index) {
    if (index === 0 || index === 3) {
      return "bg-offWhite";
    } else if (index === 2 || index === 5) {
      return "bg-l_black";
    } else return "bg-l_blue";
  }

  function textColor(index) {
    if (index === 0 || index === 3 || index === 5) {
      return "bg-blue";
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
    if (index === 0 || index === 2 || index === 4) {
      return "sm:mr-4 mr-0";
    } else {
      return "sm:ml-4 ml-0";
    }
  }

  return (
      <div
        className={`border border-b-[5px] border-l_black rounded-[3rem] ${returnBgColor(
          index
        )} flex flex-col-reverse sm:flex-row sm:justify-between my-4 p-4 w-full sm:w-[38rem] ${returnMargin(
          index
        )}`}
      >
        {/* Text Section */}
        <div className="flex flex-col items-start sm:items-start sm:flex-1">
          <h2
            className={`sm:text-3xl text-xl font-semibold rounded-md px-1 ${textColor(
              index
            )} sm:ml-12 mt-4 sm:mt-10 service_heading`}
          >
            {skill.development.split(" ")[0]}
          </h2>
          <h2
            className={`sm:text-3xl text-xl font-semibold rounded-md px-1 ${textColor(
              index
            )} sm:ml-12 mb-2 service_heading`}
          >
            {skill.development.split(" ").length === 2
              ? skill.development.split(" ")[1]
              : skill.development.split(" ").slice(1).join(" ")}
          </h2>
          <div className="flex items-center sm:ml-12 mt-4">
            {arrowBg(index) === "bg-white" ? (
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`rounded-full transform ${arrowBg(index)} ${arrowColor(index)}`}
              >
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="black"
                />
              </svg>
            ) : (
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`rounded-full transform ${arrowBg(index)} ${arrowColor(index)}`}
              >
                <path
                  d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                  fill="#37fff4"
                />
              </svg>
            )}
            <Link
              href={`service/${skill?.["meta-title-slug"]}`}
              className={`text-blue-500 hover:underline ml-2 ${linkColor(
                index
              )} text-base sm:text-lg`}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0 sm:flex-1">
          <div className="relative w-full max-w-[180px] h-[120px] sm:max-w-[240px] sm:h-[180px] overflow-hidden rounded-[1.5rem]">
            <Image
              src={skill.imageSrc}
              alt={skill.development}
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 240px"
              priority={index < 2}
              quality={75}
            />
          </div>
        </div>
      </div>
  );
};

export default Technology;
