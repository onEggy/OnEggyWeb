import React from "react";

const consultButton = (props) => {
  return (
    <div>
      <div className="buttons">
        <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 w-full sm:w-auto rounded-xl">
          {props.buttonPlaceholder}
        </button>
      </div>
    </div>
  );
};

export default consultButton;
