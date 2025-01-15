import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import cardImage from "../../../public/card.png";

gsap.registerPlugin(ScrollTrigger);

const CloudServices = () => {
    const containerRef = useRef(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const services = [
        {
            title: "AWS DevOps Services",
            description:
                "Accelerate your cloud transformation with OnEggy Technologies' AWS DevOps Managed Services. We streamline your CI/CD pipelines, automate deployments, and ensure seamless integration with AWS tools to maximize performance, security, and scalability for your applications.",
            imageUrl: cardImage,
        },
        {
            title: "Cloud Automation",
            description:
                "Optimize your cloud infrastructure with OnEggy Technologies' Cloud Infrastructure Automation services. We leverage AWS services like CloudFormation and Terraform to automate provisioning, management, and scaling, allowing you to focus on your business growth while we handle the cloud.",
            imageUrl: cardImage,
        },
        {
            title: "Monitoring & Optimization",
            description:
                "Maximize your cloud investment with our AWS Monitoring & Optimization services. We provide end-to-end monitoring of your cloud environment using AWS CloudWatch, ensure high availability, and optimize costs with Kubernetes and EC2 instance management, ensuring optimal performance and cost efficiency.",
            imageUrl: cardImage,
        },
        {
            title: "Security & Compliance",
            description:
                "Protect your business with OnEggy Technologies' AWS Security & Compliance services. We ensure that your cloud infrastructure follows industry best practices, maintain robust security measures, and ensure compliance with frameworks like HIPAA and GDPR to mitigate risk and ensure data integrity.",
            imageUrl: cardImage,
        },
        {
            title: "DevOps Consulting",
            description:
                "Transform your business with our expert DevOps Consulting & Strategy services. We work with you to create a tailored DevOps roadmap that integrates AWS services for continuous improvement, enhanced collaboration, and faster delivery cycles, helping you stay ahead in a competitive market.",
            imageUrl: cardImage,
        },
    ];

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            duration: 1.2,
        });

        lenis.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(containerRef.current, {
            scrollTop(value) {
                return lenis.scrollTop(value);
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        });

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        const container = containerRef.current;
        if (container) {
            gsap.to(container, {
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${container.scrollWidth}`,
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        console.log("Scroll Progress:", self.progress);
                    },
                },
                x: () => -(container.scrollWidth - window.innerWidth) + "px",
                ease: "none",
            });
        }

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.globalTimeline.clear();
        };
    }, []);

    useEffect(() => {
        const scrollHandler = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${containerRef.current.scrollWidth}`,
            onUpdate: (self) => {
                const progress = self.progress * (services.length - 1);
                const newActiveIndex = Math.round(progress);
                if (newActiveIndex !== activeCardIndex) {
                    setActiveCardIndex(newActiveIndex);
                }
            },
        });

        return () => scrollHandler.kill();
    }, [services.length, activeCardIndex]);

    return (
        <section
            ref={containerRef}
            className="cloud-services min-h-screen font-inter bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_50%)] text-black flex flex-col items-center justify-center px-8 py-12"
        >
            <div className="flex flex-row items-center justify-between md:gap-[100px] flex-wrap mb-12">
                <div>
                    <h2 className="text-[46px] font-bold text-gray-900">
                        Our Cloud <br /> Services
                    </h2>
                </div>
                <p className="text-[18px] text-gray-700 max-w-2xl leading-relaxed">
                    We offer a variety of interesting features that can help increase your
                    productivity at work and manage your project easily.
                </p>

                <button className="bg-black hover:bg-blue-600 text-white mt-4 md:mt-0 font-bold py-3 px-6 rounded-[70px] shadow-lg transition-all duration-300">
                    Get Started
                </button>
            </div>

            <div
                className="w-full max-w-[77rem] flex md:space-x-4 overflow-x-auto"
                ref={containerRef}
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card service-card-${index} px-2 flex-grow bg-white rounded-[40px] shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ${activeCardIndex === index ? "w-80" : "w-16"
                            } md:h-[580px] h-[404px]`}
                        style={{
                            transformOrigin: "left",
                            transition: "width 0.5s ease-in-out",
                            backgroundImage: `url(${service.imageUrl.src || service.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-[#00000075]"></div>

                        <div
                            className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${activeCardIndex === index
                                ? "items-start px-6 py-4"
                                : "items-center"
                                }`}
                        >
                            <h3
                                className={`md:text-[40px] text-[23.52px] text-white font-bold transition-all duration-300 
                  ${activeCardIndex === index ? "rotate-0 text-left" : "rotate-90 text-center flex justify-center whitespace-nowrap items-center"}
                  ${activeCardIndex === index ? "mt-[10%] md:mt-[80%]" : "mt-[700%] md:mt-[150%]"}
                `}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {service.title}
                            </h3>

                            {activeCardIndex === index && (
                                <p className="text-sm text-left text-gray-300 mt-2">
                                    {service.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .cloud-services {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default CloudServices;
