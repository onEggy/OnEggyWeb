"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Who owns the Terraform modules and Git repositories you write?",
    answer: "You do. We write all Infrastructure as Code (IaC) modules and pipeline definitions directly into your company's private GitHub or GitLab organization. On Eggy claims zero ownership. Once delivered, the entire setup is 100% yours to manage.",
  },
  {
    question: "How do you manage secrets, API keys, and database passwords?",
    answer: "We strictly enforce zero raw credentials in git repositories. We integrate AWS Secrets Manager, SSM Parameter Store, or HashiCorp Vault. All variables are injected dynamically at runtime during the CI/CD pipeline release flow.",
  },
  {
    question: "Do you build new setups from scratch, or refactor legacy code?",
    answer: "We do both. We can execute greenfield cloud designs (establishing clean multi-account control towers from scratch) or perform audits and safe migrations of legacy, poorly documented brownfield configurations without causing production downtime.",
  },
  {
    question: "What is your emergency incident response policy and SLA?",
    answer: "Under our Dedicated DevOps Retainer plan, we configure automated PagerDuty/Opsgenie telemetry alerts connected to our Slack channels. We offer guaranteed response SLAs for critical P0/P1 incidents, including active database failovers and cluster crashes.",
  },
  {
    question: "Do you offer hands-on training for our local developer squads?",
    answer: "Yes. Our Platform Engineering service includes building internal developer portals and templates (IDPs). We run interactive handover workshops with your frontend/backend developers to ensure they understand how to compile, deploy, and scale resources.",
  },
];

export function ServicesFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow mb-5">Services FAQ</span>
          <h2 className="display text-3xl sm:text-4xl mt-4">
            Cloud partnerships &amp; <em>operations.</em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-[38ch]">
            Common questions from tech founders and engineering directors about workspace sharing,
            key handovers, and system ownership.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-border">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li key={index} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`services-faq-answer-${index}`}
                      id={`services-faq-button-${index}`}
                      className="w-full flex items-start justify-between gap-6 py-6 text-left transition-colors cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary group"
                    >
                      <span className="grid grid-cols-[auto_1fr] gap-x-5 items-baseline">
                        <span className="font-mono text-sm text-primary-strong/70 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg sm:text-xl text-foreground group-hover:text-primary-strong transition-colors leading-snug">
                          {item.question}
                        </span>
                      </span>
                      <Plus
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5 shrink-0 mt-1 transition-transform duration-300 text-muted-foreground group-hover:text-primary-strong",
                          isOpen ? "rotate-45 text-primary-strong" : ""
                        )}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`services-faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`services-faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pl-0 sm:pl-[3.25rem] pb-7 text-base text-muted-foreground leading-relaxed max-w-[68ch]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
