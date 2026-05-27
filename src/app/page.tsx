"use client";

import React from "react";
import { Hero } from "@/components/home/hero";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { TechStack } from "@/components/home/tech-stack";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Testimonials } from "@/components/home/testimonials";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { CtaBlock } from "@/components/common/cta-block";

export default function Home() {
  return (
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
  );
}
