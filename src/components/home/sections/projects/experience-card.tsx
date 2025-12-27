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
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[1px] group-hover:bg-black/40 transition-colors duration-300">
              <div className="text-center px-4">
                <div className="mb-2">
                  <svg
                    className="w-10 h-10 mx-auto text-blue-400 animate-pulse drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <p className="text-white font-poppins font-semibold text-sm md:text-base drop-shadow-lg">
                  {constructionMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedContent>
  );
};