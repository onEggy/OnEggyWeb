import React from "react";
import { FadeUp } from "../animations/motion-wrappers";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  /** Heading level — use "h1" once per page for the primary heading. */
  as?: "h1" | "h2";
}

export function SectionHeader({ tag, title, subtitle, className, align = "center", as = "h2" }: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={cn("max-w-3xl space-y-4 mb-14", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {tag && (
        <FadeUp>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary-strong font-bold block">{tag}</span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <Heading className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.12]">
          {title}
        </Heading>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className={cn("text-base text-muted-foreground leading-relaxed max-w-[60ch]", align === "center" ? "mx-auto" : "mr-auto")}>
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
