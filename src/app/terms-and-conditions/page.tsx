import React from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";

export const metadata: Metadata = {
  title: "Terms of Service | OnEggy Technologies",
  description: "Read the official terms and conditions of service for OnEggy Technologies.",
  alternates: {
    canonical: "https://www.oneggy.com/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-8">
      <SectionHeader
        tag="Agreement"
        title={<>Terms & <span className="text-cyan-400">Conditions</span></>}
        subtitle="Last updated: May 28, 2026"
        align="left"
        className="mb-0"
      />

      <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-4 border-t border-border/40">
        <p>
          Welcome to OnEggy Technologies. By accessing our website or utilizing our cloud-native consulting services, you agree to comply with and be bound by the following terms of service.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Scope of Services</h2>
        <p>
          OnEggy Technologies provides AWS Cloud Managed Retainers, DevOps consulting, Kubernetes orchestration, and full-stack software development. Project timelines and milestones are governed by custom client SOW (Statements of Work).
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. Intellectual Property</h2>
        <p>
          Unless otherwise specified, all custom Terraform modules, CI/CD scripts, and application codes authored for paid retainers are fully transferred to the client repository on final payment checkout.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Liability Limits</h2>
        <p>
          While we configure highly resilient, multi-account layouts, we are not liable for upstream cloud provider outages, regional database locks, or external network failures beyond our operational boundary controls.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">4. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of the Delhi NCR courts.
        </p>

        <div className="pt-6 border-t border-border/20 text-xs">
          For legal inquiries or agreement details, email our compliance team at{" "}
          <a href="mailto:ask@oneggy.com" className="text-cyan-400 hover:underline">
            ask@oneggy.com
          </a>.
        </div>
      </div>
    </div>
  );
}
