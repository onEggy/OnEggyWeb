import React from "react";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

export const metadata: Metadata = {
  title: "Terms of Service | OnEggy Technologies",
  description: "Read the official terms and conditions of service for OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/terms-and-conditions",
  },
};

const LAST_UPDATED = "June 30, 2026";

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
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12 sm:pt-16 lg:pt-20">
        <span className="eyebrow mb-6">Agreement</span>
        <h1 className="display text-5xl sm:text-6xl mt-5 max-w-[16ch]">
          Terms & <em>Conditions.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          Welcome to OnEggy Technologies. By accessing our website or utilizing our cloud-native
          consulting services, you agree to comply with and be bound by the following terms of
          service.
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          Last updated — {LAST_UPDATED}
        </p>
      </section>

      {/* Policy sections */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">The agreement</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">Terms of engagement.</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[40ch]">
              Expand each clause below to read the specific terms covering scope, intellectual
              property, liability, and governing law.
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
              For legal inquiries or agreement details, email our compliance team at{" "}
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
