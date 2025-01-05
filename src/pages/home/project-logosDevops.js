import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import projectLogosData from "../../../public/data/projectlogos.json";
import amazonbanner from "../../../public/amazon-banner.png";
import amazonbannertwo from "../../../public/amazon-bannertwo.png";
import Image from "next/image";
const ProjectLogosDevops = () => {
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
        <main className="sm:mt-14 font-inter my-12  md:ml-4">
            <div className="block md:block mt-5 md:inner md:ml-[7%] md:max-w-[80%]">
                <Marquee pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={""} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo mx-4 mx-[1.5rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[3.5rem]"
                            style={{ filter: "grayscale(100%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
            <div className="block md:hidden mt-5 md:inner md:ml-[7%] md:max-w-[80%]">
                <Marquee direction="" pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={""} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo mx-4 mx-[1.5rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[3.5rem]"
                            style={{ filter: "grayscale(100%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
            <div>
                <div className="flex flex-wrap mt-[58px] justify-center px-4 md:px-0">
                    <div className="flex flex-row  items-center bg-gray-900 text-white rounded-[33px] shadow-lg p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 space-x-2">
                        {/* Text Section */}
                        <div className="w-full md:w-auto text-left md:text-center md:text-left">
                            <h2 className="text-[12px] md:text-[23.75px] font-semibold">
                                Deep dive into AWS and its <br className="hidden md:block" />  enormous capabilities
                            </h2>
                        </div>

                        {/* Image Section */}
                        <div className="flex items-center justify-center w-full md:w-auto space-x-4">
                            <Image
                                src={amazonbanner} // Replace with the actual image path for the AWS logo
                                alt="AWS Logo"
                                className="h-[47px] md:h-[90.8px] w-auto"
                            />
                            <Image
                                src={amazonbannertwo} // Replace with the actual image path for the AWS partner badge
                                alt="AWS Partner Badge"
                                className="h-[47px] md:h-[90.8px] w-auto"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default ProjectLogosDevops;
