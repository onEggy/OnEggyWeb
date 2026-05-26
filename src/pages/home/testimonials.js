import React, { useEffect, useState } from "react";
import Headline from "../components/headline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "../../../public/data/testimonial.json";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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


  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "transparent",position:'relative',top:'15px',left:'900px',transform:'scale(1.3)' }}
  //       onClick={onClick}
  //       />
  //       );
  //     }

  //     function SamplePrevArrow(props) {
  //       const { className, style, onClick } = props;
  //       return (
  //         <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "transparent",position:'relative',top:'440px',left:'340px',transform:'scale(1.3)' }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0.98,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'linear',
    pauseOnHover: false,
    arrows: true,
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
          slidesToShow: 0.98,
          slidesToScroll: 1,
          centerPadding: "4%",
        },
      },
    ],
    customPaging: function (i) {
      const isActive = i === currentSlide;
      return isActive ? <ActiveDot /> : <NormalDot />;
    },
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="px-4 sm:px-0">
      <Headline title={title} desc={desc} titleCss={'md:font-bold md:text-4xl'} descCss={'md:w-[32rem] md:mt-7 md:ml-16'} />


      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 rounded-3xl mt-16 mb-12 sm:mb-0">
        <div className="container mx-auto px-4">
          {/* Marquee for scrolling testimonials */}
          <Marquee pauseOnHover={true} speed={60}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-lg mx-4 bg-gray-700 rounded-2xl shadow-lg p-8 md:p-10 transform transition duration-500 relative"
                style={{ minWidth: "300px", height: "300px" }} // Set consistent height
              >
                {/* Quotation Icon */}
                <div className="absolute -top-8 left-6 bg-cyan-500 p-3 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.96 9.002c.33 0 .6.272.6.6 0 3.46-1.3 5.647-3.58 6.755.178-.675.48-1.823.877-2.824a5.72 5.72 0 00.33-1.08c.4-1.922 1.228-2.946 2.46-2.946.33 0 .6.272.6.6zm9.48 0c.33 0 .6.272.6.6 0 3.46-1.3 5.647-3.58 6.755.178-.675.48-1.823.877-2.824.141-.361.264-.713.33-1.08.4-1.922 1.228-2.946 2.46-2.946.33 0 .6.272.6.6z" />
                  </svg>
                </div>

                {/* Testimonial Content with Line Clamp */}
                <p className="text-left text-gray-300 text-sm sm:text-base leading-relaxed mb-8 line-clamp-5">
                  "{testimonial.testimonial}"
                </p>

                {/* User Info */}
                <div className="flex items-center mt-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <span className="text-gray-400 text-sm sm:text-base block">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </div>
  );
};

export default Testimonials;
