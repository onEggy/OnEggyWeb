import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";

export const metadata: Metadata = {
  title: "Refund & Billing Policy | OnEggy Technologies",
  description: "Review our clear, professional billing and refund guidelines. Transparent terms for Cloud Managed Services, DevOps Retainers, and Custom Software Projects.",
  alternates: {
    canonical: "https://www.oneggy.com/refund-policy",
  },
};

const LAST_UPDATED = "June 30, 2026";

export default function RefundPolicyPage() {

  const policySections = [
    {
      title: "1. General Policy Principles",
      content: "At OnEggy Technologies, we are committed to building high-fidelity cloud systems and software. Since our services involve custom engineering, resources allocation, and cloud architecture setups, we structure our work with clear scopes and milestones. We ensure complete transparency regarding billing, retainers, and refund eligibility to protect both parties."
    },
    {
      title: "2. Service-Based Nature of Work",
      content: "All cloud-native, DevOps consulting, and full-stack development offerings are professional engineering services. Billing is calculated based on dedicated engineer hours, architecture complexities, and milestone deliverables. Because these resource times cannot be recovered, completed service segments are not eligible for refunds."
    },
    {
      title: "3. Technical Consultation Fees",
      content: "One-time technical audits, cloud waste assessments, security posture evaluations, and initial architecture roadmapping audits are billed as fixed advisory fees. These charges are fully earned upon delivery of the corresponding analysis reports and are non-refundable."
    },
    {
      title: "4. Advance Sprints & Payments",
      content: "Project phases and recurring engineering sprints typically require advance deposits to secure dedicated DevOps and platform developers. Once sprint tasks are initiated, advance deposits are non-refundable, as engineering capacity is reserved exclusively for your organization."
    },
    {
      title: "5. Project Cancellation & Pauses",
      content: "Either party may pause or terminate a project by providing a written notice (via email or official Slack channels). Upon termination, billing will be adjusted up to the active day of notice. Any uninitiated future milestones or unused pre-paid hours will be refunded to the client."
    },
    {
      title: "6. Milestone-Based Deliverables",
      content: "For fixed-scope projects, we divide deliverables into clear milestone gates (e.g., Milestone 1: VPC Network & IAM; Milestone 2: EKS Provisioning & CI/CD; Milestone 3: Handover). Refunds are assessed strictly against the failed or incomplete delivery of specific milestone artifacts defined in the Work Order."
    },
    {
      title: "7. Non-Refundable Direct Costs",
      content: "Certain cloud infrastructure setups involve purchasing licenses, domain names, third-party software tools, or dedicated hosting resources on behalf of the client. These direct out-of-pocket costs are fully non-refundable once processed."
    },
    {
      title: "8. Managed Services & Subscription Billing",
      content: "Ongoing AWS Managed Services and DevOps Retainer subscriptions are billed monthly in advance. Retainer cancellations must be requested at least 15 days before the next billing cycle. Pre-paid retainer fees for the current month are non-refundable."
    },
    {
      title: "9. Delayed Response & Project Holds",
      content: "If a project is delayed by more than 14 consecutive days due to a client's failure to provide access credentials, necessary APIs, or design reviews, the project will be placed on hold. Holds may result in resource re-assignment and a reactivation fee to restart, with no refunds for delayed milestones."
    },
    {
      title: "10. Scope Change & Addendums",
      content: "If your technical requirements scale during active development (Scope Creep), we will handle additions through an Addendum Work Order rather than refunding current work. New features will be billed separately with updated timelines."
    },
    {
      title: "11. Custom Code & Sandbox Testing",
      content: "All custom application code (Next.js, React Native, Python) is verified inside isolated staging/sandbox environments prior to production push. Client sign-off during staging confirmation constitutes acceptance of the code's structural functionality."
    },
    {
      title: "12. Refund Processing Timelines",
      content: "Approved refunds are processed internally within 5 business days. Depending on your financial institution or card provider, the refunded credit will appear back on your original payment method within 10 to 14 business days."
    },
    {
      title: "13. Chargeback Handling & Resolution",
      content: "We encourage clients to contact us directly to resolve billing disputes. Filing an unauthorized chargeback or dispute without prior notice will result in immediate suspension of active cloud services, access credentials, and database support pipelines."
    },
    {
      title: "14. Slack & Jira Communication Channels",
      content: "To guarantee alignment, we track all engineering tasks inside dedicated Slack environments or shared Jira logs. Billing disputes or questions must be raised through these verified channels to ensure prompt technical review."
    },
    {
      title: "15. Indian Legal Compliance",
      content: "OnEggy Technologies is registered in Delhi, India. This billing and refund policy is governed by the IT Act and corporate laws of India, under the jurisdiction of courts in Delhi."
    },
    {
      title: "16. Contact Information & Support",
      content: "For billing support, retainer modifications, or refund queries, contact our finance team directly at billing@oneggy.com or ask@oneggy.com. We respond to all inquiries within 24 business hours."
    }
  ];

  const corporateIdentifiers = [
    { label: "Company CIN", value: "U72900DL2022OPC407567" },
    { label: "Company GSTIN", value: "07AADCO9485D1Z6" },
  ];

  const commitments = [
    {
      title: "Transparent Communication",
      desc: "We coordinate engineering deliverables in open sprints. Our clients have direct visibility into code updates, active issues, and pipeline runs, ensuring zero administrative blockages or surprises.",
    },
    {
      title: "Customer-First Commitment",
      desc: "If an architecture setup or codebase release does not align with your scope, we will hold peer review workshops and modify components immediately, standing behind our standards of excellence.",
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
        "name": "Refund Policy",
        "item": "https://www.oneggy.com/refund-policy"
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
        <span className="eyebrow mb-6">Transparent Billing Standards</span>
        <h1 className="display text-5xl sm:text-6xl mt-5 max-w-[18ch]">
          Refund & <em>Billing Policy.</em>
        </h1>
        <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-[60ch]">
          Transparent guidelines protecting custom DevOps retainers, cloud-native deployments,
          and software engineering agreements.
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
          Last updated — {LAST_UPDATED}
        </p>
      </section>

      {/* Corporate identification */}
      <section className="border-y border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-[0.1em] text-primary-strong">Registered entity</p>
            <p className="mt-3 font-display text-2xl text-foreground">OnEggy Technologies</p>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              Registered Corporate Entity in Delhi NCR, India.
            </p>
          </div>
          <dl className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-border pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-16">
            {corporateIdentifiers.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">{item.label}</dt>
                <dd className="mt-2 font-mono text-base text-foreground tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Policy clauses */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">The policy</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">Billing &amp; refund clauses.</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[40ch]">
              Expand each clause below to review the specific guidelines, eligibility, and billing
              terms governing our engagements.
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
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="border-t border-border bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-5">Standing behind the work</span>
            <h2 className="display text-3xl sm:text-4xl mt-4">Built on trust.</h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {commitments.map((c) => (
              <div key={c.title}>
                <h3 className="font-display text-xl text-foreground">{c.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="display text-3xl sm:text-4xl">Have questions about your invoice?</h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[52ch]">
              For any payment questions, retainer adjustments, or custom billing structures, please
              contact our billing desk.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-4">
            <a
              href="mailto:billing@oneggy.com"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            >
              Email billing team
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-primary text-primary-strong hover:bg-primary/10 font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            >
              Request a call <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
