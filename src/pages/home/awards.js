import React from "react";
import Headline from "../components/headline";
import Carousel from "../components/awardsCar";

const awards = () => {
  const title = "Certification and Awards";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include:";

  return (
    <div className="">
      <Headline title={title} desc={desc} />
      <div className="flex mt-16 ">
        <div>
          <Carousel />
        </div>
        <div className="hidden p-5 mt-5">
          <p>
            We create delectable dishes by combining design and technology with
            additional cheese of awesomeness. With demonstrated experience in
            accelerating the growth of start-ups by analyzing their needs and
            delivering the growth package. We make your dreams a reality. We're
            Oneggy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default awards;
