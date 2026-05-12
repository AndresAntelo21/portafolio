import { ExperienceHero } from "@/components/work-experience";
import { ProjectCardsGrid } from "@/components/home/sections/projects/project-cards-grid";
import {
  WORK_EXPERIENCE_PROJECT_IDS,
  getHomeProjectEntriesByIds,
} from "@/constants/home-project-entries";

export const Unison = () => {
  const projectEntries = getHomeProjectEntriesByIds(
    WORK_EXPERIENCE_PROJECT_IDS.unison,
  );

  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <ExperienceHero
        accentColor="var(--color-unison)"
        backgroundImage="/work-experience/unison/unison-banner.png"
        badgeIcon={
          <img
            src="/projects/unison.svg"
            alt="University of Sonora"
            className="size-14 drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] md:size-20"
          />
        }
        titleLine1="Engineering excellence &"
        titleLine2="Academic innovation"
        description={
          <>
            The{" "}
            <span className="text-unison font-bold">University of Sonora</span>{" "}
            is a leading institution in higher education and research in
            northwestern <span className="text-unison font-bold">Mexico</span>.
          </>
        }
      />
      <div id="unison-projects" className="flex scroll-mt-24 flex-wrap gap-4">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MY <span className="text-unison font-bold">PROJECTS</span> AT
        </h1>
        <img
          src="/work-experience/unison/unison-white.svg"
          alt="University of Sonora logo"
          className="w-30"
        />
      </div>
      <ProjectCardsGrid entries={projectEntries} />
    </div>
  );
};
