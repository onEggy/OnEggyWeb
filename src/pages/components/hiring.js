import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const HiringBanner = () => {
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
    <div className="py-6 overflow-hidden">
      {/* First Marquee Row */}
      <Marquee
        speed={30}
        gradient={true}
        pauseOnHover
        gradientColor={"white"}
        gradientWidth={gradientWidth}
      >
        <Link href="/careers" legacyBehavior>
          <a className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase mx-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:underline">
            WE'RE HIRING{" "}
            <span className="text-yellow-400">^</span> WE'RE HIRING{" "}
            <span className="text-yellow-400">^</span> WE'RE HIRING{" "}
            <span className="text-yellow-400">^</span>
          </a>
        </Link>
      </Marquee>

      {/* Second Marquee Row */}
      <Marquee
        speed={40}
        gradient={true}
        direction="right"
        pauseOnHover
        gradientColor={"white"}
        gradientWidth={gradientWidth}
      >
        <Link href="/careers" legacyBehavior>
          <a className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase mx-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:underline">
            BUILD YOUR CAREER WITH ONEGGY{" "}
            <span className="text-yellow-400">^</span> BUILD YOUR CAREER WITH
            ONEGGY <span className="text-yellow-400">^</span> BUILD YOUR CAREER
            WITH ONEGGY <span className="text-yellow-400">^</span>
          </a>
        </Link>
      </Marquee>
    </div>
  );
};

export default HiringBanner;
