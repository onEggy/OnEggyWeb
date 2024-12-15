import Image from 'next/image';
import ajeeb from '../../../public/ajeebthing.svg';
import tick from '../../../public/tick.svg';

export default function QuoteSection() {
    return (
        <div className=" py-12 bg-[radial-gradient(circle_at_top_left,_#37FFF4_-500%,_#ffffff_70%)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Left Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[62.22px] text-left lg:text-left font-bold text-[#191A15] mb-4">
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
                            <li className="flex text-[16px] sm:text-[18px] md:text-[22.7px] font-bold items-center text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                Agile Development
                            </li>
                            <li className="flex text-[16px] sm:text-[18px] md:text-[22.7px] font-bold items-center text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                Faster Onboarding
                            </li>
                            <li className="flex text-[16px] sm:text-[18px] md:text-[22.7px] font-bold items-center text-gray-800">
                                <div className="w-6 h-6 mr-2">
                                    <Image src={tick} alt="tick" width={20} height={20} />
                                </div>
                                97% Retention Rate
                            </li>
                            <li className="flex text-[16px] sm:text-[18px] md:text-[22.7px] font-bold items-center text-gray-800">
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
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Mobile No. *"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            />
                            <select
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                                required
                            >
                                <option value="" disabled selected>
                                    Looking for *
                                </option>
                                <option value="cloud-services">Cloud Services</option>
                                <option value="devops">DevOps</option>
                            </select>
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37FFF4]"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-[#37FFF4] p-3 rounded-md font-bold text-gray-900 hover:bg-teal-300 transition"
                            >
                                Submit
                            </button>
                        </form>
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
