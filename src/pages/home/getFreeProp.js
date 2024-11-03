import React from "react";
import Link from "next/link";

const getFreeProp = ({head,para,buttonText='Get your free consultation'}) => {
  return (
    <div className="mt-20 container  bg-offWhite sm:p-18 p-12 rounded-3xl sm:rounded-3xl flex justify-center sm:justify-between relative mb-12 md:my-40">
      <div className="flex flex-col sm:block">
        <h2 className="text-2xl md:text-3xl text-center justify-center sm:text-left font-semibold md:w-6/12">
          {head}
        </h2>
        <p className="mt-8 md:w-5/12 text-lg text-center sm:text-left">
          {para}
        </p>
        <Link href={"/contact"}>
          <button className="bg-l_black md:text-2xl text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mx-auto self-center mt-8 rounded-xl">
            {buttonText}
          </button>
        </Link>
      </div>
      <div className="absolute -right-12 -bottom-8 hidden sm:block ">
        <img
          src="../home/getFreeProps/stars.png"
          alt="star frame"
          className="hidden sm:block scale-125 mb-10 mr-2"
          width={494}
          height={394}
        />
      </div>
    </div>
  );
};

export default getFreeProp;
