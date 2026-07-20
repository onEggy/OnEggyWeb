import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";

const ClientMarquee = dynamic(() => import("@/components/home/client-marquee").then((mod) => mod.ClientMarquee));
const Problems = dynamic(() => import("@/components/home/problems").then((mod) => mod.Problems));
const Outcomes = dynamic(() => import("@/components/home/outcomes").then((mod) => mod.Outcomes));
const ServicesShowcase = dynamic(() => import("@/components/home/services-showcase").then((mod) => mod.ServicesShowcase));
const ProcessTimeline = dynamic(() => import("@/components/home/process-timeline").then((mod) => mod.ProcessTimeline));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((mod) => mod.Testimonials));
const FaqAccordion = dynamic(() => import("@/components/home/faq-accordion").then((mod) => mod.FaqAccordion));
const CtaBlock = dynamic(() => import("@/components/common/cta-block").then((mod) => mod.CtaBlock));


export const metadata: Metadata = {
  title: "AWS Managed Cloud & DevOps Consulting | OnEggy Technologies",
  description: "Scale secure AWS cloud environments, automate CI/CD pipelines, and manage Kubernetes clusters. Global DevOps consulting and cloud managed services by OnEggy.",
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
    title: "AWS Managed Cloud & DevOps Consulting | OnEggy Technologies",
    description: "Scale secure AWS cloud environments, automate CI/CD pipelines, and manage Kubernetes clusters. Global DevOps consulting and cloud managed services by OnEggy.",
    url: "https://www.oneggy.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Managed Cloud & DevOps Consulting | OnEggy Technologies",
    description: "Scale secure AWS cloud environments, automate CI/CD pipelines, and manage Kubernetes clusters. Global DevOps consulting and cloud managed services by OnEggy.",
  },
};

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.oneggy.com/#organization",
        "name": "OnEggy Technologies",
        "url": "https://www.oneggy.com",
        "logo": "https://www.oneggy.com/logov1.png",
        "sameAs": ["https://github.com/onEggy", "https://linkedin.com/company/oneggy"],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "ask@oneggy.com",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.oneggy.com/#website",
        "name": "OnEggy Technologies",
        "url": "https://www.oneggy.com",
        "publisher": {
          "@id": "https://www.oneggy.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.oneggy.com/blog?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.oneggy.com/#localbusiness",
        "name": "OnEggy Technologies",
        "image": "https://www.oneggy.com/logov1.png",
        "url": "https://www.oneggy.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gurgaon",
          "addressLocality": "Gurgaon",
          "addressRegion": "Delhi NCR",
          "postalCode": "122001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4595",
          "longitude": "77.0266"
        }
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
      <div className="relative">
        {/* 1. Editorial hero + reliability console */}
        <Hero />

        {/* 2. Client trust strip */}
        <ClientMarquee />

        {/* 3. Problems we solve — name the pain, show the fix */}
        <Problems />

        {/* 4. Outcomes / proof metrics */}
        <Outcomes />

        {/* 4. Capabilities index */}
        <ServicesShowcase />

        {/* 5. How we work */}
        <ProcessTimeline />

        {/* 6. Client proof */}
        <Testimonials />

        {/* 7. FAQ */}
        <FaqAccordion />

        {/* 8. Final CTA */}
        <div className="py-16 sm:py-20 border-t border-border">
          <CtaBlock
            title="Let's pressure-test your cloud."
            description="Book a 30-minute consultation with a senior architect. We'll review your infrastructure, surface the biggest risks and savings, and show you exactly where we'd start."
            btnText="Book a consultation"
            btnHref="/contact"
          />
        </div>
      </div>
    </>
  );
}
