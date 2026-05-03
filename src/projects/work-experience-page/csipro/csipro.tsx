import { Card } from "@/components/home/sections/work-experience/experience";
import { ExperienceHero } from "@/components/work-experience";

export const Csipro = () => {
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
      <Card
        backgroundImage="/projects/csipro/csi-slide4.webp"
        avatarSrc="/work-experience/csipro/csi-logo.webp"
        authorName={
          <div className="flex items-center gap-2">
            <img
              src="/projects/csipro.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              CSI {""}
              <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                PRO
              </span>
            </div>
          </div>
        }
        readTime={
          <p className="text-gray-400">
            November 2023 - <span className="italic">present</span>
          </p>
        }
        title={
          <div className="flex items-center gap-2">
            <img
              src="/projects/csipro.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              CSI PRO {""}
              <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                REBOOT
              </span>
            </div>
          </div>
        }
        description="CSI PRO REBOOT is a platform that showcases the work, projects, and impact of the CSI PRO lab at the University of Sonora."
        linkUrl="/csipro-web"
      />
    </div>
  );
};
