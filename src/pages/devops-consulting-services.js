import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";
import QuoteSection from "./components/QuoteSection";
import ProjectLogos from "./home/projectlogos";
import CloudSolutionsSection from "./components/CloudSolutionsSection";
import CloudServices from "./components/cloudservices";
import CloudTestimonials from "./components/cloudTestimonial";
import HowItWorks from "./components/Howitworks";
import FAQSection from "./components/FAQSection";
import GetStarted from "./components/GetStarted";
import FooterDevops from "./components/footer-devops";
import NavbarDevops from "./components/navbar-devops";
import ProjectLogosDevops from "./home/project-logosDevops";
import ToolsAndTech from "./components/ToolsandTech";

const DevOpsConsultingServices = () => {
    const currentPageData = seoData["/privacy-policy"];

    return (
        <div className=" mx-auto">
            <NextSeo
                title={currentPageData.title}
                description={currentPageData.description}
            />
            <NavbarDevops />
            <QuoteSection />
            <ProjectLogosDevops />
            <CloudSolutionsSection />
            <CloudServices />
            <CloudTestimonials />
            <HowItWorks />
            <ToolsAndTech />
            <FAQSection />
            <GetStarted />
            <FooterDevops />
        </div>
    );
};

export default DevOpsConsultingServices;
