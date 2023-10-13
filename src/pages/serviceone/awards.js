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
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "10",
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  const imageStyle = {
    margin: "0 10px",
  };

  return (
    <div className="mx-7">
      <Headline title={title} desc={description} />
      <div className="flex flex-col md:flex-row mt-16">
        <div className="w-full md:w-1/2 ">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image.url} // Use the image URL from JSON
                  alt={image.alt}
                  className="mx-auto"
                  style={imageStyle}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full md:w-1/2 p-5 mt-5">
          <p>
            We create delectable dishes by combining design and technology with
            additional cheese of awesomeness. With demonstrated experience in
            accelerating the growth of start-ups by analyzing their needs and
            delivering the growth package. We make your dreams a reality. We're
            Oneggy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
