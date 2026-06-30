import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";

const ClientMarquee = dynamic(() => import("@/components/home/client-marquee").then((mod) => mod.ClientMarquee));
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
const ExpertiseNarrative = dynamic(() => import("@/components/home/expertise-narrative").then((mod) => mod.ExpertiseNarrative));
const TeamPreview = dynamic(() => import("@/components/home/team-preview").then((mod) => mod.TeamPreview));



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

        {/* Client Logos Motion Marquee (Trust) */}
        <ClientMarquee />

        {/* 2. Core Philosophy & Expertise Narrative */}
        <ExpertiseNarrative />

        {/* 4. Cloud Cost Savings ROI Calculator (Business Outcomes) */}
        <RoiCalculator />

        {/* 5. Why Choose Us Section (Engineering Capability) */}
        <WhyChooseUs />

        {/* 6. Services Showcase Section (Services) */}
        <ServicesShowcase />

        {/* 7. Process Timeline Section (Delivery Process) */}
        <ProcessTimeline />

        {/* 8. Technologies We Use Section (Technology Ecosystem) */}
        <TechStack />

        {/* 9. Startup Scaling Journey Milestones & Testimonials (Proof) */}
        <ScalingJourney />
        <Testimonials />

        {/* 10. Team Telemetry Preview */}
        <TeamPreview />

        {/* 11. FAQ Accordion Section */}
        <FaqAccordion />

        {/* 12. Cloud health assessment lead magnet */}
        <AssessmentCta />

        {/* 13. Final CTA Section */}
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
