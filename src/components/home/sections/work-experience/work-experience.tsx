import { useLocation } from "react-router-dom";
import { ExperienceCard } from "../projects/experience-card";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  className,
}) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/work-experience";
  const SectionHeading = isStandalonePage ? "h1" : "h2";

  return (
    <div
      className={`font-poppins flex flex-col gap-10 pt-2 text-2xl lg:text-center ${className}`}
    >
      <div className="flex flex-col gap-2">
        <SectionHeading className="relative z-10 text-left text-3xl font-bold">
          WORK <span className="text-blue-primary">EXPERIENCE</span>
        </SectionHeading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ExperienceCard
          imageSrc="/work-experience/unison/unisonv2.png"
          hoverImageSrc="/work-experience/unison/unisonv2-hover.png"
          linkUrl="/unison"
        />
        <ExperienceCard
          imageSrc="/work-experience/csipro/csiprov2.png"
          hoverImageSrc="/work-experience/csipro/csiprov2-hover.png"
          linkUrl="/csipro"
        />
        <ExperienceCard
          imageSrc="/work-experience/telsoluciones/telsolucionesv2.png"
          hoverImageSrc="/work-experience/telsoluciones/telsolucionesv2-hover.png"
          linkUrl="/telsoluciones"
        />
        <ExperienceCard
          imageSrc="/work-experience/legrafica/legraficav2.png"
          hoverImageSrc="/work-experience/legrafica/legraficav2-hover.png"
          linkUrl="/legrafica"
        />
        <ExperienceCard
          imageSrc="/work-experience/vincco/vinccov2.png"
          hoverImageSrc="/work-experience/vincco/vinccov2-hover.png"
          linkUrl="/vincco"
        />
        <ExperienceCard
          imageSrc="/work-experience/vado/vado.png"
          hoverImageSrc="/work-experience/vado/vado-hover.png"
          linkUrl="/vado"
        />
      </div>
    </div>
  );
};
