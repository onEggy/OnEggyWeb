"use client";

import React, { useState } from "react";
import { SectionHeader } from "../common/section-header";
import { ChevronDown } from "lucide-react";
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
    <section className="max-w-4xl mx-auto px-6 py-20 border-t border-border/40 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-[20%] left-[-15%] w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <SectionHeader
        tag="Services FAQ"
        title={<>Cloud Partnerships & <span className="gradient-text">Operations FAQs</span></>}
        subtitle="Common questions from tech founders and engineering directors about workspace sharing, key handovers, and system ownership."
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
