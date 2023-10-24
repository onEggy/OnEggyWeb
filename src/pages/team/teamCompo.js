import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
      <Headline title={teamData.title} desc={teamData.desc} />
      <div className="mb-20">
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 w-full">
          {profile.map((data, index) => (
            <div
              key={index}
              className="border border-d_blue rounded-[3rem] p-10 mx-6 mt-10 shadow-bottom"
            >
              <div className="flex sm:justify-evenly">
                <div>
                  <img
                    src={data.image}
                    alt={data.alt}
                    width={105}
                    height={102}
                  />
                </div>
                <div className="ml-[8px] mr-[10px] items-end sm:mt-0 mt-12 lg:mt-14">
                  <h3 className="font-semibold text-lg">{data.name}</h3>
                  <p>{data.position}</p>
                </div>
                <div className="bg-l_black p-1 pr-2 pl-2 rounded-full text-blue m-auto items-start mb-16">
                  <FontAwesomeIcon icon={faLinkedin} />
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
