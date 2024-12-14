import React from "react";
import seoData from "../../public/data/seo-data.json";
import { NextSeo } from "next-seo";
import QuoteSection from "./components/QuoteSection.js";
import CloudSolutionsSection from "./components/CloudSolutionsSection.js";
import CloudServices from "./components/cloudservices.js";
import CloudTestimonials from "./components/cloudTestimonial.js";
import HowItWorks from "./components/Howitworks.js";
import FAQSection from "./components/FAQSection.js";
import GetStarted from "./components/GetStarted.js";
import FooterDevops from "./components/footer-devops.js";
import NavbarDevops from "./components/navbar-devops.js";
import ProjectLogosDevops from "./home/project-logosDevops.js";
import ToolsAndTech from "./components/ToolsandTech.js";
import NewSection from "./home/eknayasectionekdum";

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
            <NewSection />
            {/* <ToolsAndTech /> */}
            <FAQSection />
            <GetStarted />
            <FooterDevops />
        </div>
    );
};

export default DevOpsConsultingServices;
