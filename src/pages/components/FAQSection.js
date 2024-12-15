import { useState } from 'react';
import Image from 'next/image';
import faqbg from '../../../public/faqbg.png';


const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: 'How Do I Get An Appointment For Consultations?', answer: 'You can book an appointment via our website or call our helpline.' },
        { question: 'How Helpful Is An Online Janam Kundli?', answer: 'An online Janam Kundli provides insights based on your birth details.' },
        { question: 'Do I Need Any Prior Knowledge Of Astrology To Enroll?', answer: 'No prior knowledge is required to start your journey.' },
        { question: 'What Is The Course Duration & Is It Offered In Multiple Languages?', answer: 'The course lasts 3 months and is available in 5 languages.' },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex md:px-[5rem] flex-col lg:flex-row items-center justify-between p-8 bg-[radial-gradient(circle_at_top_left,_#37FFF4_-500%,_#ffffff_70%)]">
            {/* Left Side: FAQs */}
            <div className="lg:w-2/3 w-full space-y-4">
                <h2 className="text-[29.76px] md:text-[40px] font-bold mb-4">FAQ</h2>
                <p className="mb-6  text-[10.92px] md:text-[16px] text-gray-600">
                    Hundreds of thriving businesses and Fortune 500 firms worldwide choose CONTUS Tech as their DevOps service provider for their mission-critical projects.
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
