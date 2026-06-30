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
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

        {/* Left column: editorial header + booking card */}
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Questions</span>
          <h2 className="display text-3xl sm:text-4xl mt-4">
            Frequently asked <em>questions.</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[36ch]">
            Answers to common questions about our DevOps, Kubernetes, and cloud management engineering.
          </p>

          {/* Quick meeting booking panel */}
          <div className="mt-10 pt-7 border-t border-border max-w-sm">
            <h3 className="text-base font-semibold text-foreground inline-flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" aria-hidden="true" /> Need quick clarification?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Skip the reading and chat directly with our cloud-native systems architect in a free 15-minute alignment call.
            </p>
            <a
              href="https://cal.com/oneggy-aakash-sharma/30min"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold h-11 px-4 rounded-md border border-primary text-primary-strong hover:bg-primary/10 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              Book architecture review <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column: accessible accordion */}
        <div className="lg:col-span-8 border-t border-border">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                  className="w-full flex items-baseline justify-between gap-6 text-left py-6 sm:py-7 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md group"
                >
                  <span className="display text-lg sm:text-xl text-foreground group-hover:text-primary-strong transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 self-center transition-transform duration-300 text-muted-foreground ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-muted-foreground leading-relaxed pb-7 pr-8 max-w-[60ch] select-text">
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
    </section>
  );
}
