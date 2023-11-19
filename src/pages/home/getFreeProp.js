import React from "react";

const getFreeProp = () => {
  return (
    <div className="mt-20 container  bg-offWhite sm:p-18 p-12 rounded-3xl sm:rounded-3xl flex justify-center sm:justify-between relative mb-12">
      <div className="flex flex-col sm:block">
        <h2 className="text-3xl text-center justify-center sm:text-left font-semibold">
          Let's get things begun
        </h2>
        <p className="mt-8 w-96 text-center sm:text-left">
          Contact us today to learn more about how our digital services may
          assist your company in growing and succeeding online
        </p>
        <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mx-auto self-center mt-8 rounded-xl">
          Get your free proposal
        </button>
      </div>
      <div className="absolute -right-12 -bottom-8 hidden sm:block ">
        <img
          src="../home/getFreeProps/stars.png"
          alt="star frame"
          className="hidden sm:block"
          width={494}
          height={394}
        />
      </div>
    </div>
  );
};

export default getFreeProp;
