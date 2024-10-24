import React from "react";

const Compo = ({ head, title, content }) => {
  return (
    <div className="flex flex-wrap m-10 ">
      {/* <div className="flex flex-wrap justify-center m-10 ">       Top one*/} 
      {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-0"> */}
      {/* <div className="mb-4 sm:mb-0 sm:w-5/12 sm:p-6">
        <img
          src="../about/people.png"
          alt="Image"
          className="mx-auto h-full "
        />
      </div> */}
      {/* <div className="w-full md:w-1/2 lg:w-2/3 px-4"> */}
      <div>
        <h2 className="bg-blue font-semibold px-2 py-1 mb-1 rounded-lg w-max">
          {head}
        </h2>
        <h3 className="font-semibold text-3xl sm:text-4xl sm:leading-tight sm:w-11/12 break-words">{title}</h3>
        <p className="mt-3 mb-5 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default Compo;
