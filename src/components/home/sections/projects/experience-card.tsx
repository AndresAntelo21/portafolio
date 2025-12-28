import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";


interface ExperienceCardProps {
  imageSrc: string;
  hoverImageSrc: string;
  linkUrl?: string;
  isUnderConstruction?: boolean;
  constructionMessage?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  hoverImageSrc,
  linkUrl,
  isUnderConstruction = false,
  constructionMessage = "Portafolio en construcción",
}) => {
  const handleRedirect = () => {
    if (linkUrl && !isUnderConstruction) {
      window.location.href = linkUrl;
    }
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
        className={`transform transition-transform duration-300 hover:scale-105 ${linkUrl && !isUnderConstruction ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={handleRedirect}
      >
        <div className="size-40 rounded-2xl overflow-hidden w-full shadow-lg relative group">
          <img
            src={imageSrc}
            alt="Experience Image"
            className={`h-full w-full object-cover transition-opacity duration-300 ${!isUnderConstruction ? 'hover:opacity-0' : ''}`}
          />
          <img
            src={hoverImageSrc}
            alt="Hover Image"
            className={`h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${!isUnderConstruction ? 'opacity-0 hover:opacity-100' : 'opacity-0'}`}
          />
          {isUnderConstruction && (
            <div className="absolute bottom-3 right-3 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs font-semibold text-white uppercase tracking-wide drop-shadow-md">
                  {constructionMessage}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedContent>
  );
};