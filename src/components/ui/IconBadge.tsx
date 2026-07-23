"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const reduce = useReducedMotion();
  const box =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const iconSize =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <motion.span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold",
        "shadow-[0_0_24px_rgba(201,163,78,0.15)]",
        box,
        className,
      )}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.12,
              rotate: 8,
              boxShadow: "0 0 28px rgba(201,163,78,0.45)",
            }
      }
      animate={
        reduce
          ? undefined
          : {
              y: [0, -4, 0],
            }
      }
      transition={{
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 260, damping: 16 },
      }}
    >
      <Icon className={iconSize} aria-hidden />
    </motion.span>
  );
}
