import { ExperienceHero } from "@/components/work-experience";
import { ProjectCardsGrid } from "@/components/home/sections/projects/project-cards-grid";
import {
  WORK_EXPERIENCE_PROJECT_IDS,
  getHomeProjectEntriesByIds,
} from "@/constants/home-project-entries";

export const Csipro = () => {
  const projectEntries = getHomeProjectEntriesByIds(
    WORK_EXPERIENCE_PROJECT_IDS.csipro,
  );

  return (
    <div className="flex flex-col justify-center gap-10 md:items-start">
      <ExperienceHero
        accentColor="#7c3aed"
        backgroundImage="/work-experience/csipro/csipro-banner.png"
        badgeIcon={
          <img
            src="/projects/csipro.svg"
            alt="CSI PRO"
            className="size-14 drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] md:size-16"
          />
        }
        titleLine1="University lab &"
        titleLine2="Software that ships"
        description={
          <>
            At CSI <span className="text-csipro font-bold">PRO</span>, a lab at
            the{" "}
            <span className="text-csipro font-bold">University of Sonora</span>,
            we develop <span className="text-csipro font-bold">software</span>{" "}
            projects applying creativity, technology, and teamwork. It&apos;s
            our space to grow as future professionals.
          </>
        }
      />
      <div className="flex gap-2">
        <div className="relative z-10 flex flex-wrap gap-2 text-left text-3xl font-bold">
          MY <span className="text-csipro">PROJECTS</span> AT
          <div className="flex items-start gap-2 font-normal">
            <img src="/projects/csipro.svg" alt="" className="size-11" />
            CSI
            <span className="font-base rounded-md bg-violet-700 px-2 text-white">
              {" "}
              PRO
            </span>
          </div>
        </div>
      </div>
      <ProjectCardsGrid entries={projectEntries} />
    </div>
  );
};
