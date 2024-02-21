import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headline from "../components/headline";

const section3 = (props) => {
  const title = "What we do?";

  return (
    <div className="flex sm:flex-row flex-col sm:items-center px-4 sm:px-0 sm:justify-between sm:mt-10 mt-2">
      <div className="bg-blue p-6 sm:p-10 rounded-3xl shadow-right-bottom my-8 sm:mr-16 sm:mt-0 sm:w-1/2">
        <h2 className="bg-white text-black sm:text-7xl text-5xl rounded-2xl p-2 w-max  sm:w-auto">
          {props.boxTitle1}
        </h2>
        <h2 className="bg-white text-black sm:text-7xl text-5xl rounded-2xl p-2 sm:w-auto w-max">
          {props.boxTitle2}
        </h2>
        <div className="flex sm:mt-18 mt-14">
          <div className="transform -rotate-[30deg]">
            <span style={{borderRadius:'50%'}} className=" p-3 pt-6 pb-3 bg-black text-blue text-[6px] mr-3">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <p className="font-medium text-lg ml-3">How?</p>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col items-center sm:items-start sm:px-4 px-2 sm:w-1/2 ">
        <h2 className="sm:mb-8 bg-blue inline-block font-semibold my-8 sm:m-0 py-2 rounded-md text-3xl md:font-bold md:text-4xl">
          {props.boxParaTitle}
        </h2>
        <p className="text-left w-10/12 ">{props.boxContent}</p>
      </div>

      {/* <Headline title={props.boxParaTitle} desc={props.boxContent} mainCss={'flex-col bg-red-500'} width={''} titleCss={'md:font-bold md:text-4xl'} descCss={'md:w-[20rem] mt-7 md:ml-16 md:font-semibold'}  /> */}

    </div>
  );
};

export default section3;
