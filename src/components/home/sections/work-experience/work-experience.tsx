import { ExperienceCard } from "./experience-card";

export const WorkExperience = () => {
  return (
    <div className="font-poppins gap-1- flex flex-col gap-10 text-2xl lg:px-10 lg:text-center xl:px-55 2xl:px-200">
      <div className="flex flex-col gap-2">
        <h1 className="text-center font-bold">
          Work <span className="text-violet-600">Experience</span>
        </h1>
        <div className="h-1 w-full rounded-full bg-violet-700"></div>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceCard
          imageSrc="/public/projects/movilidad/img1.png"
          title="Movilidad"
          description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
          buttonUrl="/"
        />
        <ExperienceCard
          imageSrc="/public/projects/movilidad/img2.png"
          title="CSI PRO"
          description="We are students from the University of Sonora seeking to innovate. We develop and implement technologies, including software created by us."
          buttonUrl="/"
        />
        <ExperienceCard
          imageSrc="/public/projects/movilidad/img3.png"
          title="Umana"
          description="Umana is a website that offers exercise class services and eating plans, focused on promoting a healthy and balanced lifestyle. The page provides information on different training programs and food options designed to improve the physical and nutritional well-being of its users."
          buttonUrl="/"
        />
        <ExperienceCard
          imageSrc="/public/projects/movilidad/img4.png"
          title="CbC"
          description="Colegio BC is a school that combines academic excellence, values education, and sports development. We provide a comprehensive environment for your children to grow and succeed. "
          buttonUrl="/"
        />
      </div>
    </div>
  );
};
