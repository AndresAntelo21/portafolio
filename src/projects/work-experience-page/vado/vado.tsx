import { ExperienceHero } from "@/components/work-experience";

export const Vado = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <ExperienceHero
        accentColor="var(--blue-primary)"
        backgroundImage="/work-experience/vado/vado-banner.png"
        backgroundPosition="center 50%"
        badgeIcon={
          <img
            src="/work-experience/vado/vadodevs.svg"
            alt="Vado Devs"
            className="h-8 w-auto max-w-[min(280px,90vw)] object-contain object-center [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.5))] sm:h-10"
          />
        }
        titleLine1="Development &"
        titleLine2="Custom software"
        description={
          <>
            <span className="experience-hero-accent">Vado</span> is a{" "}
            <span className="experience-hero-accent">custom software development</span>{" "}
            company. They design and build digital solutions tailored to each
            client&apos;s needs, combining{" "}
            <span className="experience-hero-accent">engineering</span>,{" "}
            <span className="experience-hero-accent">design</span>, and a
            business-focused approach.
          </>
        }
      />
    </div>
  );
};
