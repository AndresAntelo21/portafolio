import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { HobbyLevelBadge } from "@/components/home/sections/hobbies/hobby-level-badge";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { getHobbyDetailTechnologies } from "@/constants/hobby-technology-stacks";
import { getHobbyById } from "@/constants/hobbies";

const HOBBY_ACCENT = {
  accentTextClassName: "text-teal-500/75",
  sidebarClassName:
    "border-teal-900/30 bg-zinc-950/90 ring-1 ring-white/[0.04]",
  chipClassName: "border-teal-500/25 bg-teal-950/25",
  linkClassName:
    "border-white/[0.08] bg-zinc-900/80 hover:border-teal-500/30 hover:bg-zinc-800/90 focus-visible:ring-teal-400/45",
} as const;

export const HobbyDetailPage = () => {
  const { hobbyId } = useParams();
  const hobby = getHobbyById(hobbyId);

  useEffect(() => {
    if (!hobby) return;

    document.title = `${hobby.title} | Andrés Antelo Portfolio`;
  }, [hobby]);

  if (!hobby) {
    return <Navigate to="/hobbies" replace />;
  }

  return (
    <ProjectDetailLayout
      carousel={
        <ProjectImageCarousel
          slides={[{ src: hobby.coverSrc, alt: hobby.coverAlt }]}
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex min-w-0 flex-col gap-3">
            <h1 className="font-poppins text-3xl font-bold text-white md:text-4xl">
              {hobby.title}
            </h1>
            <HobbyLevelBadge level={hobby.level} />
          </div>
          <p className="font-poppins text-sm tracking-[0.24em] text-teal-500/75 uppercase">
            {hobby.category}
          </p>
        </header>
      }
      technologies={getHobbyDetailTechnologies(hobby.technologyStackId)}
      period={hobby.period}
      links={hobby.links ?? []}
      {...HOBBY_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={HOBBY_ACCENT.accentTextClassName}
      >
        {typeof hobby.detailDescription === "string" ? (
          <p>{hobby.detailDescription}</p>
        ) : (
          hobby.detailDescription
        )}
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Highlights"
        accentClassName={HOBBY_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-teal-500/70">
          {hobby.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
