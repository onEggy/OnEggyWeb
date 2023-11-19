import React from "react";

const headline = (props) => {
  return (
    <div>
      <div
        className={` px-1  mt-10 flex sm:flex-row flex-col sm:item-start items-center sm:mt-12 w-[${props.width}]`}
      >
        <h2 className=" bg-blue font-semibold px-2 py-2 text-center sm:mt-8  rounded-md text-3xl">
          {props.title}
        </h2>
        <p className="mt-3 text-center sm:text-left sm:w-[30rem] sm:ml-10">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default headline;
