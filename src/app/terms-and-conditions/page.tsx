import React from "react";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Terms of Service | OnEggy Technologies",
  description: "Read the official terms and conditions of service for OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {

  const policySections = [
    {
      title: "1. Scope of Services",
      content: "OnEggy Technologies provides AWS Cloud Managed Retainers, DevOps consulting, Kubernetes orchestration, and full-stack software development. Project timelines and milestones are governed by custom client SOW (Statements of Work).",
    },
    {
      title: "2. Intellectual Property",
      content: "Unless otherwise specified, all custom Terraform modules, CI/CD scripts, and application codes authored for paid retainers are fully transferred to the client repository on final payment checkout.",
    },
    {
      title: "3. Liability Limits",
      content: "While we configure highly resilient, multi-account layouts, we are not liable for upstream cloud provider outages, regional database locks, or external network failures beyond our operational boundary controls.",
    },
    {
      title: "4. Cookies & Tracking Technologies",
      content: "Our website uses strictly necessary cookies to operate core functionality and may use analytics cookies to understand aggregated usage. We do not deploy advertising or cross-site tracking cookies. You can control or disable cookies through your browser settings at any time.",
    },
    {
      title: "5. Third-Party Data Processors",
      content: "Submissions made through our contact form are transmitted to and processed by FormSubmit (formsubmit.co), an external form-handling service that forwards your message to our team inbox. FormSubmit acts as a data processor on our behalf and is governed by its own terms and privacy practices.",
    },
    {
      title: "6. Data Retention Period",
      content: "Personal data collected through this website is retained only for as long as necessary to fulfil the purpose for which it was collected and to meet legal, accounting, or reporting obligations. Contact and inquiry data is typically retained for up to 24 months after our last interaction, after which it is securely deleted or anonymised unless a longer retention period is required by law.",
    },
    {
      title: "7. Your Rights & Grievance Redressal",
      content: "In accordance with India's Digital Personal Data Protection Act, 2023 and the EU GDPR, you have the right to access, correct, and request erasure of your personal data, and to withdraw consent. To exercise these rights or to raise a grievance, contact our Grievance Officer at ask@oneggy.com. We will respond to verified requests within the timeframes prescribed by applicable law.",
    },
    {
      title: "8. Governing Law",
      content: "These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of the Delhi NCR courts.",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-8">
      <SectionHeader
        as="h1"
        tag="Agreement"
        title={<>Terms & <span className="text-primary">Conditions</span></>}
        subtitle="Last updated: June 30, 2026"
        align="left"
        className="mb-0"
      />

      <div className="max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-4 border-t border-border/40">
        <p>
          Welcome to OnEggy Technologies. By accessing our website or utilizing our cloud-native consulting services, you agree to comply with and be bound by the following terms of service.
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
          For legal inquiries or agreement details, email our compliance team at{" "}
          <a href="mailto:ask@oneggy.com" className="text-primary-strong hover:underline">
            ask@oneggy.com
          </a>.
        </div>
      </div>
    </div>
  );
}
