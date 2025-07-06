

import { ExperienceCard } from "../projects/experience-card";


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
        <h1 className="relative z-10 text-left text-3xl font-bold">
          EXPERIENCIA DE <span className="text-blue-primary">TRABAJO</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        <ExperienceCard
          imageSrc="/work-experience/unison/unison-logo.png"
          hoverImageSrc="/work-experience/unison/unison-hover.png"
          linkUrl="/unison"
        />
        <ExperienceCard
          imageSrc="/work-experience/csipro/csi-logo.png"
          hoverImageSrc="/work-experience/csipro/csi-hover.png"
          linkUrl="/csipro"
        />
        <ExperienceCard
          imageSrc="/work-experience/telsoluciones/telsoluciones-logo.svg"
          hoverImageSrc="/work-experience/telsoluciones/bg-telsoluciones.png"
          linkUrl="/telsoluciones"
        />
        <ExperienceCard
          imageSrc="/work-experience/legrafica/legrafica-logo.png"
          hoverImageSrc="/work-experience/legrafica/legrafica-hover.png"
          linkUrl="/legrafica"
        />
      </div>
    </div >
  );
};
