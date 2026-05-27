"use client";

import React from "react";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ArchitectureVisuals } from "@/components/services/architecture-visuals";
import { EngagementModels } from "@/components/services/engagement-models";
import { ServicesFaqs } from "@/components/services/services-faqs";
import { CtaBlock } from "@/components/common/cta-block";

export default function ServicesPage() {
  return (
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
  );
}
