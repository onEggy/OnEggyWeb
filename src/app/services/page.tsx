import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ArchitectureVisuals } from "@/components/services/architecture-visuals";
import { EngagementModels } from "@/components/services/engagement-models";
import { ServicesFaqs } from "@/components/services/services-faqs";
import { CtaBlock } from "@/components/common/cta-block";

export const metadata: Metadata = {
  title: "Cloud-Native & DevOps Engineering Services | OnEggy",
  description: "Browse OnEggy's professional engineering services catalog: AWS managed resources, Kubernetes, DevOps, CI/CD pipelines, SRE support, and Full-Stack Next.js development.",
  alternates: {
    canonical: "https://www.oneggy.com/services",
  },
};

export default function ServicesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OnEggy Technologies Cloud & Software Engineering Services",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "AWS Cloud Managed Services",
        "url": "https://www.oneggy.com/services/aws-cloud-managed-services"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "DevOps Consulting Services",
        "url": "https://www.oneggy.com/services/devops-consulting"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kubernetes Consulting & Management",
        "url": "https://www.oneggy.com/services/kubernetes"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="relative overflow-hidden min-h-screen">
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
        <div className="py-12 border-t border-border/40">
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
