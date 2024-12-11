import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Sidebar from "./components/sidebar";
import FAQs from "./assesment-components/Faq";
import Testimonials from "./assesment-components/Testimonials";
import BenefitsSection from "./assesment-components/BenefitsSection";
import AboutUsSection from "./assesment-components/AboutUs";
import HowItWorks from "./assesment-components/HowItWorks";

// Import marquee library
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

// Import icons from simple-icons
import {
    siAmazonwebservices,
    siDigitalocean,
    siHeroku,
    siOpenstack,
    siPythonanywhere,
    siGooglecloud,
    siKubernetes,
    siTerraform,
    siDocker,
    siGrafana,
    siPrometheus,
    siRedis,
    siElasticsearch,
    siMysql,
    siMongodb
} from "simple-icons";

const techIcons = [
    { icon: siAmazonwebservices, label: "AWS" },
    { icon: siDigitalocean, label: "DigiOcean" },
    { icon: siHeroku, label: "Heroku" },
    { icon: siOpenstack, label: "Openstack" },
    { icon: siPythonanywhere, label: "Python" },
    { icon: siGooglecloud, label: "Google Cloud" },
    { icon: siKubernetes, label: "K8S" },
    { icon: siTerraform, label: "Terraform" },
    { icon: siGrafana, label: "Grafana" },
    { icon: siPrometheus, label: "Promet." },
    { icon: siRedis, label: "Redis" },
    { icon: siDocker, label: "Docker" },
    { icon: siElasticsearch, label: "ELK" },
    { icon: siMysql, label: "MySQL" },
    { icon: siMongodb, label: "MongoDB" }
];

const CloudOptimizationPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 bg-white-50 text-black-900">
            {/* SEO Config */}
            <NextSeo
                title="Free Cloud Cost Optimization Assessment"
                description="Optimize your cloud costs with a free assessment. Identify cost-saving opportunities, reduce waste, and maximize ROI."
            />
            <Head>
                <meta
                    name="keywords"
                    content="AWS cloud cost optimization, Free AWS cost assessment, Optimize AWS expenses, AWS cost management services, Reduce AWS billing, Save money on AWS cloud, Free AWS cost optimization consultation, AWS cost-saving tips, Detailed AWS usage analysis, Expert AWS cost reduction services, Start saving on AWS costs, Best AWS cost optimization strategies, Claim free AWS assessment, Cloud cost optimization for enterprises, AWS expense management for startups, cloud cost optimization"
                />
            </Head>

            <Navbar />
            <Sidebar />

            {/* Hero Section */}
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
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company Inc."
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Cloud Provider
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    >
                                        <option>AWS</option>
                                        <option>Azure</option>
                                        <option>Google Cloud</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* Tech Logos Marquee */}
            <div className="py-12 bg-white">
                <h2 className="text-center text-4xl font-semibold text-gray-800 mb-10">
                    We Optimize Across Major Platforms
                </h2>
                <Marquee gradient={true} speed={40} className="overflow-hidden" autoFill={true} gradientWidth={20}>
                    <div className="flex items-center justify-center space-x-8 px-4">
                        {techIcons.map(({ icon, label }, index) => {
                            if (!icon || !icon.hex || !icon.path) {
                                console.warn(`Missing properties for icon: ${label}`);
                                return null;
                            }
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center w-24 h-24 p-4 border border-gray-200 shadow-sm hover:shadow-lg rounded-lg transition-transform transform"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill={`#${icon.hex}`}
                                        className="w-20 h-20"
                                    >
                                        <path d={icon.path} />
                                    </svg>
                                    <span className="mt-3 text-sm justify-center font-medium text-gray-800">
                                        {label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </Marquee>
            </div>

            <AboutUsSection />

            <HowItWorks />

            <BenefitsSection />

            {/* Services Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
                    {/* Main Heading */}
                    <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
                        Elevate Your Business with Our Expertise
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

            <Testimonials />
            <FAQs />


            {/* Lead Capture Form */}
            <div
                id="free-assessment-form"
                className="py-16 px-6 md:px-12 lg:px-20"
            >
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
                            Let’s explore how we can help optimize your cloud costs and improve your
                            operational efficiency. Schedule a free 30-minute session with our cloud experts
                            to get started today!
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Company Inc."
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Cloud Provider
                                </label>
                                <select
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
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
                                    placeholder="Tell us about your challenges or requirements"
                                    rows="4"
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
                            >
                                Request Assessment
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default CloudOptimizationPage;
