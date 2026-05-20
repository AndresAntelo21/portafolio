import type { HobbyProjectLevel } from "@/constants/hobby-project-level";
import { HOBBY_LEVEL_META } from "@/constants/hobby-project-level";
import { cn } from "@/lib/utils";

type HobbyLevelBadgeProps = {
  level: HobbyProjectLevel;
  /** Dark cards: light label. Light surfaces: dark label. */
  variant?: "on-dark" | "on-light";
  className?: string;
};

export function HobbyLevelBadge({
  level,
  variant = "on-dark",
  className,
}: HobbyLevelBadgeProps) {
  const { label, color } = HOBBY_LEVEL_META[level];

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      aria-label={`Project level: ${label}`}
    >
      <span
        className="size-2.5 shrink-0 rounded-[3px]"
        style={{ backgroundColor: color }}
        aria-hidden
      />
      <span
        className={cn(
          "font-poppins text-xs font-bold tracking-[0.22em] uppercase",
          variant === "on-dark" ? "text-white/95" : "text-zinc-900",
        )}
      >
        {label}
      </span>
    </div>
  );
}
