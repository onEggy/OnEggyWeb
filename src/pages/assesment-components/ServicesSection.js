import React from "react";

const ServicesSection = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
                {/* Main Heading */}
                <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
                    Elevate Your Business with <span className="text-cyan-600">Our Expertise</span>
                </h2>

                {/* Services Container */}
                <div className="space-y-16">
                    {/* Service 1 */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                        {/* Left Side (Visual) */}
                        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
                            <div className="w-full h-72 bg-cyan-100 rounded-lg flex items-center justify-center">
                                <svg width="250px" height="250px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <title>dev-ops-solid</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="icons_Q2" data-name="icons Q2">
                                            <path d="M46,24A12,12,0,0,0,34,12c-5.2,0-9.5,4.1-11.9,11.4C20.3,28.9,17.3,32,14,32a8,8,0,0,1,0-16h1.2l-1.6,1.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l4.9-5a1.9,1.9,0,0,0,0-2.8l-4.9-5a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L15.2,12H14a12,12,0,0,0,0,24c5.2,0,9.5-4.1,11.9-11.4C27.7,19.1,30.7,16,34,16a8,8,0,0,1,0,16H32.8l1.6-1.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-4.9,5a1.9,1.9,0,0,0,0,2.8l4.9,5a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L32.8,36H34A12,12,0,0,0,46,24Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Right Side (Content) */}
                        <div className="lg:w-1/2">
                            <h3 className="text-4xl font-bold text-cyan-600 mb-4">
                                DevOps Consulting
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Streamline your development processes with cutting-edge CI/CD pipelines,
                                infrastructure automation, and DevOps best practices tailored to your needs.
                            </p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-10">
                        {/* Left Side (Visual) */}
                        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
                            <div className="w-full h-72 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="19" cy="5" r="3" stroke="#1C274C" stroke-width="1.5" />
                                    <path d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 10.8717 2 9.87835 2.02008 9M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C3.02355 3.90538 2.71538 4.4272 2.5 5.0699" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Side (Content) */}
                        <div className="lg:w-1/2">
                            <h3 className="text-4xl font-bold text-green-600 mb-4">
                                Monitoring Services
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ensure real-time performance and reliability with intelligent monitoring
                                solutions tailored to your infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
                        {/* Left Side (Visual) */}
                        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
                            <div className="w-full h-72 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <svg width="250px" height="250px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 13.2222L10.8462 15L15 11M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Side (Content) */}
                        <div className="lg:w-1/2">
                            <h3 className="text-4xl font-bold text-yellow-500 mb-4">
                                Annual Managed Services
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Experience proactive management with our AMS to ensure peak
                                infrastructure performance, scalability, and 24/7 support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;