import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Reduce Cloud Costs",
    description: "Achieve up to 30% savings on cloud expenditures with optimized infrastructure.",
    icon: (
        <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
  },
  {
    title: "Maximize Cloud Efficiency",
    description: "Optimize for scalability, performance, and seamless operations.",
    icon: (
        <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 9C19.3529 9 17.8917 9.79647 16.9808 11.0253M21 6C18.5797 6 16.4104 7.07479 14.9434 8.77313M21 3C17.1326 3 13.7313 4.99586 11.77 8.01376M11.77 8.01376C9.72698 8.16181 8.00348 9.48869 7.25 11.25C4.7 11.6562 3 13.7572 3 16.0315C3 18.7755 5.28335 21 8.1 21L15.75 21C18.0972 21 20 19.1279 20 16.8185C20 15.1039 18.951 13.5202 17.45 12.875C17.4116 12.2181 17.2475 11.5941 16.9808 11.0253M11.77 8.01376C11.8958 8.00465 12.0229 8 12.151 8C13.1755 8 14.1323 8.28298 14.9434 8.77313M14.9434 8.77313C15.8305 9.30914 16.5435 10.0929 16.9808 11.0253" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
  },
  {
    title: "Detailed Assessments",
    description: "Receive actionable insights with a tailored assessment for your business.",
    icon: (
        <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C18.8381 8.24853 19.4623 8.60648 20 9.06141" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M10 19.8L11.1429 21L14 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
  },
];

const FreeAssessmentCTA = {
  title: "Start Your Free Assessment",
  description:
    "Take advantage of our free cloud optimization assessment to discover how you can save costs, improve efficiency, and maximize your ROI. Let’s transform your cloud strategy today!",
  buttonText: "Get Started",
};

const BenefitsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-20"
      >
        {/* Benefits Section */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Why Optimize Your Cloud?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cloud cost optimization is not just about saving money, It's about achieving maximum efficiency and scalability for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Free Assessment CTA */}
        <div className="bg-cyan-600 text-white py-16 px-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left md:w-3/4">
              <h2 className="text-3xl font-bold mb-4">{FreeAssessmentCTA.title}</h2>
              <p className="text-lg">{FreeAssessmentCTA.description}</p>
            </div>
            <div className="text-center">
              <a
                href="#free-assessment-form"
                className="inline-block bg-white text-cyan-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                {FreeAssessmentCTA.buttonText}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
