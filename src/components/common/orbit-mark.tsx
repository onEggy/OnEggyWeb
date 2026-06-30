import React from "react";
import { cn } from "@/lib/utils";

interface OrbitMarkProps {
  size?: number;
  spin?: boolean;
  className?: string;
}

/**
 * OnEggy brand motif — the "core + orbit": an amber yolk core ringed by
 * teal orbital paths, derived from the logo. Used as the wordmark glyph
 * and a recurring signature element.
 */
export function OrbitMark({ size = 28, spin = false, className }: OrbitMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <g className={spin ? "orbit-spin" : undefined}>
        <ellipse cx="20" cy="20" rx="17" ry="7" stroke="hsl(var(--primary))" strokeWidth="1.4" />
        <ellipse cx="20" cy="20" rx="7" ry="17" stroke="hsl(var(--primary))" strokeWidth="1.4" opacity="0.4" />
      </g>
      <circle cx="20" cy="20" r="6.5" fill="hsl(var(--accent))" />
    </svg>
  );
}
