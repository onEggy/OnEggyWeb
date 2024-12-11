import React from "react";
import { motion } from "framer-motion";

const CustomerSuccessSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-semibold text-gray-900 mb-6 leading-tight"
        >
          Reduced Cloud Costs by <span className="text-cyan-600">45%</span>
        </motion.h2>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-700 mb-10 leading-relaxed"
        >
          Discover how our team helped an enterprise client reduce their AWS
          expenditure by 45% while maintaining optimal performance and
          scalability. Our expert analysis and tailored strategies ensure cost
          efficiency without compromising quality.
        </motion.p>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <img
            src="/aws-cost-reduce.png" // Replace with the actual image path
            alt="AWS Cloud Cost Optimization"
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          />
          {/* Floating Highlight */}
          {/* <div className="absolute top-5 left-5 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
            Success Story
          </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomerSuccessSection;
