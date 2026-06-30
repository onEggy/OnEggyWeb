import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";

const ClientMarquee = dynamic(() => import("@/components/home/client-marquee").then((mod) => mod.ClientMarquee));
const ExpertiseNarrative = dynamic(() => import("@/components/home/expertise-narrative").then((mod) => mod.ExpertiseNarrative));
const ServicesShowcase = dynamic(() => import("@/components/home/services-showcase").then((mod) => mod.ServicesShowcase));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us").then((mod) => mod.WhyChooseUs));
const RoiCalculator = dynamic(() => import("@/components/home/roi-calculator").then((mod) => mod.RoiCalculator));
const ProcessTimeline = dynamic(() => import("@/components/home/process-timeline").then((mod) => mod.ProcessTimeline));
const TechStack = dynamic(() => import("@/components/home/tech-stack").then((mod) => mod.TechStack));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((mod) => mod.Testimonials));
const FaqAccordion = dynamic(() => import("@/components/home/faq-accordion").then((mod) => mod.FaqAccordion));
const CtaBlock = dynamic(() => import("@/components/common/cta-block").then((mod) => mod.CtaBlock));


export const metadata: Metadata = {
  title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
  description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company in India. Request a free cloud cost audit.",
  alternates: {
    canonical: "/",
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
    "Kubernetes experts India",
  ],
  openGraph: {
    title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
    description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company in India.",
    url: "https://www.oneggy.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnEggy Technologies | AWS Cloud Managed Services & DevOps Consulting Company India",
    description: "Scale secure AWS cloud deployments, automate CI/CD pipelines, and migrate to Kubernetes EKS with OnEggy's premium DevOps consulting company.",
  },
};

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OnEggy Technologies",
    url: "https://www.oneggy.com",
    logo: "https://www.oneggy.com/logov1.png",
    sameAs: ["https://github.com/onEggy", "https://linkedin.com/company/oneggy"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "ask@oneggy.com",
      telephone: "+91-98111-33005",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
        }}
      />
      <div className="relative overflow-hidden">
        {/* 1. Cinematic hero */}
        <Hero />

        {/* 2. Client logos (trust) */}
        <ClientMarquee />

        {/* 3. Core philosophy & expertise narrative */}
        <ExpertiseNarrative />

        {/* 4. Services showcase */}
        <ServicesShowcase />

        {/* 5. Why choose us (engineering capability) */}
        <WhyChooseUs />

        {/* 6. Cloud cost ROI calculator (business outcomes) */}
        <RoiCalculator />

        {/* 7. Delivery process timeline */}
        <ProcessTimeline />

        {/* 8. Technology ecosystem */}
        <TechStack />

        {/* 9. Testimonials (proof) */}
        <Testimonials />

        {/* 10. FAQ */}
        <FaqAccordion />

        {/* 11. Final CTA */}
        <div className="py-12 border-t border-border">
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
