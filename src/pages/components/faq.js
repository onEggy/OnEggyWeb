import React, { useState } from 'react';

const faqData = [
    {
        question: 'What services does OnEggy Technologies offer?',
        answer:
            'OnEggy Technologies offers comprehensive cloud consulting, DevOps solutions, software development, and IT infrastructure management services designed to support businesses in leveraging cutting-edge technology.',
    },
    {
        question: 'How does OnEggy ensure data security?',
        answer:
            'OnEggy Technologies follows industry-standard security protocols, including data encryption, multi-factor authentication, and regular security audits to ensure the highest level of data protection for our clients.',
    },
    {
        question: 'What industries does OnEggy Technologies specialize in?',
        answer:
            'We specialize in providing solutions for industries such as finance, healthcare, e-commerce, and technology, with a deep understanding of each sector’s specific needs and regulatory requirements.',
    },
    {
        question: 'Does OnEggy provide ongoing support?',
        answer:
            'Yes, OnEggy offers 24/7 technical support and maintenance services to ensure seamless operations and quick resolution of any issues, allowing clients to focus on their core business functions.',
    },
    {
        question: 'How can I become a partner with OnEggy?',
        answer:
            'To explore partnership opportunities, please reach out to our team via the contact form. We will be in touch to discuss potential collaboration opportunities tailored to your expertise and business goals.',
    },
    {
        question: 'What is OnEggy’s approach to cloud migration?',
        answer:
            'OnEggy Technologies offers a comprehensive, phased approach to cloud migration that includes assessment, planning, execution, and optimization. Our team ensures a seamless transition with minimal downtime, tailored to meet the specific needs of each client.',
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-6 md:px-20 bg-white">
            {/* Header */}
            <header className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-green-600 text-sm font-semibold uppercase tracking-wide">Question & Answers</h2>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-500 mt-3 md:text-lg">
                    Have more queries? Our team is just a message away. <a href="/contact" className="text-blue-600 underline">Get in touch here</a> for further assistance.
                </p>
            </header>

            {/* FAQ Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg shadow-sm p-6 cursor-pointer transition-all duration-300 ease-in-out ${openIndex === index ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'
                            }`}
                        onClick={() => toggleOpen(index)}
                    >
                        <div className="flex justify-between items-center">
                            {/* Question */}
                            <h3
                                className={`text-lg leading-tight font-semibold transition-colors duration-300 ${openIndex === index ? 'text-green-600' : 'text-gray-900'
                                    }`}
                            >
                                {faq.question}
                            </h3>

                            {/* Icon */}
                            <span
                                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-600' : 'text-gray-500'
                                    }`}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </span>
                        </div>

                        {/* Answer */}
                        <div
                            className={`mt-4 text-gray-700 transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="leading-relaxed text-sm">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    );
};

export default FaqSection;