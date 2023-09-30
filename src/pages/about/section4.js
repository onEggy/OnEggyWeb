import React from "react";
import Headline from "../components/headline";

const section4 = () => {
  const title = "Need OnEggy For..";
  const desc =
    "Innovative Digital Services Technologies. Excellence and innovation.";
  return (
    <div className="mt-8 px-4 sm:px-0">
      <Headline title={title} desc={desc} />
      <div className="bg-l_black text-white rounded-3xl p-10 flex mt-14 flex-col md:flex-row">
        <div className="mt-5 mb-5 pr-5">
          <h2 className="text-md font-semibold">
            risk is not only associated with commercial activity, but also with
            their time. We help you plan better and reach the deadline by
            providing accurate estimates.
          </h2>
          <p className="mt-10 text-blue text-3xl font-bold">For Startups</p>
        </div>
        <div className="mt-5 border-white border-2 before:absolute before:w-[0.1px] before:h-40" />
        <div className="mt-5 mb-5 sm:px-5">
          <h2 className="text-md font-semibold">
            Projects can be paused or executed at the appropriate speed with
            time and resource flexibility. Including customer participation
            helps us achieve on-time delivery in accordance with our aims.
          </h2>
          <p className="mt-10 text-blue text-3xl font-bold">For Growing Companies</p>
        </div>
        <div className="mt-5 border-white border-2 before:absolute before:w-[0.1px] before:h-40" />
        <div className="mt-5 mb-5 sm:pl-5">
          <h2 className="text-md font-semibold">
            Transparency and client interaction are critical pillars in
            delivering the best solution possible. Let's get the information
            flowing and the answers coming together!
          </h2>
          <p className="mt-10 text-blue text-3xl font-bold">For Enterprises</p>
        </div>
      </div>
    </div>
  );
};

export default section4;
