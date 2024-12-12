import React from "react";
import Marquee from "react-fast-marquee";

const SlidingBanner = () => {
  const offers = [
    {
      text: "Get 20% off on our Cloud Optimization Services!",
      link: "/free-assesment-cloud-cost",
      gradient: "bg-gradient-to-r from-cyan-500 to-red-500",
    },
    {
      text: "Free 30-minute consultation for new clients!",
      link: "https://www.cal.com/oneggy-aakash-sharma/30min",
      gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      text: "Reduce your AWS costs by up to 45% - Learn How!",
      link: "/free-assesment-cloud-cost",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Marquee gradient={true} speed={80} autoFill={true} gradientWidth={20} pauseOnHover={true}>
          {offers.map((offer, index) => (
            <a
              key={index}
              href={offer.link}
              className={`mx-6 text-sm md:text-base font-medium bg-clip-text text-transparent ${offer.gradient} hover:opacity-80 transition`}
            >
              {offer.text}
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SlidingBanner;
