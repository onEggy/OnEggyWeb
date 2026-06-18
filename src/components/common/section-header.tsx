import React from "react";
import { FadeUp } from "../animations/motion-wrappers";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ tag, title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-4 mb-12", align === "center" ? "mx-auto text-center" : "", className)}>
      {tag && (
        <FadeUp>
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">{tag}</span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-foreground">{title}</h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>
        </FadeUp>
      )}
    </div>
  );
}
