import React, { useState, useEffect, useRef } from "react";
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
import ServicesMobile from "./components/cloudservicesMobile.jsx";
import CalConnect from "./components/calConnect.jsx";

const DevOpsConsultingServices = () => {
    const currentPageData = seoData["/privacy-policy"];

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    // Create a ref for the CalConnect section
    const calConnectRef = useRef(null);

    const handleScrollToCalConnect = () => {
        if (calConnectRef.current) {
            // This will smoothly scroll to the CalConnect section
            calConnectRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                setIsNavbarVisible(false); // Scrolling down
            } else {
                setIsNavbarVisible(true); // Scrolling up
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
            <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}>
                {/* Pass the scroll handler to NavbarDevops */}
                <NavbarDevops onScrollToCalConnect={handleScrollToCalConnect} />
            </div>
            <QuoteSection />
            <ProjectLogosDevops />
            <CloudSolutionsSection />
            <CloudServices />
            <ServicesMobile />
            <CloudTestimonials />
            <HowItWorks />
            {/* Attach ref to the CalConnect component */}
            <div ref={calConnectRef}>
                <CalConnect />
            </div>
            <NewSection />
            <FAQSection />
            <GetStarted />
            <FooterDevops />
        </div>
    );
};

export default DevOpsConsultingServices;
