import React from "react";
import Headline from "../components/headline";
import Slider from "react-slick"; // Import the Slider component

const technologyStack = () => {
  const title = "Technology Stacks";
  const desc =
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";

  // Define your list of technology stack images
  const technologyStackImages = [
    "/service/html.png",
    "/service/vue.png",
    "/service/react.png",
    "/service/angular.png",
    "/service/node.png",
    "/service/aws.png",
    "/service/python.png",
    "/service/sql.png",
  ];

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="">
      <Headline title={title} desc={desc} />
      <Slider {...sliderSettings}>
        {technologyStackImages.map((image, index) => (
          <div key={index} className="mx-2 mt-5">
            <img src={image} alt={`Tech Stack Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default technologyStack;
