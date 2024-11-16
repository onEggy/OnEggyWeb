import { useState, useEffect } from "react";
import Image from "next/image";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setNextUrl(window.location.href);

      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null; // Prevent rendering when modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-[50rem] relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          onClick={closeModal}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 lg:w-5/12 relative">
          <Image
            src="/OnEggyTechnologiesContactImage.png"
            alt="Enquiry illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 lg:w-7/12 p-4 sm:p-6">
          {/* Modal Header */}
          <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-800 mb-4">
            Let’s Work Together
          </h2>

          {/* Form */}
          <form
            action="https://formsubmit.co/ask@oneggy.com"
            method="post"
            className="space-y-4"
          >
            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.oneggy.com/thankyou" />
            <input type="hidden" name="_subject" value="New submission by Popup Form!" />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your phone number"
                required
              />
            </div>

            {/* Service Field */}
            <div>
              <label htmlFor="service" className="block text-gray-700 font-medium mb-1">
                Service Looking for?
              </label>
              <textarea
                id="service"
                name="service"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the service you're looking for"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-black font-semibold py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              style={{
                backgroundColor: "rgb(55 255 244 / var(--tw-bg-opacity))",
              }}
            >
              Connect Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
