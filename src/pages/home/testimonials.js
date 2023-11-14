import React, { useEffect, useState } from "react";
import Headline from "../components/headline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "../../../public/data/testimonial.json";

const ActiveDot = () => (
  <div className="dot active-dot">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="#37FFF4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
        fill="#37FFF4"
      />
    </svg>
  </div>
);

const NormalDot = () => (
  <div className="dot">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
        fill="white"
      />
    </svg>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTitle(testimonialsData.title);
    setDesc(testimonialsData.desc);
    setTestimonials(testimonialsData.testimonials);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "25.33%",
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "22%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 0.96,
          slidesToScroll: 1,
          centerPadding: "4%",
        },
      },
    ],
    customPaging: function (i) {
      const isActive = i === currentSlide;
      return isActive ? <ActiveDot /> : <NormalDot />;
    },
  };

  return (
    <div className="px-4 sm:px-0">
      <Headline title={title} desc={desc} />
      <div className="bg-l_black py-16 rounded-3xl mt-4 mb-12 sm:mb-0">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:w-606px">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <p className="box-testimonial box-testimonial-content text-left text-sm text-white px-8 py-10">
                  {testimonial.testimonial}
                </p>

                <div className="mb-20 mx-20">
                  <h1 className="text-l_blue ml-10 mt-4 font-semibold text-left text-lg">
                    {testimonial.name}
                  </h1>
                  <h2 className="text-left ml-10 text-white">
                    {testimonial.designation}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
