import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { ServicesHero } from "@/components/services/services-hero";
import { servicesData } from "@/lib/services-data";

const ServicesGrid = dynamic(() => import("@/components/services/services-grid").then((mod) => mod.ServicesGrid));
const ArchitectureVisuals = dynamic(() => import("@/components/services/architecture-visuals").then((mod) => mod.ArchitectureVisuals));
const EngagementModels = dynamic(() => import("@/components/services/engagement-models").then((mod) => mod.EngagementModels));
const ServicesFaqs = dynamic(() => import("@/components/services/services-faqs").then((mod) => mod.ServicesFaqs));
const CtaBlock = dynamic(() => import("@/components/common/cta-block").then((mod) => mod.CtaBlock));

export const metadata: Metadata = {
  title: "Cloud, DevOps & Software Engineering Services | OnEggy",
  description: "Browse OnEggy's professional engineering services catalog: AWS managed cloud, Kubernetes, DevOps, CI/CD pipelines, SRE support, plus full-stack web, mobile, SaaS, and API software development.",
  alternates: {
    canonical: "https://www.oneggy.com/services",
  },
};

export default function ServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OnEggy Technologies Cloud & Software Engineering Services",
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "url": `https://www.oneggy.com/services/${service.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneggy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.oneggy.com/services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative">
        {/* 1. Services Hero Section */}
        <ServicesHero />

        {/* 2. Services Cards Grid Section */}
        <ServicesGrid />

        {/* 3. AWS secure multi-account Landing Zone Visual Section */}
        <ArchitectureVisuals />

        {/* 4. Pricing / Engagement Models Section */}
        <EngagementModels />

        {/* 5. Services Operations FAQs Section */}
        <ServicesFaqs />

        {/* 6. Final Conversion CTA Section */}
        <div className="py-16 sm:py-20 border-t border-border">
          <CtaBlock
            title="Ready to automate and scale your architecture?"
            description="Schedule a free 30-minute cloud-native engineering assessment with our senior architect to discuss your business requirements."
            btnText="Book Free Consultation"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}

