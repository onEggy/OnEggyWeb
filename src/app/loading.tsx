"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 flex flex-col items-center justify-center pointer-events-none select-none">
      <div className="relative flex flex-col items-center space-y-4">
        {/* Animated outer glowing circle */}
        <div className="absolute w-20 h-20 rounded-full border border-primary/30 animate-ping opacity-75" />
        
        {/* Spinner icon */}
        <div className="relative w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>

        {/* Loading text */}
        <div className="text-center space-y-1">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            connecting
          </p>
          <span className="text-[10px] font-mono text-primary/60 block animate-pulse">
            oneggy-node-syncing
          </span>
        </div>
      </div>
    </div>
  );
}
