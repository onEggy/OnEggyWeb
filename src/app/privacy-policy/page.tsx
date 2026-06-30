import React from "react";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Privacy Policy | OnEggy Technologies",
  description: "Read the official privacy policy and data governance statement of OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {

  const policySections = [
    {
      title: "1. Data We Collect",
      content: "We collect information that you explicitly provide when subscribing to our newsletter, booking consultations, or submitting forms. This data includes your name, email, company, phone, and project requirements.",
    },
    {
      title: "2. How We Use Data",
      content: "We use your data to answer inquiries, send technical updates, coordinate scheduling meetings, and support cloud audit assessments. We do not sell or lease your customer details to third-party marketing entities.",
    },
    {
      title: "3. Cookies & Tracking Technologies",
      content: "Our website uses strictly necessary cookies to operate core functionality and may use analytics cookies to understand aggregated usage. We do not deploy advertising or cross-site tracking cookies. You can control or disable cookies through your browser settings; disabling non-essential cookies will not affect access to our core content.",
    },
    {
      title: "4. Third-Party Data Processors",
      content: "When you submit our contact form, your submission is transmitted to and processed by FormSubmit (formsubmit.co), an external form-handling service that forwards your message to our team inbox. FormSubmit acts as a data processor on our behalf and is subject to its own privacy practices. We engage only processors that provide appropriate safeguards for your personal data.",
    },
    {
      title: "5. Cloud System Credentials",
      content: "For our cloud managed services, we enforce scoped IAM roles and multi-factor authorization. We never store root AWS billing or account credentials directly, maintaining strict boundary isolations.",
    },
    {
      title: "6. Compliance & Security",
      content: "Our databases employ AWS KMS envelope encryption. We conduct regular penetration testing and vulnerability scans to safeguard data. We process personal data in accordance with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the EU General Data Protection Regulation (GDPR) where applicable.",
    },
    {
      title: "7. Data Retention Period",
      content: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, to comply with legal, accounting, or reporting obligations, and to resolve disputes. Contact and inquiry data is typically retained for up to 24 months after our last interaction, after which it is securely deleted or anonymised unless a longer retention period is required by law.",
    },
    {
      title: "8. Your Rights as a Data Principal / Data Subject",
      content: "Subject to the DPDP Act and GDPR, you have the right to access the personal data we hold about you, to request correction of inaccurate data, to request erasure of your data, to withdraw consent, and to lodge a grievance. To exercise any of these rights, or to reach our Grievance Officer, contact us at ask@oneggy.com. We will respond to verified requests within the timeframes prescribed by applicable law.",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-8">
      <SectionHeader
        as="h1"
        tag="Data Governance"
        title={<>Privacy <span className="text-primary">Policy</span></>}
        subtitle="Last updated: June 30, 2026"
        align="left"
        className="mb-0"
      />

      <div className="max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-4 border-t border-border/40">
        <p>
          At OnEggy Technologies, we value your privacy and are committed to protecting your personal data. This privacy policy statement explains how we handle customer details, collect data, and comply with global privacy rules, including India&apos;s Digital Personal Data Protection Act, 2023 and the EU GDPR.
        </p>

        <StaggerContainer className="space-y-3.5">
          {policySections.map((sec, index) => (
            <StaggerItem
              key={index}
              className="surface-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-sm"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-foreground hover:bg-muted transition-colors select-none">
                  <span className="text-sm md:text-base pr-4">{sec.title}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-muted-foreground group-hover:text-primary">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-border text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>{sec.content}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="pt-6 border-t border-border text-sm">
          For any data access, correction, or deletion requests, or to contact our Grievance Officer, reach out to us at{" "}
          <a href="mailto:ask@oneggy.com" className="text-primary-strong hover:underline">
            ask@oneggy.com
          </a>.
        </div>
      </div>
    </div>
  );
}
