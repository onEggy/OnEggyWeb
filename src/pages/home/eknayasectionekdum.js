import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/devopstech.json";

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
        <main className="bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_50%)] font-inter    py-12">
            <div className="flex  flex-col md:flex-row md:gap-6 gap-2  md:mb-[76px]">
                <h2 className="text-[29.76px] md:text-[40px] mx-[16px]  md:max-w-[30%] md:mt-[57px] md:ml-[7rem] text-black  text-left font-bold md:font-bold">Tools & Technology Expertise</h2>
                <p className="text-[16px] mx-[16px] md:mt-[93px] md:mx-[10rem] text-[#A6A6A6] text-left text-gray-400 mt-2">
                    Leveraging Cutting-Edge Tools & Technologies for Optimal DevOps Performance
                </p>
            </div>
            <div className="inner md:ml-[8%] md:max-w-[80%] mb-4 mt-4 md:pb-[75px]">
                <Marquee pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={""} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo"  // Adjust margin for spacing between logos
                            style={{ filter: "grayscale(0%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
            <div className="md:hidden inner md:ml-[8%] md:max-w-[80%] md:pb-[75px]">
                <Marquee direction="" pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={""} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo"  // Adjust margin for spacing between logos
                            style={{ filter: "grayscale(0%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
        </main>
    );
};

export default NewSection;
