import React from "react";
import Headline from "../components/headline";
import Slider from "react-slick"; // Import the Slider component
import Marquee from "react-fast-marquee";

const technologyStack = () => {
  const title = "Technology Stacks";
  const desc =
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";

  // Define your list of technology stack images
  const technologyStackImages = [
    "/service/html.svg",
    "/service/vue.svg",
    "/service/react.svg",
    "/service/angular.svg",
    "/service/node.svg",
    "/service/aws.svg",
    "/service/python.svg",
    "/service/mysql.svg",
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover:false,
    pauseOnFocus:false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="">
      <Headline title={title} desc={desc} descCss={' md:mt-8'} />
      <Marquee pauseOnHover={false} speed={30} pauseOnClick={false} gradient={true} gradientColor={"white"} autoFill={true}>
        {technologyStackImages.map((image, index) => (
          <img key={index} src={image} alt={`Tech Stack Image ${index + 1}`} className="mx-2 mt-16" />
        ))}
      </Marquee>
    </div>
  );
};

export default technologyStack;
