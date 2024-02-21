import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Headline from "../components/headline";

import teamData from "../../../public/data/teamSection.json";

const TeamCompo = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setProfile(teamData.profile);
  }, []);

  return (
    <div>
      <Headline title={teamData.title} desc={teamData.desc} titleCss={'md:font-bold md:text-4xl sm:ml-10'} descCss={'md:w-[28rem] mt-7 md:ml-16 md:font-semibold md:text-md'} />
      <div className="mb-20">
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 w-full">
          {profile.map((data, index) => (
            <div
              key={index}
              className="border border-d_blue rounded-[3rem] px-5 py-10 mx-6 mt-10 shadow-bottom"
            >
              <div className="flex sm:justify-between ">
                <div>
                  <img
                    src={data.image}
                    alt={data.alt}
                    width={120}
                    height={102}
                  />
                </div>
                {/* <div className="ml-[8px] mr-[10px] items-end sm:mt-0 mt-12 lg:mt-14 "> */}
                <div className="ml-[8px] mr-[10px] items-end sm:mt-0 mt-12 lg:mt-14 w-ful">
                  <h3 className="font-semibold text-lg">{data.name}</h3>
                  <p>{data.position}</p>
                </div>
                {/* <div className="bg-l_black p-2 pr-3 pl-3 text-blue m-auto items-start mb-16" style={{borderRadius:'50%'}}> */}
                <div className="bg-l_black p-2 pr-3 pl-3 text-blue m-auto items-start relative -top-10 " style={{borderRadius:'50%'}}>
                  <FontAwesomeIcon  icon={faLinkedinIn} />
                </div>
              </div>

              <hr className="border-t-2 border-black mb-6 mt-6" />
              <p>{data.description}</p>
            </div>
          ))}
          <div className="border border-d_blue bg-l_black rounded-[3rem] p-10 mx-6 mt-10 shadow-bottom">
            <div className="h-[67px] w-[199px]">
              <img src="../logo.png" alt="Logo" />
            </div>
            <hr className="border-t-2 border-white mb-6 mt-10" />
            <p className="text-white">
              This could be you! Come and work with us at OnEggy
            </p>
            <div className="flex items-center text-blue mt-10">
              <p className="text-lg mr-3">Learn more</p>
              <div className="text-[6px] text-blue">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="4x"
                  style={{ transform: "rotate(-30deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCompo;
