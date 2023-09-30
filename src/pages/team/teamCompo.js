import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Headline from "../components/headline";

const teamCompo = () => {
  const title = "Team";
  const desc =
    "Digital Marvels are being created by tech heroes. Unlocking Potential";
  const profile = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      image: "/team/john.png",
      alt: "Profile Image",
      sns: faLinkedin,
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/team/jane.png",
      alt: "Profile Image",
      sns: faLinkedin,
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/team/brown.png",
      alt: "Profile Image",
      sns: faLinkedin,
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/team/emily.png",
      alt: "Profile Image",
      sns: faLinkedin,
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Akanshu Sharma",
      position: "Cloud Expert",
      image: "/team/brian.png",
      alt: "Profile Image",
      sns: faLinkedin,
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
  ];

  return (
    <div>
      <Headline title={title} desc={desc} />
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
                  <FontAwesomeIcon icon={data.sns} />
                </div>
              </div>

              <hr className="border-t-2 border-black mb-6 mt-6" />
              <p>{data.description}</p>
            </div>
          ))}
          <div className=" border border-d_blue bg-l_black rounded-[3rem] p-10 mx-6 mt-10 shadow-bottom">
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

export default teamCompo;
