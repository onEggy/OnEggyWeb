import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import hehe from "../../../public/sagar.png";
import Image from "next/image";

const CloudTestimonials = () => {
    const testimonials = [
        {
            "content": "Working with SmileFoundation has been an incredible experience. Their commitment to improving lives through healthcare and education is unmatched. The team’s dedication and professionalism make them a leader in their field, and it’s an honor to collaborate with them on impactful projects.",
            "name": "Irteza Hussain",
            "designation": "Tech Manager @ Smile Foundation",
            "image": "/sagar.png"
        },
        {
            "content": "PrinterPoint has truly revolutionized how we manage our printing needs. Their seamless integration of technology and expert customer service allows us to run our operations smoothly without worrying about printer downtime. We can’t imagine our business without them.",
            "name": "Rakesh Aggarwal",
            "designation": "Director @ PrinterPoint",
            "image": "/sagar.png"
        },
        {
            "content": "Anveshan helped us accelerate our market research with deep insights and innovative strategies. Their professionalism, attention to detail, and customer-centric approach have helped us drive better business decisions. We highly recommend them for anyone looking to stay ahead of the curve.",
            "name": "Kuldeep Parewa",
            "designation": "CEO, Anveshan Farm",
            "image": "/sagar.png"
        },
        {
            "content": "CloudStok has transformed our infrastructure with their state-of-the-art cloud solutions. Their expertise in AWS and cloud migration services has allowed us to scale faster and more efficiently, all while reducing costs and improving security. We are more agile than ever.",
            "name": "Prateek Rawat",
            "designation": "CTO, CloudStok Technologies",
            "image": "/sagar.png"
        },
        {
            "content": "MobileGoo's app development services have taken our business to the next level. Their team not only delivered a high-quality app but also provided valuable insights that enhanced user experience. Thanks to them, we have a powerful platform to engage with our customers.",
            "name": "Saurabh",
            "designation": "CEO, MobileGoo",
            "image": "/sagar.png"
        },
        {
            "content": "BitMemoir’s blockchain expertise is second to none. Their solution helped us streamline our transactions and increase transparency across the board. The implementation was smooth, and the results exceeded our expectations, making them our go-to for all blockchain needs.",
            "name": "Nikhil Gupta",
            "designation": "Founder, BitMemoir",
            "image": "/sagar.png"
        },
        {
            "content": "BeingBitsMart's digital marketing strategies have helped us increase our online presence and sales significantly. Their tailored campaigns and deep understanding of consumer behavior have made a massive difference to our bottom line. Their expertise is truly invaluable.",
            "name": "Mayank Gupta",
            "designation": "CEO, BitsMart Technologies",
            "image": "/sagar.png"
        }

    ];
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section className="bg-gray-900 font-inter text-white py-12 px-6">
            <div className="max-w-[77rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div className="space-y-6">
                    <h3 className="hidden text-4xl font-bold">
                        Testimonials
                    </h3>
                    <h2 className="text-[31px] md:text-[40px] font-bold">
                        What Clients Say About Our Managed IT Services?
                    </h2>
                    <p className="text-[10.31px] md:text-[16px] text-gray-400">
                        Hundreds of thriving businesses and Fortune 500 firms worldwide
                        choose OnEggy Technologies as their DevOps service provider for their
                        mission-critical projects.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="w-[41px] md:w-[57px] h-[41px] md:h-[57px]  flex items-center justify-center rounded-full hover:bg-gray-600"
                            style={{ backgroundColor: "#393A3E" }}
                        >
                            <FiArrowLeft className="text-white text-xl" />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="w-[41px] md:w-[57px] h-[41px] md:h-[57px] bg-white flex items-center justify-center rounded-full hover:bg-gray-600"
                        >
                            <FiArrowRight className="text-[#191A23] text-xl" />
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <Slider {...settings} ref={sliderRef}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-[#E8FFFE] text-gray-900 p-6 rounded-[27px] shadow-lg"
                            >
                                <p className="text-[11.8px] md:text-[17.4px] mb-4">{testimonial.content}</p>
                                <div className="flex items-center space-x-4">
                                    <Image
                                        width={48}
                                        height={48}
                                        src={testimonial.image || hehe}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-[10.66px] md:text-[16px] font-semibold">{testimonial.name}</h3>
                                        <p className="text-[10.66px] md:text-[16px] text-gray-500">
                                            {testimonial.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default CloudTestimonials;
