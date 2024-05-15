import React from "react";

const compo = ({head,title,content}) => {
  return (
    <div className="">
        <img src="../about/people.png" alt="Image" className="w-full mt-8 sm:hidden"/>
      <h2 className="bg-blue font-semibold px-2 py-1 rounded-lg text-2xl sm:mt-0 mt-4 sm:text-4xl w-max">{head}</h2>
      <h3 className="font-semibold text-2xl mt-3">{title}</h3>
      <p className="mt-3 mb-5 text-sm">{content}</p>
    </div>
  );
};

export default compo;
