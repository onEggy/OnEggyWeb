"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home, Mail } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error details to telemetry/console
    console.error("Application runtime exception:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 relative py-12">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] rounded-full bg-red-500/5 blur-[95px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[95px] pointer-events-none" />

      <div className="glass-card max-w-xl w-full p-8 md:p-10 rounded-2xl border border-red-500/10 text-center space-y-6 shadow-2xl relative">
        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-red-400">
          <AlertCircle className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            System Error Encountered
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An unexpected error occurred while executing the runtime thread. Our engineering team has been alerted via telemetry monitoring.
          </p>
        </div>

        {error.digest && (
          <div className="bg-accent/20 border border-border/40 p-3 rounded-lg text-left">
            <span className="text-[10px] font-mono text-muted-foreground block uppercase tracking-wider">
              error ID (digest)
            </span>
            <code className="text-xs font-mono text-primary select-all block mt-0.5 break-all">
              {error.digest}
            </code>
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>
          
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-background border border-border hover:bg-accent/40 font-medium transition-colors cursor-pointer"
          >
            <Home className="h-4 w-4" /> Go Home
          </Link>
        </div>

        <div className="pt-4 border-t border-border/20 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Mail className="h-4 w-4 text-primary" />
          <span>Need immediate assistance? Email us at </span>
          <a href="mailto:support@oneggy.com" className="text-primary hover:underline">
            support@oneggy.com
          </a>
        </div>
      </div>
    </div>
  );
}
