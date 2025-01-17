import React, { useState, useEffect, useRef } from "react";
import seoData from "../../public/data/seo-data.json";
import Head from "next/head";
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

    const schemaMetadata = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Expert DevOps & Cloud Consulting Services | OnEggy Technologies",
        "description":
            "Streamline your IT operations with OnEggy Technologies expert DevOps and Cloud Consulting services. Achieve faster deployments, enhanced scalability, and cost efficiency with our tailored solutions for businesses of all sizes.",
        "url": "https://www.oneggy.com/devops-consulting-services",
        "inLanguage": "en",
        "isPartOf": {
            "@type": "WebSite",
            "name": "OnEggy Technologies",
            "url": "https://www.oneggy.com",
        },
        "author": {
            "@type": "Organization",
            "name": "OnEggy Technologies",
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.oneggy.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    const ratingSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expert DevOps & Cloud Consulting Services | OnEggy Technologies",
        "description": "Streamline your IT operations with OnEggy Technologies expert DevOps and Cloud Consulting services. Achieve faster deployments, enhanced scalability, and cost efficiency with our tailored solutions for businesses of all sizes.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        },
        "provider": {
          "@type": "Organization",
          "name": "OnEggy Technologies",
          "url": "https://www.oneggy.com"
        }
      };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What Are DevOps Cloud Consulting Services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DevOps Cloud Consulting services involve a set of practices and tools that streamline your development, operations, and infrastructure. OnEggy Technologies helps you automate processes, integrate workflows, and achieve seamless cloud scalability with expertise in AWS, Azure, and GCP."
                }
            },
            {
                "@type": "Question",
                "name": "How Can DevOps Help My Business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DevOps improves collaboration between development and operations teams, enabling faster releases and higher quality. By leveraging cloud platforms, we ensure enhanced scalability, security, and optimized infrastructure to boost business performance and reduce costs."
                }
            },
            {
                "@type": "Question",
                "name": "What Cloud Platforms Do You Work With?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in AWS, Azure, and Google Cloud. Our experts help you choose the best platform tailored to your business needs, ensuring optimal performance, cost efficiency, and scalability."
                }
            },
            {
                "@type": "Question",
                "name": "How Do You Ensure Security In Cloud Implementations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OnEggy Technologies follows best security practices, including strong access controls, encryption, and regular security audits. We ensure your cloud infrastructure is secure, resilient, and compliant with industry standards."
                }
            },
            {
                "@type": "Question",
                "name": "What Is The Process For Engaging With OnEggy Technologies For DevOps Cloud Consulting?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our process starts with understanding your specific needs and business objectives. We then create a customized DevOps roadmap, implement cloud solutions, automate workflows, and ensure continuous monitoring and improvements to maximize efficiency and scalability."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Provide Ongoing Support After Implementation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide ongoing support to monitor and optimize your cloud infrastructure, address any issues, and implement necessary updates. Our team ensures continuous improvements for enhanced performance and security as your business evolves."
                }
            }
        ]
    };

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
                            "DevOps Consulting Services, Cloud Consulting Services, DevOps and Cloud Solutions, AWS DevOps Consulting, AWS Cloud Managed Services, AWS Managed Services, Azure Managed Services, Google Cloud Managed Services, Kubernetes Consulting Services, Kubernetes Managed Services, Kubernetes Consulting Services, Cloud Optimization Experts, CI/CD Pipeline Implementation, DevOps Automation Services, Cloud Scalability Solutions, Terraform Experts, Terraform Consulting Services, Infrastructure as Code Experts, OnEggy DevOps Services, Managed Cloud Services",
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
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMetadata) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
                />
            </Head>
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
