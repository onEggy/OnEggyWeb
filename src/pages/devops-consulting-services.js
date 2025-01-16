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
    const lastScrollPositionRef = useRef(0);
    const calConnectRef = useRef(null);

    const handleScrollToCalConnect = () => {
        if (calConnectRef.current) {
            calConnectRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPositionRef.current) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }

            lastScrollPositionRef.current = currentScrollPosition;
        };

        const throttledScrollHandler = handleScroll;

        window.addEventListener("scroll", throttledScrollHandler);

        return () => {
            window.removeEventListener("scroll", throttledScrollHandler);
        };
    }, []);

    return (
        <div className="mx-auto">
            <NextSeo
                title="Expert DevOps & Cloud Consulting Services | OnEggy Technologies"
                description="Streamline your IT operations with OnEggy Technologies expert DevOps and Cloud Consulting services. Achieve faster deployments, enhanced scalability, and cost efficiency with our tailored solutions for businesses of all sizes. Contact us today!"
                canonical="https://www.oneggy.com/devops-consulting-services"
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "DevOps Consulting Services, Cloud Consulting Services, DevOps and Cloud Solutions, AWS DevOps Consulting, Kubernetes Consulting Services, Cloud Optimization Experts, CI/CD Pipeline Implementation, DevOps Automation Services, Cloud Scalability Solutions, Infrastructure as Code Experts, OnEggy DevOps Services, Managed Cloud Services",
                    },
                ]}
                openGraph={{
                    title: "Expert DevOps & Cloud Consulting Services | OnEggy Technologies",
                    description:
                        "Streamline your IT operations with OnEggy Technologies expert DevOps and Cloud Consulting services. Achieve faster deployments, enhanced scalability, and cost efficiency with our tailored solutions for businesses of all sizes.",
                    url: "https://www.oneggy.com/devops-consulting-services",
                    type: "website",
                }}
            />
            <div
                className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <NavbarDevops onScrollToCalConnect={handleScrollToCalConnect} isNavbarVisible={isNavbarVisible} />
            </div>
            <QuoteSection />
            <ProjectLogosDevops />
            <CloudSolutionsSection />
            <CloudServices />
            <ServicesMobile />
            <CloudTestimonials />
            <HowItWorks />
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
