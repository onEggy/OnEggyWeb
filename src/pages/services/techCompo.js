import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const TechCompo = ({ development, index, content, image }) => {
  const [isExpanded, setExpanded] = useState(false);

  const isBlueBackground = index % 2 === 0;
  const backgroundColor = isBlueBackground ? "bg-blue" : "bg-offWhite";
  const textColor = isBlueBackground ? "text-blue" : "text-offWhite";

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <AnimatePresence wait>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`transition-all duration-300 ${backgroundColor} container mt-10 border border-b-[5px] border-l_black rounded-[3rem] p-8`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="mainData flex">
            <div>
              <h2 className="font-bold text-5xl mr-10">0{index + 1}</h2>
            </div>
            <div className="place-self-center">
              <h2 className="font-semibold text-xl">{development}</h2>
            </div>
          </div>
          <div className="flex items-center buttonClass">
            <div className="transform -rotate-[30deg] mr-3">
              <Link href="/service/service">
                <span
                  className={`rounded-full p-2 pt-5 bg-black ${textColor} text-[6px]`}
                >
                  <FontAwesomeIcon icon={faArrowRight} size="4x" />
                </span>
              </Link>
            </div>
            <Link href="/service">
              <p>Learn more</p>
            </Link>
          </div>
        </div>
        <hr className="border-t-2 border-black mb-2" />
        <div className={`content ${isExpanded ? "expanded" : ""}`}>
          {content}
          {isExpanded && (
            <div className="expanded-icons flex space-x-2">
              {Array.isArray(image) ? (
                image.map((imageName, i) => (
                  <img
                    key={i}
                    src={imageName}
                    alt={`Icon ${i + 1}`}
                    className="h-10 mt-5"
                  />
                ))
              ) : (
                <img src={image} alt="Icon" className="h-20" />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechCompo;
