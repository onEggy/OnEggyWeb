import React from "react";
import Headline from "../components/headline";

const marksheet = () => {
  const title = "Marksheet    ";
  const desc =
    "Through our Case Studies, you may see real-life instances of our Proven Digital Services success";

  return (
    <div className="px-2 sm:px-0 mb-16 sm:mb-0">
      <Headline title={title} desc={desc} titleCss={'md:font-bold md:text-4xl'} descCss={'md:w-[32rem] mt-7 md:ml-16'} />
      <div className="bg-l_black text-white rounded-3xl p-6 sm:p-10 flex place-content-around mt-14 flex-wrap">
        <div className="mt-5 mb-5">
          <h2 className="text-7xl md:text-8xl font-bold text-shadow-blue">100%</h2>
          <p className="mt-10 ml-5 md:ml-10">Client Satisfaction</p>
        </div>
      <div className="w-[70%] h-0.5 bg-white sm:hidden"></div>
       <div className="hidden mt-5 sm:block border-white border-2 before:absolute before:w-[0.1px] before:h-40" />
        <div className="mt-5 mb-5 beforeAfter">
          <h2 className="text-7xl md:text-8xl  font-bold text-shadow-blue">20+</h2>
          <p className="mt-10 ml-5 md:ml-10">Experts in the team</p>
        </div>
          <div className="hidden sm:block mt-5 border-white border-2 before:absolute before:w-[0.1px] before:h-40" />
          <div className="w-[70%] h-0.5 bg-white sm:hidden"></div>
        <div className="mt-5 mb-5">
          <h2 className="text-7xl md:text-8xl font-bold text-shadow-blue">200+</h2>
          <p className="mt-10 ml-5 md:ml-10">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default marksheet;
