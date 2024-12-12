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
        <main className="sm:mt-14 my-12  md:ml-4">
            <div className="inner">
                <Marquee pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={"white"} autoFill={true}>
                    {projectLogosData.projectLogos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.url}
                            alt={logo.alt}
                            className="project_logo mx-4 mx-[1.5rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[3.5rem]"  // Adjust margin for spacing between logos
                            style={{ filter: "grayscale(100%)", width: "160px", height: "54px" }}
                        />
                    ))}
                </Marquee>
            </div>
            <div>
                <div className=" flex justify-center ">
                    <div className="flex items-center bg-gray-900 text-white rounded-[33px] shadow-lg p-6 space-x-6">
                        {/* Text Section */}
                        <div>
                            <h2 className="text-[23.75px] font-semibold">Deep dive into AWS and its <br></br> enormous capabilities</h2>
                        </div>

                        {/* Image Section */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src={amazonbanner} // Replace with the actual image path for the AWS logo
                                alt="AWS Logo"
                                className="h-[90.8px] w-auto"
                            />
                            <Image
                                src={amazonbannertwo} // Replace with the actual image path for the AWS partner badge
                                alt="AWS Partner Badge"
                                className="h-[90.8px] w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectLogosDevops;
