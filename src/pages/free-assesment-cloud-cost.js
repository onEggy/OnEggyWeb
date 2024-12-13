import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
import dynamic from "next/dynamic";
import Sidebar from "./components/sidebar";
import FAQs from "./assesment-components/Faq";
import Testimonials from "./assesment-components/Testimonials";
import BenefitsSection from "./assesment-components/BenefitsSection";
import AboutUsSection from "./assesment-components/AboutUs";
import HowItWorks from "./assesment-components/HowItWorks";
import CustomerSuccessSection from "./assesment-components/CustomerSuccessSection";
import PartnerShowcase from "./components/partnerShowcase";
import SecurityAssurance from "./assesment-components/SecurityAssurance";
import Hero from "./assesment-components/Hero";
import TechLogos from "./assesment-components/TechLogos";
import ServicesSection from "./assesment-components/ServicesSection";
import ContactUs from "./assesment-components/ContactUs";

const EnquiryModal = dynamic(() => import('./components/EnquiryModal'), { ssr: false });

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
            <Hero />
            <TechLogos />
            <AboutUsSection />
            <PartnerShowcase />
            <CustomerSuccessSection />
            <HowItWorks />
            <BenefitsSection />
            <SecurityAssurance />
            <ServicesSection />
            <Testimonials />
            <FAQs />
            <ContactUs />
            <Footer />
            <EnquiryModal />
        </div>
    );
};

export default CloudOptimizationPage;
