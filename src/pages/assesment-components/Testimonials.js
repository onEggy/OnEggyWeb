import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Kuldeep",
        role: "Co-Founder, Anveshan Farm.",
        feedback:
            "OnEggy Technologies has been a pivotal partner in optimizing our cloud infrastructure. Their strategies saved us 35% in cloud costs while improving overall performance. A seamless and professional experience throughout!",
    },
    {
        name: "Irteza Hussain",
        role: "Tech Lead, Smile Foundation NGO India",
        feedback:
            "OnEggy Technologies helped us achieve a 30% reduction in cloud costs, allowing us to allocate more resources to our programs. Their efficient and innovative approach ensured seamless operations while minimizing expenses. We are grateful for their support in advancing our mission and highly recommend their services!",
    },
    {
        name: "Prashant Tiwari",
        role: "CTO, MeraDoc HealthTech",
        feedback:
            "OnEggy Technologies helped us slash our cloud spending by 30%, enabling us to allocate resources more effectively. Their expertise in cloud cost optimization is unmatched. Highly recommended for anyone looking to optimize their cloud operations!",
    },
    {
        name: "Prateek Rawat",
        role: "Co-Founder, CloudStok Technologies",
        feedback:
            "OnEggy Technologies delivered incredible results with their cloud cost optimization solutions. We saw a 40% reduction in costs while achieving greater system scalability and efficiency. Their team’s dedication to excellence is evident in everything they do!",
    },
    {
        name: "Saurabh",
        role: "Co-Founder, MobileGoo",
        feedback:
            "OnEggy Technologies transformed how we manage our cloud infrastructure, saving us thousands every month in costs. Their innovative and customized solutions made a massive difference in our operations. Truly exceptional!",
    },
    {
        name: "Nikhil Gupta",
        role: "Co-Founder, BitMemoir",
        feedback:
            "Partnering with OnEggy Technologies was the best decision for our cloud operations. They reduced our cloud expenses by 25% without any compromise on performance or security. Their team is proactive, knowledgeable, and focused on results!",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentIndex(
            (prevIndex) =>
                (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="py-16 px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
            >
                {/* Left Section */}
                <div className="md:w-1/3 text-center md:text-left">
                    <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                        Testimonials
                    </h2>
                    <p className="text-lg text-gray-700">
                        Discover how we’ve transformed businesses with our innovative
                        solutions and expert consulting.
                    </p>
                </div>

                {/* Right Section */}
                <div className="md:w-2/3">
                    <div className="relative">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center p-8 bg-white rounded-lg shadow-md space-y-6 border border-gray-200"
                        >
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" className="w-12 h-12 mx-auto text-cyan-600" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.61 11.84C11.61 14.92 10.94 15.61 9.15 16.67C9.03 16.74 8.9 16.77 8.77 16.77C8.51 16.77 8.26 16.64 8.12 16.4C7.91 16.04 8.03 15.58 8.38 15.37C9.59 14.65 10.01 14.39 10.09 12.58H8.19C7.1 12.58 6.25 11.73 6.25 10.64V9.16C6.25 8.07 7.1 7.22 8.19 7.22H9.68C10.75 7.22 11.62 8.09 11.62 9.16V11.84H11.61ZM17.75 11.84C17.75 14.92 17.08 15.61 15.29 16.67C15.17 16.74 15.04 16.77 14.91 16.77C14.65 16.77 14.4 16.64 14.26 16.4C14.05 16.04 14.17 15.58 14.52 15.37C15.73 14.65 16.15 14.39 16.23 12.58H14.32C13.23 12.58 12.38 11.73 12.38 10.64V9.16C12.38 8.07 13.23 7.22 14.32 7.22H15.81C16.88 7.22 17.75 8.09 17.75 9.16V11.84Z" fill="#292D32" />
                            </svg>
                            <p className="text-xl text-gray-800 font-medium leading-relaxed italic">
                                "{testimonials[currentIndex].feedback}"
                            </p>
                            <div className="text-gray-700">
                                <span className="font-bold">{testimonials[currentIndex].name}</span>,{" "}
                                <span className="italic">{testimonials[currentIndex].role}</span>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center mt-6 space-x-4">
                            <button
                                onClick={previousTestimonial}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Testimonials;
