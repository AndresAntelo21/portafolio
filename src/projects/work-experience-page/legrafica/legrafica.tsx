import { ExperienceHero } from "@/components/work-experience";
import { ProjectCardsGrid } from "@/components/home/sections/projects/project-cards-grid";
import {
  WORK_EXPERIENCE_PROJECT_IDS,
  getHomeProjectEntriesByIds,
} from "@/constants/home-project-entries";

export const Legrafica = () => {
  const projectEntries = getHomeProjectEntriesByIds(
    WORK_EXPERIENCE_PROJECT_IDS.legrafica,
  );

  return (
    <div className="flex flex-col justify-center gap-10 md:items-start">
      <ExperienceHero
        accentColor="var(--color-legrafica)"
        backgroundImage="/work-experience/legrafica/legrafica-banner.png"
        badgeIcon={
          <img
            src="/projects/legrafica.svg"
            alt="Legrafica"
            className="h-12 w-auto max-w-[min(200px,85vw)] object-contain [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.5))]"
          />
        }
        titleLine1="Creativity &"
        titleLine2="Technology for brands"
        description={
          <>
            Legrafica is a{" "}
            <span className="text-legrafica font-bold">marketing</span> and{" "}
            <span className="text-legrafica font-bold">
              digital development
            </span>{" "}
            agency specialized in integrated experiences for brands and
            consumers. They combine{" "}
            <span className="text-legrafica font-bold">creativity</span> and{" "}
            <span className="text-legrafica font-bold">technology</span> to
            drive <span className="text-legrafica font-bold">growth</span> and
            authentic connections with the audience.
          </>
        }
      />
      <div className="flex flex-wrap gap-4">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MY <span className="text-legrafica">PROJECTS</span> AT
        </h1>
        <img
          src="/projects/legrafica.svg"
          alt="Legrafica logo"
          className="w-35"
        />
      </div>
      <ProjectCardsGrid entries={projectEntries} />
    </div>
  );
};
