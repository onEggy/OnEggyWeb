import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselImages = () => {
  const images = [
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
    "/team/people.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length / 5)); // Divide by 5 to determine the number of "groups" of images
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
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
    <div className="relative overflow-hidden">
      <Slider
        className="lg:h-225"
        {...settings}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-auto lg:h-40 px-2 lg:px-2"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImages;
