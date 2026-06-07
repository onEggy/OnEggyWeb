import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Privacy Policy | OnEggy Technologies",
  description: "Read the official privacy policy and data governance statement of OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-8">
      <SectionHeader
        tag="Data Governance"
        title={<>Privacy <span className="text-cyan-400">Policy</span></>}
        subtitle="Last updated: May 28, 2026"
        align="left"
        className="mb-0"
      />

      <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-4 border-t border-border/40">
        <p>
          At OnEggy Technologies, we value your privacy and are committed to protecting your personal data. This privacy policy statement explains how we handle customer details, collect data, and comply with global privacy rules.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Data We Collect</h2>
        <p>
          We collect information that you explicitly provide when subscribing to our newsletter, booking consultations, or submitting forms. This details includes your name, email, company, phone, and project requirements.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. How We Use Data</h2>
        <p>
          We use your data to answer inquiries, send technical updates, coordinate scheduling meetings, and support cloud audit assessments. We do not sell or lease your customer details to third-party marketing entities.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Cloud System Credentials</h2>
        <p>
          For our cloud managed services, we enforce scoped IAM roles and multi-factor authorization. We never store root AWS billing or account credentials directly, maintaining strict boundary isolations.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">4. Compliance & Security</h2>
        <p>
          Our databases employ AWS KMS envelope encryption. We conduct regular penetration testing and vulnerability scans to safeguard data.
        </p>

        <div className="pt-6 border-t border-border/20 text-xs">
          For any data deletion requests or inquiries, reach out to us at{" "}
          <a href="mailto:ask@oneggy.com" className="text-cyan-400 hover:underline">
            ask@oneggy.com
          </a>.
        </div>
      </div>
    </div>
  );
}
