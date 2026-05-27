"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the splash screen in this session
    const hasVisited = sessionStorage.getItem("oneggy-splash-visited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 0);
      sessionStorage.setItem("oneggy-splash-visited", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence onExitComplete={() => {
      document.body.style.overflow = "";
    }}>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onAnimationStart={() => {
          document.body.style.overflow = "hidden";
        }}
        className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center"
      >
        <div className="relative flex flex-col items-center space-y-4">
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1.1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              times: [0, 0.6, 1],
            }}
            className="w-20 h-20 flex items-center justify-center relative"
          >
            <Image 
              src="/logov1.png" 
              alt="OnEggy Logo" 
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>

          {/* Tagline animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mt-1">
              Cloud. DevOps. Scale.
            </p>
          </motion.div>
        </div>

        {/* Progress bar line that triggers the closing of the splash screen */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 to-teal-400 origin-left"
          onAnimationComplete={() => setShow(false)}
        />
      </motion.div>
    </AnimatePresence>
  );
}
