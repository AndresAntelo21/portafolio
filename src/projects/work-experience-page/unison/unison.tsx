import { Card } from "@/components/home/sections/work-experience/experience";
import { ExperienceHero } from "@/components/work-experience";

export const Unison = () => {
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
      <Card
        backgroundImage="/projects/movilidad/movilidad-slide1.webp"
        avatarSrc="/work-experience/unison/unison-logo.webp"
        authorName={
          <div className="flex items-center gap-2">
            <img
              src="/work-experience/unison/unison-white.svg"
              alt="University of Sonora logo"
              className="w-25"
            />
          </div>
        }
        readTime={
          <p className="text-gray-400">
            February 2024 - <span className="">November 2024</span>
          </p>
        }
        title={
          <div className="flex items-center gap-2">
            <img
              src="/projects/movilidad/movilidad-logo.svg"
              alt="Logo de legrafica"
              className="w-7"
            />
            <div className="font-normal">
              <span>MOVILIDAD URBANA</span>
            </div>
          </div>
        }
        description="Urban Mobility analyzes and visualizes traffic to improve mobility in the city. Its website offers accessible data and analysis for decision-makers."
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
