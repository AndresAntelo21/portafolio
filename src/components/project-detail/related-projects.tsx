import { Link } from "react-router-dom";
import { RelatedProjectTitle } from "@/components/project-detail/related-project-title";
import { RelatedProjectTechnologyRow } from "@/components/project-detail/related-project-technology-row";
import { getRelatedProjects } from "@/constants/related-projects";
import { cn } from "@/lib/utils";

type RelatedProjectsProps = {
  projectId: string;
  limit?: number;
  className?: string;
  accentClassName?: string;
};

export function RelatedProjects({
  projectId,
  limit = 3,
  className,
  accentClassName = "text-csipro",
}: RelatedProjectsProps) {
  const relatedProjects = getRelatedProjects(projectId, limit);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-zinc-950/95 p-6 shadow-xl shadow-black/30 ring-1 ring-white/[0.05] md:p-8",
        className,
      )}
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2
          className={cn(
            "font-poppins text-sm font-semibold tracking-[0.24em] uppercase",
            accentClassName,
          )}
        >
          Related projects
        </h2>
        <Link
          to="/projects"
          className="font-poppins text-sm text-white/70 transition-colors duration-300 hover:text-white"
        >
          View all projects
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {relatedProjects.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-zinc-950/90 shadow-lg shadow-black/30 ring-1 ring-white/[0.05] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-2xl hover:shadow-black/45"
          >
            <Link
              to={project.to}
              aria-label={`View project ${project.name}`}
              className={cn(
                "group/preview relative block aspect-[16/10] overflow-hidden outline-none ring-inset focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
                project.previewFocusRingClassName,
              )}
            >
              <img
                src={project.coverSrc}
                alt={project.coverAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100"
                aria-hidden
              >
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
                  View project
                </span>
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                aria-hidden
              />
            </Link>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-3">
              <div className="flex min-h-[2.75rem] flex-col gap-2">
                <p className={cn("text-xs font-medium", project.categoryClassName)}>
                  {project.category}
                </p>
                <div className="min-w-0 [&_img]:max-h-8 [&_img]:w-auto [&_span]:text-lg">
                  <RelatedProjectTitle projectId={project.id} />
                </div>
              </div>

              <p className="line-clamp-2 text-sm leading-relaxed text-white/75">
                {project.description}
              </p>

              <ul
                className="mt-auto flex flex-nowrap items-center gap-2.5 overflow-hidden border-t border-white/[0.08] pt-3 text-lg text-white/90"
                aria-label={`Technologies used in ${project.name}`}
              >
                <RelatedProjectTechnologyRow stackId={project.technologyStackId} />
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
