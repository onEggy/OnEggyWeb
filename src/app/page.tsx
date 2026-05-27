import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TechStack } from "@/components/home/tech-stack";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Testimonials } from "@/components/home/testimonials";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { CtaBlock } from "@/components/common/cta-block";

export const metadata: Metadata = {
  title: "OnEggy Technologies | Cloud-Native Engineering & DevOps Consulting",
  description: "Modern cloud-native engineering partner specializing in AWS Cloud, Kubernetes infrastructure orchestration, DevOps automation, and high-performance digital apps.",
  alternates: {
    canonical: "https://www.oneggy.com",
  },
};

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OnEggy Technologies",
    "url": "https://www.oneggy.com",
    "logo": "https://www.oneggy.com/logo.png",
    "sameAs": [
      "https://github.com/onEggy",
      "https://linkedin.com/company/oneggy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@oneggy.com",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="relative overflow-hidden min-h-screen">
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. Services Showcase Section */}
        <ServicesShowcase />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. Technologies We Use Section */}
        <TechStack />

        {/* 5. Process Timeline Section */}
        <ProcessTimeline />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. FAQ Accordion Section */}
        <FaqAccordion />

        {/* 8. Final CTA Section */}
        <div className="py-12 border-t border-border/40">
          <CtaBlock
            title="Ready to automate and scale your cloud infrastructure?"
            description="Talk to our senior cloud architects today to build secure platforms, slash monthly waste, and configure zero-downtime releases."
            btnText="Book Free Consultation"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
