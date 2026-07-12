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
    console.error("Application runtime exception:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="surface-card max-w-xl w-full p-8 md:p-10 rounded-2xl text-center space-y-6">
        <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center mx-auto text-destructive">
          <AlertCircle className="h-6 w-6" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-foreground">
            System Error Encountered
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            An unexpected error occurred while executing the runtime thread. Our engineering team has been alerted via telemetry monitoring.
          </p>
        </div>

        {error.digest && (
          <div className="bg-muted border border-border p-3 rounded-lg text-left">
            <span className="text-[10px] font-mono text-muted-foreground block uppercase tracking-wider">error ID (digest)</span>
            <code className="text-xs font-mono text-primary-strong select-all block mt-0.5 break-all">{error.digest}</code>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-primary text-primary-strong hover:bg-primary/10 font-semibold transition-colors cursor-pointer"
          >
            <Home className="h-4 w-4" /> Go Home
          </Link>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground flex-wrap">
          <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>Need immediate assistance? Email us at</span>
          <a href="mailto:ask@oneggy.com" className="text-primary-strong hover:underline">ask@oneggy.com</a>
        </div>
      </div>
    </div>
  );
}
