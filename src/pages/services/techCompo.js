import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const techCompo = ({ development, index, content }) => {
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
  return (
    <div
      className={` ${bg_color(
        index
      )} container mt-10 border border-b-[5px] border-l_black rounded-[3rem] p-8`}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="mainData flex">
          <div>
            <h2 className="font-bold text-5xl mr-10">0{index}</h2>
          </div>
          <div className="place-self-center">
            <h2 className="font-semibold text-xl">{development}</h2>
          </div>
        </div>
        <div className="flex items-center buttonClass">
          <div className="transform -rotate-[30deg] mr-3">
            <span
              className={`rounded-full p-2 pt-2 bg-black ${arrow_color(
                index
              )} text-[6px]`}
            >
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <p>Learn more</p>
        </div>
      </div>
      <hr className="border-t-2 border-black mb-2" />
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default techCompo;
