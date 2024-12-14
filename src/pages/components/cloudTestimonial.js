import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CloudTestimonials = () => {
    const testimonials = [
        {
            content:
                "Glad that I made the decision to hire full stack services from CONTUS TECH, they understood the complexity of our needs and gave us different options to choose from. Their attention to detail and commitment to deliver the solutions were unmatchable, from my previous experiences with full stack development companies, CONTUS TECH is my absolute go-to full stack development company.",
            name: "Sagar Mittal",
            designation: "CEO Infotech Pvt. Ltd.",
            image: "/images/sagar-mittal.jpg", // Replace with the actual path
        },
        {
            content:
                "Glad that I made the decision to hire full stack services from CONTUS TECH, they understood the complexity of our needs and gave us different options to choose from. Their attention to detail and commitment to deliver the solutions were unmatchable, from my previous experiences with full stack development companies, CONTUS TECH is my absolute go-to full stack development company.",
            name: "Sagar Mittal",
            designation: "CEO Infotech Pvt. Ltd.",
            image: "/images/sagar-mittal.jpg", // Replace with the actual path
        },
        {
            content:
                "Glad that I made the decision to hire full stack services from CONTUS TECH, they understood the complexity of our needs and gave us different options to choose from. Their attention to detail and commitment to deliver the solutions were unmatchable, from my previous experiences with full stack development companies, CONTUS TECH is my absolute go-to full stack development company.",
            name: "Sagar Mittal",
            designation: "CEO Infotech Pvt. Ltd.",
            image: "/images/sagar-mittal.jpg", // Replace with the actual path
        },
        {
            content:
                "Glad that I made the decision to hire full stack services from CONTUS TECH, they understood the complexity of our needs and gave us different options to choose from. Their attention to detail and commitment to deliver the solutions were unmatchable, from my previous experiences with full stack development companies, CONTUS TECH is my absolute go-to full stack development company.",
            name: "Sagar Mittal",
            designation: "CEO Infotech Pvt. Ltd.",
            image: "/images/sagar-mittal.jpg", // Replace with the actual path
        },
        {
            content:
                "Glad that I made the decision to hire full stack services from CONTUS TECH, they understood the complexity of our needs and gave us different options to choose from. Their attention to detail and commitment to deliver the solutions were unmatchable, from my previous experiences with full stack development companies, CONTUS TECH is my absolute go-to full stack development company.",
            name: "Sagar Mittal",
            designation: "CEO Infotech Pvt. Ltd.",
            image: "/images/sagar-mittal.jpg", // Replace with the actual path
        },
        // Add more testimonials if needed
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
        <section className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-[77rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div className="space-y-6">
                    <h3 className="text-4xl font-bold">
                        Testimonials
                    </h3>
                    <h2 className="text-4xl font-bold">
                        What Clients Say About Our Managed IT Services?
                    </h2>
                    <p className="text-gray-400">
                        Hundreds of thriving businesses and Fortune 500 firms worldwide
                        choose CONTUS Tech as their DevOps service provider for their
                        mission-critical projects.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="w-10 h-10  flex items-center justify-center rounded-full hover:bg-gray-600"
                            style={{ backgroundColor: "#393A3E" }}
                        >
                            <FiArrowLeft className="text-white text-xl" />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="w-10 h-10 bg-white flex items-center justify-center rounded-full hover:bg-gray-600"
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
                                <p className="text-lg mb-4">{testimonial.content}</p>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">
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
