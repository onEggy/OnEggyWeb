import React from "react";
import ConsultationButton from "../components/consultButton";

const section1 = ({ head,head2='', sentence, showButton, buttonPlaceholder, mainCss,headCss,head2Css,pCss }) => {
  return (
    <div className={`flex flex-col items-center justify-center mx-auto max-w-7xl px-6 sm:px-20 mb-10 ${mainCss}`}>
      <h1 className={`sm:text-6xl text-4xl font-semibold mt-0 text-center w-4/5 ${headCss}`}>
        {head}
      </h1>
     {head2 && <h1 className={`sm:text-6xl text-4xl font-semibold mt-8 text-center w-3/5 ${head2Css}`}>
        {head2}
      </h1>}
      <p className={`mt-7 sm:w-2/3 text-center px-6 ${pCss}`}>
        {sentence}
      </p>
      {showButton && <ConsultationButton buttonPlaceholder={buttonPlaceholder} redirect="/contact" />}
    </div>
  );
};

export default section1;
