import React from "react";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

export const metadata: Metadata = {
  title: "Privacy Policy | OnEggy Technologies",
  description: "Read the official privacy policy and data governance statement of OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/privacy-policy",
  },
};

const LAST_UPDATED = "June 30, 2026";

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oneggy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.oneggy.com/privacy-policy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12 sm:pt-16 lg:pt-20">
        <span className="eyebrow mb-6">Data Governance</span>
        <h1 className="display text-5xl sm:text-6xl mt-5 max-w-[16ch]">
          Privacy <em>Policy.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          At OnEggy Technologies, we value your privacy and are committed to protecting your
          personal data. This statement explains how we handle customer details, collect data,
          and comply with global privacy rules, including India&apos;s Digital Personal Data
          Protection Act, 2023 and the EU GDPR.
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          Last updated — {LAST_UPDATED}
        </p>
      </section>

      {/* Policy sections */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">The policy</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">How we handle your data.</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[40ch]">
              Expand each clause below to read the specific terms governing collection, use,
              retention, and your rights.
            </p>
          </div>

          <div className="lg:col-span-8">
            <StaggerContainer className="border-t border-border">
              {policySections.map((sec, index) => (
                <StaggerItem key={index} className="border-b border-border">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-start justify-between gap-6 py-6 cursor-pointer select-none">
                      <span className="font-display text-xl text-foreground leading-snug">{sec.title}</span>
                      <span className="shrink-0 mt-1 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-hover:text-primary">
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </summary>
                    <p className="pb-7 -mt-1 text-base text-muted-foreground leading-relaxed max-w-[62ch]">
                      {sec.content}
                    </p>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-10 text-base text-muted-foreground leading-relaxed">
              For any data access, correction, or deletion requests, or to contact our Grievance
              Officer, reach out to us at{" "}
              <a href="mailto:ask@oneggy.com" className="text-primary-strong hover:underline">
                ask@oneggy.com
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
