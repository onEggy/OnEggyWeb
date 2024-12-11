import React from "react";
import { motion } from "framer-motion";

const EnhancedHowItWorks = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          How It <span className="text-cyan-600">Works</span>
        </h2>

        {/* Image Representation */}
        <div className="flex justify-center">
          <motion.img
            src="/how-it-works-oneggy-oneggy.png" // Replace with your actual image path
            alt="How it works illustration"
            className="max-w-full md:max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedHowItWorks;
