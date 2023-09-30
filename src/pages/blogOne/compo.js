import React from "react";

const Compo = ({ head, title, content }) => {
  return (
    <div className="flex flex-wrap justify-center m-10">
      <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6 md:mb-0">
        <h2 className="bg-blue font-semibold px-2 py-1 mb-1 rounded-lg w-max">
          {head}
        </h2>
        <img
          src="../about/people.png"
          alt="Image"
          className="mx-auto max-w-full"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 px-4">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="mt-3 mb-5 text-base">{content}</p>
      </div>
    </div>
  );
};

export default Compo;
