import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ExperienceHeroProps = {
  backgroundImage: string;
  badgeIcon?: ReactNode;
  /** Omit or leave empty to show only `badgeIcon` (no text beside the logo). */
  badgeLabel?: string;
  titleLine1: string;
  titleLine2: string;
  description: ReactNode;
  /**
   * Brand accent for this experience (second title line). Also exposed as
   * `var(--experience-hero-accent)` — use class `experience-hero-accent` on spans inside `description`.
   */
  accentColor: string;
  /** Solid color at bottom of fade (match next section / page bg) */
  fadeToColor?: string;
  /** Hero band height as % of small viewport height */
  viewportHeightSvh?: number;
  /** CSS `background-position` for the hero image (e.g. `center 28%` to show the frame higher). */
  backgroundPosition?: string;
};

const DEFAULT_FADE = "hsl(240 7% 6%)";

/** Image + dim layer fade out toward the bottom (mask alpha). */
const IMAGE_FADE_MASK =
  "linear-gradient(to bottom, black 0%, black 32%, rgba(0,0,0,0.35) 55%, transparent 100%)";

export function ExperienceHero({
  backgroundImage,
  badgeIcon,
  badgeLabel,
  titleLine1,
  titleLine2,
  description,
  accentColor,
  fadeToColor = DEFAULT_FADE,
  viewportHeightSvh = 75,
  backgroundPosition = "center center",
}: ExperienceHeroProps) {
  const bandHeight = `${viewportHeightSvh}svh`;
  const badgeText = badgeLabel?.trim() ?? "";
  const logoOnlyBadge = Boolean(badgeIcon) && !badgeText;
  const showBadgeRow = Boolean(badgeIcon) || Boolean(badgeText);

  const sectionStyle = {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
    marginRight: "calc(50% - 50vw)",
    "--experience-hero-accent": accentColor,
  } as CSSProperties;

  return (
    <section className="font-poppins relative isolate" style={sectionStyle}>
      <div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-10 text-center sm:py-14"
        style={{
          height: bandHeight,
          minHeight: bandHeight,
          maxHeight: bandHeight,
        }}
      >
        <div
          className="absolute inset-0 w-full"
          style={{
            WebkitMaskImage: IMAGE_FADE_MASK,
            maskImage: IMAGE_FADE_MASK,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
          aria-hidden
        >
          <div
            className="absolute inset-0 w-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition,
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 28%, ${fadeToColor} 100%)`,
          }}
          aria-hidden
        />

        <div className="relative z-10 flex w-full flex-col items-center gap-4 md:gap-5">
          {showBadgeRow ? (
            logoOnlyBadge ? (
              badgeIcon
            ) : (
              <div
                className={cn(
                  "inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-white/95 uppercase backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-[11px]",
                )}
              >
                {badgeIcon ? (
                  <span className="flex shrink-0 items-center [&_img]:size-4 sm:[&_img]:size-5">
                    {badgeIcon}
                  </span>
                ) : null}
                {badgeText ? <span>{badgeText}</span> : null}
              </div>
            )
          ) : null}

          <h1 className="flex max-w-2xl flex-col gap-1 text-3xl leading-[1.1] font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
            <span className="text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              {titleLine1}
            </span>
            <span
              className="[text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
              style={{ color: accentColor }}
            >
              {titleLine2}
            </span>
          </h1>

          <p className="w-full max-w-4xl text-xs leading-relaxed text-pretty text-white/88 sm:text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
