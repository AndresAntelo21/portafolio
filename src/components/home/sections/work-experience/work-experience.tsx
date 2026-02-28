
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        <ExperienceCard
          imageSrc="/work-experience/unison/unison-logo.webp"
          hoverImageSrc="/work-experience/unison/unison-hover.webp"
          linkUrl="/unison"
        />
        <ExperienceCard
          imageSrc="/work-experience/csipro/csi-logo.webp"
          hoverImageSrc="/work-experience/csipro/csi-hover.webp"
          linkUrl="/csipro"
        />
        <ExperienceCard
          imageSrc="/work-experience/telsoluciones/telsoluciones-logo.webp"
          hoverImageSrc="/work-experience/telsoluciones/bg-telsoluciones.webp"
          linkUrl="/telsoluciones"
        />
        <ExperienceCard
          imageSrc="/work-experience/legrafica/legrafica-logo.webp"
          hoverImageSrc="/work-experience/legrafica/legrafica-hover.webp"
          linkUrl="/legrafica"
        />
        <ExperienceCard
          imageSrc="/work-experience/vincco/bg-vincco.webp"
          hoverImageSrc="/work-experience/vincco/bg-site.webp"
          linkUrl="/vincco"
        />
        <ExperienceCard
          imageSrc="/work-experience/vado/vado.webp"
          hoverImageSrc="/work-experience/vado/vado.webp"
          isUnderConstruction={true}
          constructionMessage="Portfolio under construction"
        />
      </div>
    </div >
  );
};
