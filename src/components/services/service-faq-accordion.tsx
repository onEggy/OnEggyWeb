"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  faqs: FaqItem[];
}

export function ServiceFaqAccordion({ faqs }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
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
                aria-controls={`service-faq-answer-${index}`}
                id={`service-faq-button-${index}`}
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
                  id={`service-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`service-faq-button-${index}`}
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
  );
}
