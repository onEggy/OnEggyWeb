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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false, // Hide navigation arrows if needed
    dots: false, // Hide dots if needed
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable fade effect between slides
    cssEase: "linear", // Specify the easing effect
  };

  return (
    <div className="relative overflow-hidden">
      <Slider className="lg:h-225" {...settings} initialSlide={currentIndex}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              className="w-full lg:h-225"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselImages;
