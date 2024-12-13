import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        companyName: "",
        cloudProvider: "",
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
                    _subject: "Free Assessment Form Submission",
                }),
            });

            if (response.ok) {
                setSuccessMessage("Your request has been submitted successfully!");
                setFormData({
                    fullName: "",
                    email: "",
                    companyName: "",
                    cloudProvider: "",
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
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 text-grey-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
                >
                    {/* Text Section */}
                    <div className="text-center md:text-left md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Unlock Savings with{" "}
                            <span className="text-cyan-600">Cloud Cost Optimization</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Take control of your cloud spending. Our experts will help you
                            identify waste, improve efficiency, and maximize ROI—at no cost.
                        </p>
                        <a
                            href="#free-assessment-form"
                            className="inline-block bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-cyan-800 transition"
                        >
                            Book Your Free Assessment
                        </a>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-1/2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Request Your Free Assessment
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Fill out the form and our specialists will contact you.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                            <button
                                type="submit"
                                className="w-full bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
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
        </div>
    );
};

export default Hero;
