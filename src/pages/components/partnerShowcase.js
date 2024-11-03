import React from 'react';
import Image from 'next/image';
import AWSpartnerImage from "../../../public/partnerlogos/AWSpartner.png";
import xloudtechnologiesImage from "../../../public/partnerlogos/xloudtechnologies.png";
import shivaamiImage from "../../../public/partnerlogos/shivaami.png";

const PartnerShowcase = () => {

    const partners = [
        { name: "AWS Partner", logo: AWSpartnerImage, rating: 4.5 },
        { name: "Xloud Technologies", logo: xloudtechnologiesImage, rating: 4.5 },
        { name: "Shivaami", logo: shivaamiImage, rating: 4.5 },
        // { name: "Xloud Technologies", logo: "/partnerlogos/xloudtechnologies.png" },
        // Add more partners as needed
    ];

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-20 px-6 md:px-20 space-y-8 md:space-y-0">
            {/* Title Section */}
            <div className="text-left max-w-sm md:max-w-none">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Certified Partners in <br /> Cloud Excellence
                </h2>
            </div>

            {/* Partner Logos with Ratings */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-6 md:space-x-10 lg:space-x-12">
                {partners.map((partner, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                        {/* Partner Logo */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24">
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                                priority // Use priority for faster loading
                            />
                        </div>

                        {/* Star Ratings */}
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill={i < Math.floor(partner.rating) ? "black" : i < partner.rating ? "gray" : "none"}
                                    stroke={i < partner.rating ? "black" : "none"}
                                    strokeWidth="1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.401 8.173L12 18.896l-7.335 3.872 1.401-8.173L.132 9.21l8.2-1.192L12 .587z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartnerShowcase;
