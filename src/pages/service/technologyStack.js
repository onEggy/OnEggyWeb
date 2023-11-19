// Import the correct key from the JSON data
import React from "react";
import Headline from "../components/headline";
import Slider from "react-slick";
import Link from 'next/link';

const TechnologyStack = ({ id, serviceData }) => {
  const title = "Technology Stacks";
  const desc =
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";

  const technologyStackImages = serviceData.technolgyStacImages;

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
            <Link href={`/service/${id}`}>
                <img src={image} alt={`Tech Stack Image ${index + 1}`} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologyStack;
