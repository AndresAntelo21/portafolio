import { ExperienceCard } from "./experience-card";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  className,
}) => {
  return (
    <div
      className={`font-poppins flex flex-col gap-10 pt-2 text-2xl lg:text-center ${className}`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-center">
          Work <span className="text-violet-600">Experience</span>
        </h1>
        <div className="h-1 w-full rounded-full bg-violet-700"></div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-950 blur-2xl md:h-90 md:w-90"></div>
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <ExperienceCard
            imageSrc="/public/projects/movilidad/img2.png"
            title={
              <div className="font-normal">
                CSI{" "}
                <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                  PRO
                </span>
              </div>
            }
            description="We are students from the University of Sonora seeking to innovate. We develop and implement technologies, including software created by us."
            buttonUrl="/"
          />
          <ExperienceCard
            imageSrc="/public/projects/movilidad/img1.png"
            title="Movilidad"
            description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
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
            description="Colegio BC is a school that combines academic excellence, values education, and sports development. We provide a comprehensive environment for your children to grow and succeed."
            buttonUrl="/"
          />
        </div>
      </div>
    </div>
  );
};
