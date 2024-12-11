import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is cloud cost optimization?",
      answer:
        "Cloud cost optimization involves analyzing cloud spending, identifying unused resources, and implementing strategies to reduce costs while improving efficiency.",
    },
    {
      question: "How does the free assessment work?",
      answer:
        "Our experts will analyze your cloud account with read-only access, prepare a comprehensive cost analysis report, and provide actionable recommendations—all free of charge.",
    },
    {
      question: "Which cloud providers do you support?",
      answer:
        "We support major cloud providers like AWS, Azure, Google Cloud, and other platforms such as Kubernetes and Terraform.",
    },
    {
      question: "What happens after the assessment?",
      answer:
        "Post-assessment, we offer paid services to implement the changes, ensuring maximum cost efficiency and infrastructure optimization.",
    },
    {
      question: "Is my cloud account data secure?",
      answer:
        "Yes, we use read-only access and follow strict confidentiality protocols to ensure the security of your data.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 border rounded-lg transition-all ${
                openIndex === index ? "border-cyan-500 bg-white shadow-lg" : "border-gray-200 bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full"
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-cyan-500 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-600"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
