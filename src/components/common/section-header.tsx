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
    <div className={cn("max-w-3xl space-y-3 mb-16", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {tag && (
        <FadeUp>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold block mb-1">{tag}</span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.12]">{title}</h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className={cn("text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[65ch]", align === "center" ? "mx-auto" : "mr-auto")}>{subtitle}</p>
        </FadeUp>
      )}
    </div>
  );
}
