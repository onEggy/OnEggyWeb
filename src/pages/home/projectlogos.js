import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/projectlogos.json";

const ProjectLogos = ({ direction = "left" }) => {
  const [gradientWidth, setGradientWidth] = useState(100);

  useEffect(() => {
    const updateGradientWidth = () => {
      if (window.innerWidth < 768) {
        setGradientWidth(50); // Mobile: half of 100
      } else {
        setGradientWidth(100); // Desktop: full width
      }
    };

    updateGradientWidth(); // Initialize on load
    window.addEventListener("resize", updateGradientWidth);

    return () => window.removeEventListener("resize", updateGradientWidth);
  }, []);

  return (
    <main className="sm:mt-14 my-12 md:ml-4">
      <div className="inner">
        <Marquee
          pauseOnHover={false}
          direction={direction}
          speed={40}
          pauseOnClick={false}
          gradient={true}
          gradientColor={"white"}
          gradientWidth={gradientWidth}
          autoFill={true}
        >
          {projectLogosData.projectLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.url}
              alt={logo.alt}
              className="project_logo mx-6 sm:mx-8 md:mx-10 object-contain"
              style={{
                width: "120px", // Default size for mobile screens
                height: "auto",
                maxWidth: "180px", // Larger size for larger screens
                maxHeight: "90px", // Set a maximum height for consistency
              }}
            />
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default ProjectLogos;
