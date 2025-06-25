import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
// import StarBorder from "@/components/ui/StarBorder/StarBorder";
interface ExperienceCardProps {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
  buttonUrl: string;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  title,
  description,
  buttonUrl,
  className,
}) => {
  const cardClasses = `bg-secondary flex h-50 w-full gap-4 overflow-hidden rounded-2xl border-t-3 border-t-blue-900 p-4 ${className}`;

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
      <div className={cardClasses}>
        <div className="h-full w-[40%] overflow-hidden rounded-2xl">
          <img
            src={imageSrc}
            alt="project logo"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="font-poppins flex w-[60%] flex-col gap-4">
          <div className="title-container">
            <h1 className="text-start text-3xl">{title}</h1>
          </div>
          <div className="line-clamp-3 overflow-hidden text-sm md:text-start">
            <p>{description}</p>
          </div>
          <a
            href={buttonUrl}
            className="flex justify-center rounded-lg border-1 border-blue-600 bg-blue-950 py-1"
          >
            <span className="text-lg uppercase">Learn More</span>
          </a>
        </div>
      </div>
    </AnimatedContent>
  );
};
