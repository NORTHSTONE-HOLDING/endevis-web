"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_72%)]" />

      <motion.div
        className="animate-blob absolute -left-24 top-10 h-80 w-80 rounded-full bg-[var(--blob-1)] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animate-blob-slow absolute -right-16 top-32 h-96 w-96 rounded-full bg-[var(--blob-2)] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -50, 30, 0],
                y: [0, 40, -25, 0],
              }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-[var(--blob-3)] blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.5, 0.8, 0.55, 0.5],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}
