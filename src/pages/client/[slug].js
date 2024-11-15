import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import PartnerShowcase from "../components/partnerShowcase";
import ManagedServices from "../components/blogServicePromote";
import ContactUs from "../home/contactUs";
import Image from "next/image";
import Head from "next/head";
import AuthorBio from "../components/blogAuthor";
import MeetTheFounder from "../components/meetFounder";
import clientData from "../../../public/data/clientPage.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTasks, faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const EnquiryModal = dynamic(() => import("../components/EnquiryModal"), { ssr: false });

const getIconForMetric = (metric) => {
    if (metric.toLowerCase().includes("growth")) return faArrowUp;
    if (metric.toLowerCase().includes("completion")) return faCheckCircle;
    if (metric.toLowerCase().includes("time")) return faClock;
    if (metric.toLowerCase().includes("tasks")) return faTasks;
    return faCheckCircle;
};

const CaseStudy = ({ caseStudy }) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oneggy.com/';
    if (!caseStudy) return <div>Case study not found</div>;

    useEffect(() => {
        document.title = `${caseStudy.title} - Case Study`;
    }, [caseStudy]);

    return (
        <>
            {/* SEO Metadata */}
            <NextSeo
                title={caseStudy.title}
                description={caseStudy.metaDescription || caseStudy.description}
                openGraph={{
                    title: caseStudy.title,
                    description: caseStudy.metaDescription || caseStudy.description,
                    images: [{ url: caseStudy.image, alt: `${caseStudy.company} Case Study` }],
                }}
            />

            {/* Custom Meta Tags */}
            <Head>
                <meta name="keywords" content={caseStudy.keywords?.join(", ") || ""} />
                <link
                    rel="canonical"
                    href={`${baseUrl}service/${props?.['meta-title-slug']}`}
                />
            </Head>

            {/* Main Page Layout */}
            <Navbar />
            <Sidebar />

            <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 my-12 space-y-16">
                {/* Title Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        {caseStudy.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8">
                        {caseStudy.company}
                    </h2>
                </header>

                {/* Featured Image */}
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
                    <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.company} Case Study Image`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 transform hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Summary Section */}
                <section className="text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
                    <p className="animate-fadeIn">{caseStudy.summary}</p>
                </section>

                {/* Content Section */}
                <section className="prose prose-lg text-gray-800 mx-auto leading-relaxed mb-20">
                    {caseStudy.content}
                </section>

                {/* Key Metrics */}
                {caseStudy.keyMetrics && (
                    <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-md my-10 mx-auto max-w-5xl">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Key Metrics</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
                            {caseStudy.keyMetrics.map((metric, index) => (
                                <li
                                    key={index}
                                    className="flex items-center space-x-4 bg-white rounded-md shadow p-6 transition-transform transform hover:scale-105"
                                    aria-label={`Metric: ${metric}`}
                                >
                                    <FontAwesomeIcon icon={getIconForMetric(metric)} className="text-blue-600 text-2xl" />
                                    <span>{metric}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Challenges and Solutions */}
                <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
                    {caseStudy.challenges && (
                        <section className="p-8 bg-white border-l-4 border-blue-500 rounded-lg shadow-sm" role="region">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Challenges</h3>
                            <p className="text-gray-700 leading-relaxed">{caseStudy.challenges}</p>
                        </section>
                    )}
                    {caseStudy.solutions && (
                        <section className="p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-sm" role="region">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Solutions</h3>
                            <p className="text-gray-700 leading-relaxed">{caseStudy.solutions}</p>
                        </section>
                    )}
                </div>

                {/* Conclusion Section */}
                {caseStudy.conclusion && (
                    <section className="bg-gray-50 p-8 rounded-lg shadow-md max-w-4xl mx-auto my-20" role="region">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Conclusion</h3>
                        <p className="text-gray-700 leading-relaxed text-center">{caseStudy.conclusion}</p>
                    </section>
                )}

                {/* Testimonials Section */}
                {caseStudy.testimonials && (
                    <div className="my-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Testimonials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {caseStudy.testimonials.map((testimonial, index) => (
                                <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200" role="article">
                                    <p className="text-gray-800 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center space-x-4">
                                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                                        <div className="text-gray-500 text-sm">{testimonial.position}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Footer Section */}
            <div className="bg-cover bg-right max-w-7xl mx-auto">
                <MeetTheFounder />
                <PartnerShowcase />
                <ManagedServices />
                <ContactUs />
                <Footer />
            </div>
            <EnquiryModal />
        </>
    );
};

export default CaseStudy;

export async function getStaticPaths() {
    const paths = clientData.map((caseStudy) => ({ params: { slug: caseStudy.slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const caseStudy = clientData.find((cs) => cs.slug === params.slug);
    return { props: { caseStudy: caseStudy || null } };
}
