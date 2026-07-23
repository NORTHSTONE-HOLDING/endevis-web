"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import {
  accentTokens,
  type ProductAccent,
} from "@/lib/ecosystem";

type IconComponent = ComponentType<{ className?: string }>;

export function IconBadge({
  icon: Icon,
  className,
  size = "md",
  accent = "gold",
}: {
  icon: IconComponent;
  className?: string;
  size?: "sm" | "md" | "lg";
  accent?: ProductAccent;
}) {
  const reduce = useReducedMotion();
  const token = accentTokens[accent];
  const box =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const iconSize =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  const style = {
    color: token.hex,
    borderColor: `rgba(${token.rgb}, 0.35)`,
    background: `rgba(${token.rgb}, 0.12)`,
    boxShadow: `0 0 24px rgba(${token.rgb}, 0.18)`,
  } as CSSProperties;

  return (
    <motion.span
      className={cn(
        "inline-flex items-center justify-center rounded-2xl border",
        box,
        className,
      )}
      style={style}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.12,
              rotate: 8,
              boxShadow: `0 0 28px rgba(${token.rgb}, 0.5)`,
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
