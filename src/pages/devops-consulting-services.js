import React, { useState, useEffect } from "react";
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

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }

            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollPosition]);

    return (
        <div className="mx-auto">
            <NextSeo
                title={currentPageData.title}
                description={currentPageData.description}
            />
            {/* Pass a class to hide/show the navbar */}
            <div className={`fixed top-0 w-full  z-50 transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <NavbarDevops />
            </div>
            <QuoteSection />
            <ProjectLogosDevops />
            <CloudSolutionsSection />
            <CloudServices />
            <CloudTestimonials />
            <HowItWorks />
            <NewSection />
            <FAQSection />
            <GetStarted />
            <FooterDevops />
        </div>
    );
};

export default DevOpsConsultingServices;
