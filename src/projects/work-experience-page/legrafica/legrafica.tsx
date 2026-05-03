import { Card } from "@/components/home/sections/work-experience/experience";
import { ExperienceHero } from "@/components/work-experience";

export const Legrafica = () => {
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
          MY <span className="text-blue-primary">PROJECTS</span> AT
        </h1>
        <img
          src="/projects/legrafica.svg"
          alt="Legrafica logo"
          className="w-35"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          backgroundImage="/projects/umana/umana-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.webp"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className="text-gray-400">
              November 2024 - <span className="">February 2025</span>
            </p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/umana/umana-logo-text.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Umana is an online platform that offers routines, recipes, and personalized plans to improve health."
          linkUrl="/umana-web"
        />
        <Card
          backgroundImage="/projects/gng/gng-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.webp"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className="text-gray-400">
              February 2025 - <span className="">March 2025</span>
            </p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/gng/gng-logo.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Glam N Glow by Ale Murillo is a beauty studio offering makeup, hairstyling, and treatments to enhance natural beauty with style and quality."
          linkUrl="/gng-web"
        />
        <Card
          backgroundImage="/projects/cbc/cbc-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.webp"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className="text-gray-400">
              February 2025 - <span className="">March 2025</span>
            </p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/cbc/cbc-logo.svg"
                alt="Legrafica logo"
                className="w-15"
              />
              <div className="font-alegreya font-normal">
                <span>Colegio Bicultural Cananea</span>
              </div>
            </div>
          }
          description="Colegio Bicultural Cananea offers bilingual education and holistic development. Its website provides information on programs, values, and the admissions process."
          linkUrl="/cbc-web"
        />
        <Card
          backgroundImage="/projects/revolt/revolt-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.webp"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className="text-gray-400">
              February 2025 - <span className="">March 2025</span>
            </p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/revolt/revolt-logo.svg"
                alt="Legrafica logo"
                className="w-40"
              />
            </div>
          }
          description="Revolt offers solar energy solutions to reduce costs and protect the environment. Their page presents the company, its values, and makes it easy for customers to get in touch."
          linkUrl="/revolt-web"
        />
      </div>
    </div>
  );
};
