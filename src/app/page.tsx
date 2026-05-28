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
import { ClientMarquee } from "@/components/home/client-marquee";
import { StatusBoard } from "@/components/home/status-board";
import { RoiCalculator } from "@/components/home/roi-calculator";
import { ScalingJourney } from "@/components/home/scaling-journey";
import { AssessmentCta } from "@/components/home/assessment-cta";


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
    "logo": "https://www.oneggy.com/logov1.png",
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

        {/* Client Logos Motion Marquee */}
        <ClientMarquee />

        {/* 2. Systems Uptime Status board */}
        <StatusBoard />

        {/* 3. Services Showcase Section */}
        <ServicesShowcase />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Cloud Cost Savings ROI Calculator */}
        <RoiCalculator />

        {/* 6. Technologies We Use Section */}
        <TechStack />

        {/* 7. Startup Scaling Journey Milestones */}
        <ScalingJourney />

        {/* 8. Process Timeline Section */}
        <ProcessTimeline />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. FAQ Accordion Section */}
        <FaqAccordion />

        {/* 11. Cloud health assessment lead magnet */}
        <AssessmentCta />

        {/* 12. Final CTA Section */}
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
