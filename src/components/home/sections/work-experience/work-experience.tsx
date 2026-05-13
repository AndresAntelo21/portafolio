import { useLocation } from "react-router-dom";
import { ExperienceCard } from "../projects/experience-card";

interface WorkExperienceProps {
  className?: string;
}

const EXPERIENCE_CARDS = [
  {
    imageSrc: "/work-experience/unison/unisonv2.png",
    hoverImageSrc: "/work-experience/unison/unisonv2-hover.png",
    linkUrl: "/unison",
  },
  {
    imageSrc: "/work-experience/csipro/csipro-cover.webp",
    hoverImageSrc: "/work-experience/csipro/csipro-hover.webp",
    linkUrl: "/csipro",
  },
  {
    imageSrc: "/work-experience/telsoluciones/telsolucionesv2.png",
    hoverImageSrc: "/work-experience/telsoluciones/telsolucionesv2-hover.png",
    linkUrl: "/telsoluciones",
  },
  {
    imageSrc: "/work-experience/legrafica/legrafica-cover.webp",
    hoverImageSrc: "/work-experience/legrafica/legrafica-hover.webp",
    linkUrl: "/legrafica",
  },
  {
    imageSrc: "/work-experience/vincco/vinccov2.png",
    hoverImageSrc: "/work-experience/vincco/vinccov2-hover.png",
    linkUrl: "/vincco",
  },
  {
    imageSrc: "/work-experience/vado/vado.png",
    hoverImageSrc: "/work-experience/vado/vado-hover.png",
    linkUrl: "/vado",
  },
] as const;

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
        {EXPERIENCE_CARDS.map((card, index) => (
          <ExperienceCard
            key={card.linkUrl}
            imageSrc={card.imageSrc}
            hoverImageSrc={card.hoverImageSrc}
            linkUrl={card.linkUrl}
            animationIndex={index}
          />
        ))}
      </div>
    </div>
  );
};
