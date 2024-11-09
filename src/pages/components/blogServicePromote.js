import React from 'react';
import Link from 'next/link';

const ManagedServices = () => {
    return (
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 shadow-lg overflow-hidden relative hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Accelerate DevOps and Cloud Managed
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        Our DevOps and Cloud Managed Services help you streamline your infrastructure, secure your data, and automate deployments seamlessly.
                    </p>

                    <Link href="/contact" passHref>
                        <button className="bg-purple-500 text-white py-3 px-6 font-semibold text-lg w-max hover:bg-cyan-600 transition-colors duration-200">
                            Start Free Trial
                        </button>
                    </Link>
                </div>

                {/* Icon Section with Animation */}
                <div className="flex items-center justify-center sm:justify-end">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="48"
                            height="48"
                        >
                            {/* Replace this SVG path with your service icon */}
                            <path d="M12 0l3.672 7.425 8.16 1.18-5.912 5.77 1.392 8.15-7.312-3.85-7.312 3.85 1.392-8.15-5.912-5.77 8.16-1.18z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background Animation */}
            <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
                <div className="absolute w-full h-full bg-gradient-to-r from-transparent to-gray-800 opacity-10 blur-xl"></div>
                <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-gray-800 opacity-10 blur-xl"></div>
            </div>
        </div>
    );
};

export default ManagedServices;
