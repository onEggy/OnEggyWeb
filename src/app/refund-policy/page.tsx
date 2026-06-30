import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  ChevronDown, 
  Mail, 
  Building2, 
  FileText, 
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/motion-wrappers";
import { SectionHeader } from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Refund & Billing Policy | OnEggy Technologies",
  description: "Review our clear, professional billing and refund guidelines. Transparent terms for Cloud Managed Services, DevOps Retainers, and Custom Software Projects.",
  alternates: {
    canonical: "https://www.oneggy.com/refund-policy",
  },
};

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

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-16">
        {/* Blueprint Coordinates */}
        <div className="absolute top-2 left-10 font-mono text-[8px] text-zinc-650 opacity-40 select-none">
          GRID.SEC.L // BILLING.POLICY_V1.0
        </div>

        {/* 1. HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-xs font-mono text-primary shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Transparent Billing Standards</span>
          </div>
          <SectionHeader
            title={<>Refund & <span className="text-primary font-bold">Billing Policy</span></>}
            subtitle="Transparent guidelines protecting custom DevOps retainers, cloud-native deployments, and software engineering agreements."
            align="center"
            className="mb-0"
          />
        </div>

        {/* 2. CORPORATE IDENTIFICATION SUMMARY CARD */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl border border-border/40 bg-background/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground font-mono">OnEggy Technologies</h4>
                <p className="text-xs text-muted-foreground">Registered Corporate Entity in Delhi NCR, India</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-mono shrink-0">
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Company CIN</span>
                <span className="font-semibold text-foreground bg-accent/30 px-2 py-0.5 rounded border border-border/50">U72900DL2022OPC407567</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Company GSTIN</span>
                <span className="font-semibold text-foreground bg-accent/30 px-2 py-0.5 rounded border border-border/50">07AADCO9485D1Z6</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. POLICY CONTENT SECTION (NATIVE details/summary ACCORDIONS) */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="space-y-2 mb-6">
            <h2 className="text-xl font-bold text-foreground inline-flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Policy Clauses
            </h2>
            <p className="text-xs text-muted-foreground">
              Click on each section below to review the specific guidelines and billing terms:
            </p>
          </div>

          <StaggerContainer className="space-y-3.5">
            {policySections.map((sec, index) => (
              <StaggerItem
                key={index}
                className="glass-card border border-border/40 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-foreground hover:bg-accent/20 transition-colors select-none">
                    <span className="text-sm md:text-base font-semibold pr-4">{sec.title}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0 text-muted-foreground group-hover:text-primary">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-border/20 text-xs sm:text-sm text-muted-foreground leading-relaxed bg-background/5 space-y-3 font-medium">
                    <p>{sec.content}</p>
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* 4. TRUST SECTION */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/40 pt-16">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Transparent Communication</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We coordinate engineering deliverables in open sprints. Our clients have direct visibility into code updates, active issues, and pipeline runs, ensuring zero administrative blockages or surprises.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Customer-First Commitment</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              If an architecture setup or codebase release does not align with your scope, we will hold peer review workshops and modify components immediately, standing behind our standards of excellence.
            </p>
          </div>
        </div>

        {/* 5. CONTACT SUPPORT CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-tr from-primary/5 to-transparent border border-border/40 rounded-2xl p-8 text-center space-y-6 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-foreground">Have questions about your invoice?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              For any payment questions, retainer adjustments, or custom billing structures, please contact our billing desk.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:billing@oneggy.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
            >
              <Mail className="h-4 w-4" /> Email Billing Team
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-background border border-border hover:bg-accent/40 hover:border-border/80 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Request Call <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
