import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Headline from "../components/headline";

const contactUs = () => {
  const title = "Contact Us";
  const desc = "Let's talk about your digital services requirements.";

  const [selectedOption, setSelectedOption] = useState("sayHi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state for button
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `${selectedOption} OnEggy Contact WebPage Submission`,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Request sent successfully! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setSuccessMessage("There was an issue. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000); // Hide success message after 3 seconds
    }
  };

  return (
    <div id="contactUs" className="px-4 sm:px-0">
      <Headline
        title={title}
        desc={desc}
        titleCss={"md:font-bold md:text-4xl"}
        descCss={"md:w-[18rem] mt-7 md:ml-16"}
      />
      <div className="sm:mt-20 mt-10 bg-offWhite p-6 sm:p-16 rounded-3xl flex relative overflow-hidden">
        <div className="sm:w-7/12 sm:p-10 w-full">
          <div className="flex justify-center sm:justify-start items-center space-x-4 mb-8">
            <label className="flex">
              <input
                type="radio"
                value="sayHi"
                checked={selectedOption === "sayHi"}
                onChange={handleOptionChange}
                className="mr-2 w-6 h-6"
              />
              <div>Say Hi</div>
            </label>
            <label className="flex">
              <input
                type="radio"
                value="getQuote"
                checked={selectedOption === "getQuote"}
                onChange={handleOptionChange}
                className="mr-2 ml-8 sm:ml-0 w-6 h-6"
              />
              <div>Get a Quote</div>
            </label>
          </div>
          <form className="sm:w-10/12" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium">
                Mobile Number*
              </label>
              <input
                type="text"
                id="mobileNumber"
                placeholder="+919811133005"
                name="mobileNumber"
                minLength={10}
                maxLength={15}
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="sm:mb-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Describe your service you're looking for"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl w-full hidden sm:block"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="hidden sm:block">
          <img
            src="/home/contactUs/Illustration1.svg"
            alt="Illustration"
            className="absolute -right-[300px] top-[13px]"
          />
        </div>
      </div>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 left-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl w-full sm:relative sm:hidden"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
};

export default contactUs;
