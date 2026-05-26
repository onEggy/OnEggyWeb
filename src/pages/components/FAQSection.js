import { useState } from 'react';
import Image from 'next/image';
import faqbg from '../../../public/faqbg.png';


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            "question": "What Are DevOps Cloud Consulting Services?",
            "answer": "DevOps Cloud Consulting services involve a set of practices and tools that streamline your development, operations, and infrastructure. OnEggy Technologies helps you automate processes, integrate workflows, and achieve seamless cloud scalability with expertise in AWS, Azure, and GCP."
        },
        {
            "question": "How Can DevOps Help My Business?",
            "answer": "DevOps improves collaboration between development and operations teams, enabling faster releases and higher quality. By leveraging cloud platforms, we ensure enhanced scalability, security, and optimized infrastructure to boost business performance and reduce costs."
        },
        {
            "question": "What Cloud Platforms Do You Work With?",
            "answer": "We specialize in AWS, Azure, and Google Cloud. Our experts help you choose the best platform tailored to your business needs, ensuring optimal performance, cost efficiency, and scalability."
        },
        {
            "question": "How Do You Ensure Security In Cloud Implementations?",
            "answer": "OnEggy Technologies follows best security practices, including strong access controls, encryption, and regular security audits. We ensure your cloud infrastructure is secure, resilient, and compliant with industry standards."
        },
        {
            "question": "What Is The Process For Engaging With OnEggy Technologies For DevOps Cloud Consulting?",
            "answer": "Our process starts with understanding your specific needs and business objectives. We then create a customized DevOps roadmap, implement cloud solutions, automate workflows, and ensure continuous monitoring and improvements to maximize efficiency and scalability."
        },
        {
            "question": "Do You Provide Ongoing Support After Implementation?",
            "answer": "Yes, we provide ongoing support to monitor and optimize your cloud infrastructure, address any issues, and implement necessary updates. Our team ensures continuous improvements for enhanced performance and security as your business evolves."
        }
    ];    

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex font-inter md:px-[5rem] flex-col lg:flex-row items-center justify-between p-8 bg-[radial-gradient(circle_at_bottom_left,_#37FFF4_-400%,_#ffffff_50%)] bg-[radial-gradient(circle_at_top_left,_#37FFF4_-400%,_#ffffff_70%)]">
            {/* Left Side: FAQs */}
            <div className="lg:w-2/3 w-full space-y-4">
                <h2 className="text-[29.76px] md:text-[40px] font-bold mb-4">FAQ</h2>
                <p className="mb-6  text-[10.92px] md:text-[16px] text-gray-600">
                    Hundreds of thriving businesses and Fortune 500 firms worldwide choose OnEggy Technologies as their DevOps service provider for their mission-critical projects.
                </p>
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 bg-gray-800 text-white"
                        >
                            <span className='text-left md:text-[18.09px] text-[10px]'>{faq.question}</span>
                            <div>
                                <span className="">
                                    {activeIndex === index ? (
                                        // Upward caret (rotated SVG)
                                        <svg
                                            width="18"
                                            height="12"
                                            viewBox="0 0 18 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transform rotate-180"
                                        >
                                            <path
                                                d="M1 1.5L9 10L16.5 1.5"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    ) : (
                                        // Downward caret (original SVG)
                                        <svg
                                            width="18"
                                            height="12"
                                            viewBox="0 0 18 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1.5L9 10L16.5 1.5"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-gray-100 text-gray-800">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                <Image
                    src={faqbg}
                    alt="FAQ Illustration"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default FAQSection;
