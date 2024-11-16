import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const CarouselImages = () => {
  const images = [
    "/team/people.jpg",
    "/team/people2.jpg",
    "/team/people3.jpg",
    "/team/people4.jpg",
    "/team/people5.jpg",
    "/team/people.jpg",
    "/team/people.jpg",
    "/team/people.jpg",
    "/team/people.jpg",
    "/team/people.jpg",
    "/team/people.jpg",
  ];

  const [gradientWidth, setGradientWidth] = useState(100);

  // Adjust gradient width dynamically based on screen size
  useEffect(() => {
    const updateGradientWidth = () => {
      if (window.innerWidth < 768) {
        setGradientWidth(50); // Narrow gradient for smaller screens
      } else {
        setGradientWidth(100); // Wider gradient for larger screens
      }
    };

    updateGradientWidth(); // Set initial gradient width
    window.addEventListener("resize", updateGradientWidth);

    return () => window.removeEventListener("resize", updateGradientWidth);
  }, []);

  return (
    <div className="relative overflow-hidden my-8">
      <Marquee
        speed={30}
        gradient={true}
        gradientWidth={gradientWidth}
        className="h-40"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="mx-4 flex justify-center items-center"
            style={{ minWidth: "120px", height: "auto" }}
          >
            <img
              src={image}
              alt={`oneggy-technologies-image-${index + 1}`}
              className="rounded-lg shadow-md object-contain w-auto h-full max-h-40"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CarouselImages;
