import React from "react";
import { FadeUp } from "../animations/motion-wrappers";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ tag, title, subtitle, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-4 mb-12", align === "center" ? "mx-auto text-center" : "", className)}>
      {tag && (
        <FadeUp>
          <span className="text-xs uppercase tracking-widest text-cyan-500 font-semibold">{tag}</span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{subtitle}</p>
        </FadeUp>
      )}
    </div>
  );
}
