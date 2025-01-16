"use client";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import cardImage from "../../../public/card.png";

const servicesItem = [
  {
    id: 1,
    title: "AWS DevOps Services",
    description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
    img: cardImage,
  },
  {
    id: 2,
    title: "Cloud Automation",
    description: "Optimize your cloud infrastructure with OnEggy Technologies' Cloud Infrastructure Automation services. We leverage AWS services like CloudFormation and Terraform to automate provisioning, management, and scaling, allowing you to focus on your business growth while we handle the cloud.",
    img: cardImage,
  },
  {
    id: 3,
    title: "Monitoring & Optimization",
    description: "Maximize your cloud investment with our AWS Monitoring & Optimization services. We provide end-to-end monitoring of your cloud environment using AWS CloudWatch, ensure high availability, and optimize costs with Kubernetes and EC2 instance management, ensuring optimal performance and cost efficiency.",
    img: cardImage,
  },
  {
    id: 4,
    title: "Security & Compliance",
    description: "Protect your business with OnEggy Technologies' AWS Security & Compliance services. We ensure that your cloud infrastructure follows industry best practices, maintain robust security measures, and ensure compliance with frameworks like HIPAA and GDPR to mitigate risk and ensure data integrity.",
    img: cardImage,
  },
  {
    id: 5,
    title: "DevOps Consulting",
    description: "Transform your business with our expert DevOps Consulting & Strategy services. We work with you to create a tailored DevOps roadmap that integrates AWS services for continuous improvement, enhanced collaboration, and faster delivery cycles, helping you stay ahead in a competitive market.",
    img: cardImage,
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function ServicesMobile() {
  const cardsRef = useRef([]);
  const stickyHeaderRef = useRef(null);
  const stickySectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const scrollTrigger = ScrollTrigger.create({
      trigger: stickySectionRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const scrollDirection = self.direction;
        const scrollY = window.scrollY;
        
        if (stickyHeaderRef.current) {
          const maxTranslate = stickyHeaderRef.current.offsetWidth - window.innerWidth;
          const translateX = -progress * maxTranslate;
          gsap.set(stickyHeaderRef.current, { x: translateX });
        }

        cardsRef.current.forEach((card, index) => {
          const delay = index * 0.1125;
          const cardProgress = index === 0 
            ? Math.max(0.2, Math.min((progress - delay) * 1.5, 1))
            : Math.max(0, Math.min((progress - delay) * 1.5, 5));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const cardX = gsap.utils.interpolate(cardStartX, cardEndX, cardProgress);

            // For the last card
            if (index === cardsRef.current.length - 1) {
              // If scrolling down and reached -110
              if (scrollDirection > 0 && cardX <= -110) {
                gsap.set(card, {
                  xPercent: -110,
                  opacity: 1
                });
                return;
              }
              
              // If scrolling up and card is at -110 or beyond
              if (scrollDirection < 0 && cardX <= -110) {
                gsap.set(card, {
                  xPercent: cardX,
                  opacity: 1
                });
              } else {
                gsap.set(card, {
                  xPercent: cardX,
                  opacity: 1
                });
              }

              console.log('Direction:', scrollDirection);
              console.log('Position:', cardX);
            } else {
              gsap.set(card, {
                xPercent: cardX,
                opacity: 1
              });
            }
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });

        lastScrollY.current = scrollY;
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div
        className="relative font-inter bg-[#d6d5d5] w-full h-screen bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_50%)] overflow-hidden md:hidden"
        id="services"
        ref={stickySectionRef}>
        <div className="flex mt-2 px-[24px] flex-row items-center justify-between md:gap-[100px] flex-wrap mb-8">
          <div>
            <h2 className="text-[30px] font-bold text-gray-900">
              Our Cloud <br /> Services
            </h2>
          </div>
          <p className="text-[12px] text-gray-700 max-w-2xl leading-relaxed">
            We offer a variety of interesting features that can help increase your
            productivity at work and manage your project easily.
          </p>
          <button className="bg-black hover:bg-blue-600 text-white mt-4 md:mt-0 font-bold py-3 px-6 rounded-[70px] shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
        {servicesItem.map((card, index) => (
          <div
            key={card.id}
            className="absolute left-full w-[325px] bg-cover bg-center rounded-[23.52px] p-3 will-change-transform z-20"
            style={{ backgroundImage: `url(${card.img.src})` }}
            ref={(el) => (cardsRef.current[index] = el)}>
            <div className="w-full h-[200px] rounded-lg overflow-hidden">
            </div>
            <div className="absolute inset-0 rounded-[23.52px] bg-gradient-to-t from-black to-[#00000033]"></div>
            <div className="w-full h-[200px] flex flex-col justify-between text-white p-2 relative z-10">
              <div>
                <h2 className="text-[23.42px] tracking-tighter leading-tight font-medium">
                  {card.title}
                </h2>
              </div>
              <div>
                <p className="text-[14px] leading-tight">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}