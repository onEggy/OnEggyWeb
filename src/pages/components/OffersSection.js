import React from "react";
import Marquee from "react-fast-marquee";

const OffersMarquee = () => {
  const offers = [
    {
      text: "Get 20% off on our Cloud Optimization Services!",
      link: "/offers/cloud-optimization",
    },
    {
      text: "Free 30-minute consultation for new clients!",
      link: "/contact",
    },
    {
      text: "Reduce your AWS costs by up to 45% - Learn How!",
      link: "/case-studies/aws-cost-reduction",
    },
  ];

  return (
    <div className="bg-cyan-600 py-2">
      <Marquee
        gradient={false}
        speed={50}
        className="text-white text-sm md:text-base font-semibold"
      >
        {offers.map((offer, index) => (
          <a
            key={index}
            href={offer.link}
            className="mx-4 flex-shrink-0 underline hover:text-cyan-200 transition"
          >
            {offer.text}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default OffersMarquee;
