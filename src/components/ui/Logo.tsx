import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: "h-8 w-8 text-sm", text: "text-base" },
  md: { box: "h-10 w-10 text-base", text: "text-lg" },
  lg: { box: "h-14 w-14 text-xl", text: "text-2xl" },
};

export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const s = sizes[size];
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center rounded-2xl font-bold text-graphite",
          "bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-premium",
          s.box,
        )}
        aria-hidden
      >
        E
        <span className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-bold tracking-tight text-foreground",
            s.text,
          )}
        >
          ENDEVIS
        </span>
      ) : null}
    </span>
  );
}
