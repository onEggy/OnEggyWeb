import React from "react";
import { motion } from "framer-motion";

const SecurityAssurance = () => {
    const securityPoints = [
        {
            title: "Data Privacy",
            description:
                "Advanced encryption protocols ensure your data remains secure and confidential.",
            icon: (
                <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z" stroke="#1C274C" stroke-width="1.5" />
                    <path d="M2 11H22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path opacity="0.5" d="M4 11L4.6138 8.54479C5.15947 6.36211 5.43231 5.27077 6.24609 4.63538C7.05988 4 8.1848 4 10.4347 4H13.5653C15.8152 4 16.9401 4 17.7539 4.63538C18.5677 5.27077 18.8405 6.36211 19.3862 8.54479L20 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" stroke="#1C274C" stroke-width="1.5" />
                    <path opacity="0.5" d="M10 17.4999L10.6584 17.1707C11.5029 16.7484 12.4971 16.7484 13.3416 17.1707L14 17.4999" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            ),
        },
        {
            title: "Comprehensive Audits",
            description:
                "Regular security reviews keep your infrastructure aligned with compliance standards.",
            icon: (
                <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12C17 12.6566 16.8707 13.3068 16.6194 13.9134C16.3681 14.52 15.9998 15.0712 15.5355 15.5355C15.0712 15.9998 14.52 16.3681 13.9134 16.6194C13.3068 16.8707 12.6566 17 12 17C11.3434 17 10.6932 16.8707 10.0866 16.6194C9.47995 16.3681 8.92876 15.9998 8.46447 15.5355C8.00017 15.0712 7.63188 14.52 7.3806 13.9134C7.12933 13.3068 7 12.6566 7 12C7 11.3434 7.12933 10.6932 7.3806 10.0866C7.63188 9.47995 8.00017 8.92876 8.46447 8.46447C8.92876 8.00017 9.47996 7.63188 10.0866 7.3806C10.6932 7.12933 11.3434 7 12 7C12.6566 7 13.3068 7.12933 13.9134 7.3806C14.52 7.63188 15.0712 8.00017 15.5355 8.46447C15.9998 8.92876 16.3681 9.47996 16.6194 10.0866C16.8707 10.6932 17 11.3434 17 12L17 12Z" stroke="#1C274C" stroke-width="1.5" />
                    <path d="M13.8478 13.9134C13.9483 13.3068 14 12.6566 14 12C14 11.3434 13.9483 10.6932 13.8478 10.0866C13.7472 9.47996 13.5999 8.92876 13.4142 8.46447C13.2285 8.00017 13.008 7.63188 12.7654 7.3806C12.5227 7.12933 12.2626 7 12 7C11.7374 7 11.4773 7.12933 11.2346 7.3806C10.992 7.63188 10.7715 8.00017 10.5858 8.46447C10.4001 8.92876 10.2528 9.47995 10.1522 10.0866C10.0517 10.6932 10 11.3434 10 12C10 12.6566 10.0517 13.3068 10.1522 13.9134C10.2527 14.52 10.4001 15.0712 10.5858 15.5355C10.7715 15.9998 10.992 16.3681 11.2346 16.6194C11.4773 16.8707 11.7374 17 12 17C12.2626 17 12.5227 16.8707 12.7654 16.6194C13.008 16.3681 13.2285 15.9998 13.4142 15.5355C13.5999 15.0712 13.7472 14.52 13.8478 13.9134Z" stroke="#1C274C" stroke-width="1.5" />
                    <path d="M7 12H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 14.4963 20.1632 16.4284 19 17.9041M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            ),
        },
        {
            title: "Real-Time Monitoring",
            description:
                "Live monitoring systems detect risks instantly and provide actionable insights.",
            icon: (
                <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9426 1.25H13.5C13.9142 1.25 14.25 1.58579 14.25 2C14.25 2.41421 13.9142 2.75 13.5 2.75H12C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12V10.5C21.25 10.0858 21.5858 9.75 22 9.75C22.4142 9.75 22.75 10.0858 22.75 10.5V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25Z" fill="#1C274C" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5ZM19 2.75C17.7574 2.75 16.75 3.75736 16.75 5C16.75 6.24264 17.7574 7.25 19 7.25C20.2426 7.25 21.25 6.24264 21.25 5C21.25 3.75736 20.2426 2.75 19 2.75Z" fill="#1C274C" />
                    <path d="M13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z" fill="#1C274C" />
                </svg>
            ),
        },
        {
            title: "Multi-Layer Security",
            description:
                "Layered defense mechanisms protect your cloud infrastructure from potential threats.",
            icon: (
                <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5.5L3.21429 7L7.5 3" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path opacity="0.5" d="M2 12.5L3.21429 14L7.5 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2 19.5L3.21429 21L7.5 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 19L12 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path opacity="0.5" d="M22 12L12 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M22 5L12 5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-6xl mx-auto text-center"
            >
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                    Security Assurance for <span className="text-cyan-600">Cloud Optimization</span>
                </h2>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {securityPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-slate-50 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100,
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-4">{point.icon}</div>
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {point.title}
                            </h3>
                            {/* Description */}
                            <p className="text-sm text-gray-600">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default SecurityAssurance;
