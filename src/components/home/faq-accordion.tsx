"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border/40 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-[10%] left-[-15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Editorial Header & Booking Card (5 columns) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Frequently Asked <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Find answers to common questions about our DevOps, Kubernetes, and Cloud Management engineering solutions.
            </p>
          </div>

          {/* Quick meeting booking panel */}
          <div className="p-5 rounded-xl border border-border bg-background/30 backdrop-blur-sm space-y-4 max-w-sm">
            <h3 className="text-sm font-bold text-foreground inline-flex items-center gap-2">
              <Calendar className="h-4.5 w-4.5 text-cyan-400" /> Need quick clarification?
            </h3>
            <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
              Skip the reading and chat directly with our cloud-native systems architect in a free 15-minute alignment call.
            </p>
            <a
              href="https://cal.com/oneggy-aakash-sharma/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold h-9 px-4 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Book Architecture Review <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Accordion Stack (7 columns) */}
        <div className="lg:col-span-7 border-t border-border/20 lg:border-t-0">
          <div className="divide-y divide-border/20">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left font-semibold text-foreground hover:text-cyan-400 transition-colors cursor-pointer select-none py-2"
                  >
                    <span className="text-sm sm:text-base pr-4 font-semibold">{item.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 text-muted-foreground ${
                        isOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 pb-1 pr-6 select-text">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
