import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    cloudProvider: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ask@oneggy.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: "Cloud Cost Assessment Form Submission",
        }),
      });

      if (response.ok) {
        setSuccessMessage("Your request has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          cloudProvider: "",
          message: "",
        });
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div id="free-assessment-form" className="py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10"
      >
        {/* Left Section - Call to Action */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule 30-Mins Quickly with Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Let’s explore how we can help optimize your cloud costs and improve
            your operational efficiency. Schedule a free 30-minute session with
            our cloud experts to get started today!
          </p>
          <a
            href="https://www.cal.com/oneggy-aakash-sharma/30min"
            target="_blank"
            className="inline-block bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-cyan-700 transition"
          >
            Schedule a Free Meeting
          </a>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get Your Free Cloud Cost Assessment
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Inc."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cloud Provider
              </label>
              <select
                name="cloudProvider"
                value={formData.cloudProvider}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select</option>
                <option>AWS</option>
                <option>Azure</option>
                <option>Google Cloud</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your challenges or requirements"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Request Assessment"}
            </button>
          </form>
          <AnimatePresence>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
              >
                {successMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
