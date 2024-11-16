import React, { useState, useEffect } from "react";

const Compo = ({ head, title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-wrap m-10">
      <div>
        <h2 className="bg-blue font-semibold px-2 py-1 mb-1 rounded-lg w-max">
          {head}
        </h2>
        <h3 className="font-semibold text-3xl sm:text-4xl sm:leading-tight sm:w-11/12 break-words">
          {title}
        </h3>
        <p className="mt-3 mb-5 text-sm">
          {isExpanded || !isMobile
            ? content
            : `${content.substring(0, 100)}... `}
          {isMobile && (
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={toggleContent}
            >
              {isExpanded ? "Show less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Compo;
