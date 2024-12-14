import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/projectlogos.json";
import amazonbanner from "../../../public/amazon-banner.png";
import amazonbannertwo from "../../../public/amazon-bannertwo.png";
import Image from "next/image";
const NewSection = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <main className=" bg-gray-900 sm:mt-14 my-12">
            <div className="flex  flex-col md:flex-row gap-12 mb-8">
                <h2 className="text-[40px] mt-[57px] md:ml-[7rem] text-white text-left font-bold">Tools & Technology Expertise</h2>
                <p className="text-[16px] mt-[93px] md:mx-[10rem] text-[#A6A6A6] text-left text-gray-400 mt-2">
                    Leveraging Cutting-Edge Tools & Technologies for Optimal DevOps Performance
                </p>
            </div>
            <div className="inner">
                <Marquee pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={""} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo mx-4 mx-[1.5rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[3.5rem]"  // Adjust margin for spacing between logos
                            style={{ filter: "grayscale(0%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
            <div>


            </div>
        </main>
    );
};

export default NewSection;
