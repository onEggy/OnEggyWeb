import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cardImage from "../../../public/card.png";

const CloudServices = () => {
    const containerRef = useRef(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const services = [
        {
            title: "AWS DevOps Services",
            description:
                "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
            imageUrl: cardImage,
        },
        {
            title: "AWS Analytics Services",
            description:
                "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
            imageUrl: cardImage,
        },
        {
            title: "AWS Storage Services",
            description:
                "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
            imageUrl: cardImage,
        },
        {
            title: "AWS AI Services",
            description:
                "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
            imageUrl: cardImage,
        },
        {
            title: "AWS IoT Services",
            description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
            imageUrl: cardImage,
        },
    ];

    // Track scroll progress and adjust progress range
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Fine-tune scroll behavior
    const manualOffsetRange = [0.1, 0.9]; // Start from 10%, end at 90% scroll
    const adjustedProgress = useTransform(scrollYProgress, [0.43, 0.698], [0, 1.6]);


    useEffect(() => {
        const unsubscribe = adjustedProgress.onChange((progress) => {
            const newActiveIndex = Math.min(
                Math.floor(progress * services.length),
                services.length - 1
            );
            setActiveCardIndex(newActiveIndex);
        });

        return () => unsubscribe();
    }, [adjustedProgress, services.length]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-400 text-black flex flex-col items-center justify-center px-8 py-12"
        >
            <div className="flex flex-row items-center justify-between gap-6 flex-wrap mb-12">
                <div>
                    <h2 className="text-[46px] font-bold text-gray-900">
                        Our Cloud <br /> Services
                    </h2>
                </div>
                <p className="text-[18px] text-gray-700 max-w-2xl leading-relaxed">
                    We offer a variety of interesting features that can help increase your productivity at work and manage your project easily.
                </p>

                <button className="bg-black hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-[70px] shadow-lg transition-all duration-300">
                    Get Started
                </button>
            </div>

            {/* Debug Info */}
            {/* <div className="w-full max-w-6xl mb-4 p-4 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-bold">Debug Info</h3>
                <p>Scroll Progress: {scrollYProgress.get().toFixed(2)}</p>
                <p>Adjusted Progress: {adjustedProgress.get().toFixed(2)}</p>
                <p>Active Card Index: {activeCardIndex}</p>
            </div> */}

            <div className="w-full max-w-6xl flex space-x-4 overflow-x-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`service-card flex-grow bg-white rounded-[40px] shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ${activeCardIndex === index ? "w-80" : "w-16"
                            }`}
                        style={{
                            transformOrigin: "left",
                            transition: "width 0.5s ease-in-out",
                            height: "60vh",
                            backgroundImage: `url('/card.png')`,
                            position: "relative",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                        <motion.div
                            className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${activeCardIndex === index ? "items-start px-6 py-4" : "items-center"
                                }`}
                        >
                            <h3
                                className={`text-xl font-bold transition-all duration-300 whitespace-nowrap
                                     ${activeCardIndex === index
                                        ? "rotate-0 text-left"
                                        : "rotate-90 text-center flex justify-center items-center"
                                    }`}
                                style={{
                                    height: "100%",  // Ensures it spans the full card height
                                    width: "100%",   // Ensures it spans the full card width
                                    display: "flex", // Centering mechanism
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: activeCardIndex === index ? "0px" : "100px",
                                }}
                            >
                                {service.title}
                            </h3>

                            {activeCardIndex === index && (
                                <motion.p
                                    className="text-sm text-gray-300 mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1 }}
                                >
                                    {service.description}
                                </motion.p>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CloudServices;
