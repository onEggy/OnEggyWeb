import React, { useState } from "react";
import Headline from "../components/headline";
import { motion, AnimatePresence } from "framer-motion";

const contactUs = () => {
  const title = "Contact Us";
  const desc = "Let's talk about your digital services requirements.";

  const [selectedOption, setSelectedOption] = useState("sayHi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

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
          _subject: `${selectedOption} OnEggy Kubernetes Page Submission`,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Request sent successfully! We'll contact you shortly.");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setSuccessMessage("There was an issue. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="px-4 sm:px-0">
      <Headline title={title} desc={desc} />
      <div className="sm:mt-20 mt-10 bg-offWhite p-14 rounded-3xl flex relative overflow-hidden">
        <div className="sm:w-11/12 w-full ">
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
          <form className="sm:w-3/5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="sm:mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
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
            src="../home/contactUs/illustration.png"
            alt="illustration"
            width={494}
            height={394}
            className="absolute -right-[232px] top-[63px]"  
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
        onClick={handleSubmit}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
};

export default contactUs;
