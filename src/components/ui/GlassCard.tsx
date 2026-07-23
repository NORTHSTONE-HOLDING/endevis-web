import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  gradientBorder?: boolean;
};

const paddings = {
  none: "p-0",
  sm: "p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
  gradientBorder = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-3xl",
        paddings[padding],
        gradientBorder && "gradient-border",
        hover &&
          "transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-glass-strong hover:shadow-[0_30px_70px_-28px_rgba(201,163,78,0.4)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"
      />
      {children}
    </div>
  );
}
