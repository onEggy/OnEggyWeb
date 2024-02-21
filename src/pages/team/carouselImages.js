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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length / 5)); // Divide by 5 to determine the number of "groups" of images
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 3.7,
    slidesToScroll: 3.7,
    centerMode: true,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40",
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden">
      <Slider
        className="lg:h-225"
        {...settings}
        // initialSlide={currentIndex * 5}
        initialSlide={1}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-auto lg:h-40 px-2 lg:px-0"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImages;
