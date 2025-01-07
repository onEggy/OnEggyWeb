"use client";
import { gsap } from "gsap";
import Image from "next/image";
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
		title: "AWS Analytics Services",
		description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
		img: cardImage,
	},
	{
		id: 3,
		title: "AWS Storage Services",
		description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
		img: cardImage,
	},
	{
		id: 4,
		title: "AWS AI Services",
		description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
		img: cardImage,
	},
	{
		id: 5,
		title: "AWS IoT Services",
		description: "Optimize your cloud experience with our AWS DevOps Services. We enable seamless integration and deployment, enhancing scalability and efficiency while leveraging AWS tools for automated workflows and robust performance.",
		img: cardImage,
	},
];

gsap.registerPlugin(ScrollTrigger);

export default function ServicesMobile() {
	const cardsRef = useRef([]);
	const stickyHeaderRef = useRef(null);
	const stickySectionRef = useRef(null);

	const transforms = [
		[
			[10, 50, -10, 10],
			[20, -10, -45, 10],
		],
		[
			[0, 47.5, -10, 15],
			[-25, 15, -45, 30],
		],
		[
			[0, 52.5, -10, 5],
			[15, -5, -40, 60],
		],
		[
			[10, 50, -10, 10],
			[20, -10, -45, 90],
		],
		[
			[0, 55, -15, 30],
			[25, -15, 60, 120],
		],
	];

	useEffect(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		ScrollTrigger.create({
			trigger: stickySectionRef.current,
			start: "top top",
			end: () => `+=${window.innerHeight * 5}px`,
			pin: true,
			pinSpacing: true,
			onUpdate: (self) => {
				const progress = self.progress;

				if (stickyHeaderRef.current) {
					const maxTranslate =
						stickyHeaderRef.current.offsetWidth - window.innerWidth;
					const translateX = -progress * maxTranslate;
					gsap.set(stickyHeaderRef.current, { x: translateX });
				}

				cardsRef.current.forEach((card, index) => {
					const delay = index * 0.1125; // Staggering effect for each card
					const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1)); // Ensure cardProgress is between 0 and 1
				  
					if (cardProgress > 0) {
					  const cardStartX = 25; // Starting position (X)
					  const cardEndX = -650; // Ending position (X)
					  const cardX = gsap.utils.interpolate(cardStartX, cardEndX, cardProgress); // Interpolated X movement
				  
					  gsap.set(card, {
						xPercent: cardX, // Move only on the X-axis
						opacity: 1, // Ensure the card is visible
					  });
					} else {
					  gsap.set(card, { opacity: 0 }); // Hide cards not in view
					}
				  });
				  
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
            <div className="flex mt-2 px-[24px]  flex-row items-center justify-between md:gap-[100px] flex-wrap mb-8">
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
			{/* <div
				className="absolute top-0 left-0 w-[250vw] h-full flex items-center justify-center will-change-transform"
				ref={stickyHeaderRef}>
				<h1 className="text-black text-[30vw] tracking-tight leading-tight font-semibold m-0">
					Services We Provide
				</h1>
			</div> */}
			{servicesItem.map((card, index) => (
				<div
					key={card.id}
					className="absolute  left-full w-[325px] bg-cover bg-center rounded-[23.52px] p-3 will-change-transform z-20"
					style={{ backgroundImage: `url(${card.img.src})` }}
					ref={(el) => (cardsRef.current[index] = el)}>
					<div className="w-full h-[200px] rounded-lg overflow-hidden">
						{/* <Image
							src={card.img}
							alt=""
							width={500}
							height={500}
							className="opacity-0" // Hide the image element itself
						/> */}
					</div>
					<div className="absolute  inset-0 rounded-[23.52px] bg-gradient-to-t from-black to-[#00000033]"></div>
					
					<div className="w-full h-[200px] flex flex-col justify-between text-white p-2 relative z-10">
						<div>
							<h2 className="text-[23.42px] tracking-tighter  leading-tight font-medium">
								{card.title}
							</h2>
						</div>
						<div>
							<p className="text-[16px]   leading-tight">{card.description}</p>
						</div>
					</div>
					
				</div>
			))}
		</div>
		</>
	);
}
