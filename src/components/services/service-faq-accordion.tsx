"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
              aria-expanded={isOpen}
              aria-controls={`service-faq-answer-${index}`}
              id={`service-faq-button-${index}`}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:text-cyan-400 transition-colors cursor-pointer select-none"
            >
              <span className="text-sm sm:text-base pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300 text-muted-foreground",
                  isOpen ? "rotate-180 text-cyan-400" : ""
                )}
              />
            </button>

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
  );
}
