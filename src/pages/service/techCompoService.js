import React from "react";
import Headline from "../components/headline";
import Section5 from "../about/section5";

const TechCompoService = ({ serviceData }) => {
  const { ourWork, workDesc, compoArray } = serviceData;
  const compoServiceArray = compoArray.compoServices;

  return (
    <div className="mt-10 px-4">
      <Headline title={ourWork} desc={workDesc} />

      <div className="flex flex-wrap sm:flex-row justify-center mt-10">
        {compoServiceArray.map((service) => (
          <Section5 key={service.compoId} head={service} />
        ))}
      </div>
    </div>
  );
};

export default TechCompoService;
