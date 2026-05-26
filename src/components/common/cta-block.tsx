import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "../animations/motion-wrappers";

interface CtaBlockProps {
  title: string;
  description: string;
  btnText?: string;
  btnHref?: string;
}

export function CtaBlock({ title, description, btnText = "Get Started", btnHref = "/contact" }: CtaBlockProps) {
  return (
    <FadeUp className="max-w-5xl mx-auto px-6 py-12">
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-xl">
        <div className="absolute -top-[50%] -left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-[50%] -right-[20%] w-[300px] h-[300px] rounded-full bg-teal-500/10 blur-[80px] pointer-events-none" />
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="pt-4">
          <Link
            href={btnHref}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors cursor-pointer"
          >
            {btnText} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </FadeUp>
  );
}
