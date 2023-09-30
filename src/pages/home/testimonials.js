import React from "react";
import Headline from "../components/headline";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Testimonials = () => {
  const comments = [
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const title = "Testimonials";
  const desc =
    "Hear from our happy customers: Learn more about our digital services by reading our Testimonials";

  return (
    <div className="px-4 sm:px-0">
      <Headline title={title} desc={desc} />
      <div className="bg-l_black py-16 rounded-3xl mt-4 mb-12 sm:mb-0">
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000} // Set autoplay interval to 3 seconds (3000 milliseconds)
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={true} // Enable touch tracking for mobile devices
          responsive={responsive}
          controlsStrategy="alternate"
        >
          {comments?.map((comment, index) => (
            <div key={index} className="">
              <p className="msg-bubble bg-d_blue text-left text-sm text-white px-8 py-10">
                {comment}
              </p>
              <div className="">
                <h1 className="text-l_blue ml-10 mt-4 font-semibold text-left text-lg">
                  John Smith
                </h1>
                <h2 className="text-left ml-10 text-white">
                  Marketing Director at XYZ Corp
                </h2>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
