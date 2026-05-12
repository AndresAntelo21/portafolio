import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { getHobbyDetailTechnologies } from "@/constants/hobby-technology-stacks";
import { getHobbyById } from "@/constants/hobbies";

const HOBBY_ACCENT = {
  accentTextClassName: "text-blue-primary",
  sidebarClassName: "border-blue-primary/25 bg-blue-primary/[0.08]",
  chipClassName: "border-blue-primary/35 bg-blue-primary/10",
  linkClassName:
    "border-blue-primary/30 bg-blue-primary/15 hover:border-blue-primary/50 hover:bg-blue-primary/25 focus-visible:ring-blue-primary/60",
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
          <h1 className="font-poppins text-3xl font-bold text-white md:text-4xl">
            {hobby.title}
          </h1>
          <p className="font-poppins text-sm tracking-[0.24em] text-blue-primary/80 uppercase">
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
        <p>{hobby.detailDescription}</p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Highlights"
        accentClassName={HOBBY_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-blue-primary">
          {hobby.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
