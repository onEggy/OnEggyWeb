import React from "react";
import ConsultationButton from "../components/consultButton";

const section1 = ({head,sentence,showButton,buttonPlaceholder}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-6 sm:px-20 mb-10">
        <h1 className="sm:text-6xl text-4xl font-semibold mt-8 text-center w-3/5">   
           {head}      
        </h1>
        <p className="mt-7 sm:w-2/3 text-center px-6">
         {sentence}
        </p>
        {showButton && <ConsultationButton buttonPlaceholder={buttonPlaceholder}/>}
      </div>
  );
};

export default section1;
