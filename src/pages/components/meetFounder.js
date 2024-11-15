import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const MeetTheFounder = () => {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center max-w-4xl mx-auto my-16">
            {/* Image Section */}
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 relative mb-6 md:mb-0 md:mr-8">
                <Image
                    src="/contact/Akash.png" // Replace with actual image path
                    alt="Aakash Sharma, Founder of OnEggy Technologies"
                    layout="fill"
                    objectFit="cover"
                    // className="rounded-full"
                />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    Meet Our <span className="underline decoration-cyan-500 decoration-4">Founder</span>
                </h2>
                <h3 className="text-xl text-blue-600 font-medium">
                    <span className="underline decoration-dotted decoration-blue-400">Aakash Sharma</span>
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-600 underline decoration-wavy decoration-blue-500">
                        Aakash Sharma founded OnEggy Technologies
                    </span>{" "}
                    with a vision to{" "}
                    <span className="italic underline decoration-cyan-500 decoration-2">
                        revolutionize Technologies and Solution Architecture.
                    </span>{" "}
                    With over a decade of experience, Aakash has led the company to achieve{" "}
                    <span className="font-bold text-blue-600 underline decoration-wavy decoration-blue-500">
                        exceptional milestones
                    </span>{" "}
                    in delivering quality solutions and innovative strategies. His{" "}
                    <span className="italic underline decoration-dashed decoration-cyan-400">
                        leadership and commitment
                    </span>{" "}
                    continue to inspire the team.
                </p>
                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    <a
                        href="https://www.linkedin.com/in/redaakash"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-blue-600 text-2xl hover:text-blue-800"
                        />
                    </a>
                    <a
                        href="https://twitter.com/redaakash"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-blue-400 text-2xl hover:text-blue-600"
                        />
                    </a>
                    <a
                        href="https://facebook.com/redaakash"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-blue-700 text-2xl hover:text-blue-900"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MeetTheFounder;
