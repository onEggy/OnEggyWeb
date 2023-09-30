import React from "react";

const platforms = ({ brands, alternative }) => {
  return (
    <div className="flex">
      {brands.map((brand, index) => (
        <div key={index} className="my-6 mx-8">
          <img src={brand} className="platform-logo" alt={alternative[index]} />
        </div>
      ))}
    </div>
  );
};

export default platforms;
