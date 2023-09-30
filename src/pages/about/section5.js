import React from "react";

const section5 = ({ head, index }) => {
  function bgColor(index) {
    if (index === 0 || index === 3 || index === 4) {
      return "bg-blue";
    } else return "bg-white";
  }

  function textColor(index) {
    if (index === 1 || index === 2 || index === 5) {
      return "text-blue";
    } else return "text-white";
  }

  return (
    <div className="mt-5">
      <div className="bg-l_black platform-card rounded-[3rem] flex sm:pl-16 p-10 sm:p-10 border border-b-[5px] border-l_black justify-between m-auto h-full  sm:w-[100%]">
        <div className={`w-89 h-89 m-auto platform-image ${textColor(index)}`}>
          <img src={head.image} alt={head.alt} />
        </div>

        <div className="px-5 w-auto mt-2">
          <h2
            className={`${bgColor(
              index
            )} px-5 py-2 w-auto text-3xl font-semibold rounded-2xl service-heading`}
          >
            {head.head}
          </h2>
          <p className="text-white mt-4">{head.para}</p>
        </div>
      </div>
    </div>
  );
};

export default section5;
