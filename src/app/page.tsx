import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";

const ClientMarquee = dynamic(() => import("@/components/home/client-marquee").then((mod) => mod.ClientMarquee));
const StatusBoard = dynamic(() => import("@/components/home/status-board").then((mod) => mod.StatusBoard));
const ServicesShowcase = dynamic(() => import("@/components/home/services-showcase").then((mod) => mod.ServicesShowcase));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us").then((mod) => mod.WhyChooseUs));
const RoiCalculator = dynamic(() => import("@/components/home/roi-calculator").then((mod) => mod.RoiCalculator));
const TechStack = dynamic(() => import("@/components/home/tech-stack").then((mod) => mod.TechStack));
const ScalingJourney = dynamic(() => import("@/components/home/scaling-journey").then((mod) => mod.ScalingJourney));
const ProcessTimeline = dynamic(() => import("@/components/home/process-timeline").then((mod) => mod.ProcessTimeline));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((mod) => mod.Testimonials));
const FaqAccordion = dynamic(() => import("@/components/home/faq-accordion").then((mod) => mod.FaqAccordion));
const AssessmentCta = dynamic(() => import("@/components/home/assessment-cta").then((mod) => mod.AssessmentCta));
const CtaBlock = dynamic(() => import("@/components/common/cta-block").then((mod) => mod.CtaBlock));



export const metadata: Metadata = {
  title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
  description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company in India. Request a free cloud cost audit.",
  alternates: {
    canonical: "https://www.oneggy.com",
  },
  keywords: [
    "AWS Cloud Managed Services India",
    "DevOps Consulting Company India",
    "Kubernetes Consulting Services",
    "Cloud Infrastructure Company",
    "AWS DevOps Company",
    "DevOps company in India",
    "AWS consulting India",
    "cloud engineering company Delhi",
    "Kubernetes experts India"
  ],
  openGraph: {
    title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
    description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company in India.",
    url: "https://www.oneggy.com",
    type: "website",
    images: [
      {
        url: "https://www.oneggy.com/logov1.png",
        width: 800,
        height: 600,
        alt: "OnEggy Technologies Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
    description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company.",
    images: ["https://www.oneggy.com/logov1.png"],
  }
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
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
