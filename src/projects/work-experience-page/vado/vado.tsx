import { ExperienceHero } from "@/components/work-experience";

export const Vado = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <ExperienceHero
        accentColor="var(--color-vado)"
        backgroundImage="/work-experience/vado/vado-banner.png"
        backgroundPosition="center 50%"
        badgeIcon={
          <img
            src="/work-experience/vado/vadodevs.svg"
            alt="Vado Devs"
            className="h-12 w-auto max-w-[min(280px,90vw)] object-contain object-center [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.5))] sm:h-15"
          />
        }
        titleLine1="Development &"
        titleLine2="Custom software"
        description={
          <>
            <span className="text-vado font-bold">Vado</span> is a{" "}
            <span className="text-vado font-bold">
              custom software development
            </span>{" "}
            company. They design and build digital solutions tailored to each
            client&apos;s needs, combining{" "}
            <span className="text-vado font-bold">engineering</span>,{" "}
            <span className="text-vado font-bold">design</span>, and a
            business-focused approach.
          </>
        }
      />
    </div>
  );
};
