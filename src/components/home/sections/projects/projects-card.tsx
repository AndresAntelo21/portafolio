import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  to: string;
  /** Accesible name for the cover link (e.g. project name). */
  previewAriaLabel: string;
  coverSrc: string;
  /** Use `""` when the cover is decorative and `previewAriaLabel` carries the meaning. */
  coverAlt?: string;
  category: string;
  /** Tailwind classes for the category line (e.g. `text-csipro lg:text-csipro/85`). */
  categoryClassName?: string;
  /** Logo image, plain text, or any React node. */
  title: React.ReactNode;
  description: React.ReactNode;
  /** Fragment or list of `<li>` nodes for the tech row. */
  technologies: React.ReactNode;
  technologiesAriaLabel?: string;
  previewCtaLabel?: string;
  /** Legacy prop (column side); neutralized at `lg` in favor of the card layout. */
  reverse?: boolean;
  /** Extra classes for the preview `Link` focus ring, e.g. `focus-visible:ring-csipro`. */
  previewFocusRingClassName?: string;
  className?: string;
}

export function ProjectCard({
  to,
  previewAriaLabel,
  coverSrc,
  coverAlt = "",
  category,
  categoryClassName = "text-white/70",
  title,
  description,
  technologies,
  technologiesAriaLabel = "Tecnologías usadas en el proyecto",
  previewCtaLabel = "Ver proyecto",
  reverse = false,
  previewFocusRingClassName = "focus-visible:ring-blue-primary",
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-5",
        "lg:h-full lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/[0.08] lg:bg-gradient-to-b lg:from-white/[0.06] lg:to-zinc-950/90 lg:shadow-xl lg:shadow-black/40 lg:ring-1 lg:ring-white/[0.05] lg:transition-all lg:duration-300 lg:hover:-translate-y-1.5 lg:hover:border-white/[0.14] lg:hover:shadow-2xl lg:hover:shadow-black/55",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] min-h-[200px] w-full lg:flex lg:aspect-[16/11] lg:min-h-0 lg:w-full lg:max-w-none lg:shrink-0 lg:items-center lg:justify-center lg:overflow-hidden lg:p-0",
          reverse ? "z-0 lg:isolate lg:justify-start" : "z-0 lg:isolate lg:justify-end",
        )}
      >
        <Link
          to={to}
          aria-label={previewAriaLabel}
          className={cn(
            "group/preview relative isolate z-0 block h-full w-full overflow-hidden rounded-2xl outline-none ring-inset focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
            "lg:min-h-0 lg:w-full lg:max-w-none lg:rounded-t-2xl lg:rounded-b-none lg:ring-0 lg:shadow-none",
            previewFocusRingClassName,
          )}
        >
          <img
            src={coverSrc}
            alt={coverAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/preview:scale-[1.02]"
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center rounded-2xl bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100 lg:rounded-t-2xl lg:rounded-b-none"
            aria-hidden
          >
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
              {previewCtaLabel}
            </span>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-[2] rounded-2xl ring-1 ring-white/10 ring-inset lg:rounded-t-2xl lg:rounded-b-none"
            aria-hidden
          />
        </Link>
      </div>

      <div
        className={cn(
          "flex w-full min-w-0 flex-col-reverse gap-4 overflow-visible",
          "lg:relative lg:z-10 lg:min-h-0 lg:min-w-0 lg:flex-1 lg:flex-col lg:justify-between lg:gap-4 lg:overflow-hidden lg:p-5 lg:pt-4",
        )}
      >
        <div
          className={cn(
            "relative flex w-full min-w-0 flex-col gap-5 overflow-visible",
            reverse ? "lg:items-stretch" : "items-start",
            "lg:min-h-0 lg:flex-1 lg:flex-col lg:gap-3 lg:items-start",
          )}
        >
          <header className="flex min-w-0 flex-col gap-2 lg:gap-1.5">
            <p className={cn("text-sm font-medium", categoryClassName)}>
              {category}
            </p>
            <div className="min-w-0 lg:[&_img]:max-h-8 lg:[&_img]:w-auto lg:[&_span]:text-xl">
              {title}
            </div>
          </header>

          <div
            className={cn(
              "relative w-full overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-black/[0.4] to-black/[0.02] p-4 shadow-inner shadow-black/20 backdrop-blur-sm",
              "lg:rounded-lg lg:border-white/[0.06] lg:p-3.5 lg:shadow-none",
            )}
          >
            <div
              className={cn(
                "absolute inset-y-4 left-0 w-px lg:inset-y-5",
                reverse && "right-0 left-auto",
              )}
              aria-hidden
            />
            <div
              className={cn(
                "text-sm leading-relaxed text-white/90 sm:text-[0.9375rem] sm:leading-relaxed lg:text-[0.9375rem] lg:leading-relaxed",
                "lg:line-clamp-4 lg:text-[0.8125rem]",
              )}
            >
              {description}
            </div>
          </div>
        </div>
        <ul
          className={cn(
            "flex flex-wrap items-center gap-4 gap-y-3 text-2xl text-white/90",
            "lg:mt-auto lg:justify-start lg:gap-2.5 lg:gap-y-2 lg:text-xl lg:pt-2",
          )}
          aria-label={technologiesAriaLabel}
        >
          {technologies}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
