import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp } from "../animations/motion-wrappers";

interface CtaBlockProps {
  title: string;
  description: string;
  btnText?: string;
  btnHref?: string;
}

export function CtaBlock({ title, description, btnText = "Get Started", btnHref = "/contact" }: CtaBlockProps) {
  return (
    <FadeUp className="max-w-5xl mx-auto px-6 py-6 select-none">
      <div className="surface-card p-8 sm:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
        {/* Subtle brand tint band */}
        <div className="absolute inset-0 gradient-bg pointer-events-none" aria-hidden="true" />

        <div className="md:col-span-8 space-y-3 relative">
          <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground leading-tight">
            {title}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4 relative">
          <Link
            href={btnHref}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-colors cursor-pointer w-full md:w-auto text-center"
          >
            {btnText} <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" aria-hidden="true" />
            <span>Zero obligation consultation</span>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
