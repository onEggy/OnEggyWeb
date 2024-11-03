import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headline from "../components/headline";
import awardsData from "../../../public/data/awards.json"; // Import the JSON data

const Awards = () => {
  const { title, description, images } = awardsData;

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show 1 slide at a time on mobile for better focus
    centerMode: true,
    centerPadding: "20px", // Adds padding on sides for centered image effect
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 image for screens < 768px
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="mx-4 sm:mx-8 my-10">
      {/* Title and Description */}
      <Headline
        mainCss="text-center mb-6"
        title={title}
        desc={description}
        titleCss="text-2xl sm:text-3xl font-semibold text-center text-l_black"
        descCss="text-base text-center text-gray-600 mt-2"
      />

      {/* Slider and Content */}
      <div className="flex flex-col items-center md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Carousel */}
        <div className="w-full md:w-6/12">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="p-4">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="mx-auto max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-6/12 px-4 text-center md:text-left">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We create delectable dishes by combining design and technology with
            an additional dash of awesomeness. With demonstrated experience in
            accelerating the growth of start-ups by analyzing their needs and
            delivering a comprehensive growth package, we make your dreams a
            reality. We're OnEggy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
