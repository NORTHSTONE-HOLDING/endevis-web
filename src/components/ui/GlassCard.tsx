import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

const paddings = {
  sm: "p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl",
        paddings[padding],
        hover &&
          "transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_30px_60px_-28px_rgba(201,162,39,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
