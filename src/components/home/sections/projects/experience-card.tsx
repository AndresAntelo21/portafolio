import { motion } from "motion/react";

interface ExperienceCardProps {
  imageSrc: string;
  hoverImageSrc: string;
  linkUrl?: string;
  isUnderConstruction?: boolean;
  constructionMessage?: string;
}

const cardMotion = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  hoverImageSrc,
  linkUrl,
  isUnderConstruction = false,
  constructionMessage = "Portfolio under construction",
}) => {
  const handleRedirect = () => {
    if (linkUrl && !isUnderConstruction) {
      window.location.href = linkUrl;
    }
  };

  return (
    <motion.div {...cardMotion}>
      <div
        role={linkUrl && !isUnderConstruction ? "link" : undefined}
        tabIndex={linkUrl && !isUnderConstruction ? 0 : undefined}
        onKeyDown={linkUrl && !isUnderConstruction ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleRedirect(); } } : undefined}
        aria-label={linkUrl && !isUnderConstruction ? "View work experience details" : "Portfolio under construction"}
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
    </motion.div>
  );
};