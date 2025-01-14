import { useState } from "react";
import Image from "next/image";
import ajeeb from "../../../public/ajeebthing.svg";
import tick from "../../../public/tick.svg";

export default function QuoteSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        lookingFor: "",
        message: "",
        url: "",
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    lookingFor: formData.lookingFor,
                    message: formData.message,
                    url: "devops page wala URL https://oneggy.com/devops-consulting-services",
                    _subject: "DevOps Related Query",
                    _next: "https://www.oneggy.com/thankyou",
                }),
            });

            if (response.ok) {
                setSuccessMessage("Your query has been submitted successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    lookingFor: "",
                    message: "",
                });
            } else {
                setSuccessMessage("There was an error. Please try again.");
            }
        } catch (error) {
            setSuccessMessage("There was an error. Please try again.");
        } finally {
            setIsLoading(false);
            setTimeout(() => setSuccessMessage(""), 3000); // Clear success message after 3 seconds
        }
    };

    return (
        <div className="py-[100px] font-inter bg-[radial-gradient(circle_at_top_left,_#37FFF4_-500%,_#ffffff_70%)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Left Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[62.22px] font-bold text-[#191A15] mb-4">
                            #1 DevOps Company for Cloud Services.
                        </h1>
                        <Image
                            src={ajeeb}
                            width={588}
                            height={500}
                            alt="Cloud Services"
                            className="mb-4 mx-auto lg:mx-0"
                        />
                        <p className="text-[16px] sm:text-[18px] md:text-[22.7px] text-gray-700 mb-6 text-center lg:text-left">
                            Secure and managed cloud solutions that drive the outcome-based modernization you need.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-center text-[16px] sm:text-[18px] md:text-[22.7px] font-bold text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                Agile Development
                            </li>
                            <li className="flex items-center text-[16px] sm:text-[18px] md:text-[22.7px] font-bold text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                Faster Onboarding
                            </li>
                            <li className="flex items-center text-[16px] sm:text-[18px] md:text-[22.7px] font-bold text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                97% Retention Rate
                            </li>
                            <li className="flex items-center text-[16px] sm:text-[18px] md:text-[22.7px] font-bold text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                100% Success in Deployment
                            </li>
                        </ul>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-2 bg-[#222938] text-white p-6 rounded-[30px] shadow-lg">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-4">
                            Get Quote Instantly
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Mobile No. *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <select
                                name="lookingFor"
                                value={formData.lookingFor}
                                onChange={handleChange}
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            >
                                <option value="" disabled>
                                    Looking for *
                                </option>
                                <option value="cloud-services">Cloud Services</option>
                                <option value="devops">DevOps</option>
                            </select>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#37FFF4] p-3 rounded-md font-bold text-gray-900 hover:bg-teal-300 transition"
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                        {successMessage && (
                            <p className="text-center text-sm mt-4">{successMessage}</p>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-[#191A15]">
                    <p className="text-[24px] sm:text-[32px] md:text-[40px] font-semibold">
                        More than 25,000 teams use Collabs
                    </p>
                </div>
            </div>
        </div>
    );
}
