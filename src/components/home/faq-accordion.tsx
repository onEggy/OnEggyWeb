"use client";

import React, { useState } from "react";
import { SectionHeader } from "../common/section-header";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What cloud platforms and tools do you specialize in?",
    answer: "Our primary expertise lies in AWS (Amazon Web Services) and Kubernetes (EKS). We are experts in Infrastructure as Code using Terraform, containerization with Docker, and designing custom CI/CD pipelines with GitHub Actions and ArgoCD. We also support multi-cloud Azure and GCP consulting.",
  },
  {
    question: "How do you achieve cloud cost savings for clients?",
    answer: "We conduct detailed cost audits to identify over-provisioned resources, orphan volumes, and suboptimal database tiers. We implement automated scheduling, auto-scaling, and leverage AWS Spot and Reserved Instances. On average, our clients save 30% to 45% on their monthly AWS bills.",
  },
  {
    question: "Can you help us achieve compliance (HIPAA, PCI-DSS, ISO 27001)?",
    answer: "Yes. We design and build compliant cloud environments. We establish secure AWS landing zones, configure encryption at rest and in transit, configure secure VPCs with strict IAM roles, and implement security auditing using AWS CloudTrail and container scanning scripts.",
  },
  {
    question: "What is your typical onboarding process and engagement timeline?",
    answer: "We start with a free assessment of your current infrastructure. Once approved, we design the architecture blueprint (1-2 weeks). We then write the Terraform and CI/CD code (2-4 weeks) and perform zero-downtime migrations. Typical engagements range from 4 to 8 weeks.",
  },
  {
    question: "Do you offer post-launch support and telemetry monitoring?",
    answer: "Absolutely. We build Prometheus, Grafana, and Datadog alert boards to provide full system observability. We offer continuous monthly cost reviews and dedicated support packages for cluster maintenance and updates.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Got Questions?"
        title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
        subtitle="Find answers to common questions about our DevOps, Kubernetes, and Cloud Management engineering solutions."
        align="center"
        className="mb-16"
      />

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-border/40 rounded-xl bg-background/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:text-cyan-500 transition-colors cursor-pointer select-none"
              >
                <span className="text-sm sm:text-base pr-4">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-300 text-muted-foreground",
                    isOpen ? "rotate-180 text-cyan-500" : ""
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-border/20 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
