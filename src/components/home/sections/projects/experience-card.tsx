import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";


interface ExperienceCardProps {
  imageSrc: string;
  hoverImageSrc: string;
  linkUrl: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  hoverImageSrc,
  linkUrl,
}) => {
  const handleRedirect = () => {
    window.location.href = linkUrl;
  };

  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <div
        className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={handleRedirect}
      >
        <div className="size-40 rounded-2xl overflow-hidden w-full shadow-lg relative">
          <img
            src={imageSrc}
            alt="Experience Image"
            className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-0"
          />
          <img
            src={hoverImageSrc}
            alt="Hover Image"
            className="h-full w-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </div>
    </AnimatedContent>
  );
};