import { FaCalendar } from "react-icons/fa";
import { IconType } from "react-icons";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";

interface ProjectsCardProps {
  imageSrc: string;
  date: string;
  title: React.ReactNode;
  description: string;
  icons: IconType[];
  className?: string;
  reverse?: boolean;
  linkUrl?: string;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  icons,
  className,
  reverse = false,
  linkUrl,
}) => {
  const handleRedirect = () => {
    if (linkUrl) {
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
        className={`relative flex cursor-pointer flex-col gap-4 ${
          reverse ? "lg:flex-row" : "lg:flex-row-reverse"
        } ${className} `}
        onClick={handleRedirect}
      >
        <div className="absolute top-20 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-950 blur-2xl md:h-90 md:w-90 lg:hidden"></div>
        <div className="relative h-50 w-full overflow-hidden rounded-2xl bg-blue-900 lg:h-75 lg:w-[60%]">
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className={`flex w-full flex-col gap-4 lg:absolute lg:flex-col-reverse`}
        >
          <div
            className={`flex flex-row items-center justify-between ${reverse ? "lg:justify-end" : "lg:justify-start"}`}
          >
            <div className="flex items-center gap-4 lg:hidden">
              <FaCalendar className="text-blue-500" />
              <span className="text-sm text-blue-500">{date}</span>
            </div>
            <div
              className={`flex flex-row-reverse gap-4 text-2xl text-gray-300 lg:text-3xl ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} `}
            >
              {icons.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          </div>
          <div
            className={`${reverse ? "lg:items-end" : "lg:items-start"} flex flex-col gap-2`}
          >
            <div className="hidden lg:block">
              <div
                className={`flex items-center gap-2 text-sm ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <FaCalendar className="text-blue-500" />
                <span className="text-sm text-blue-500">{date}</span>
              </div>
            </div>
            <h1 className="font-poppins text-medium text-2xl lg:text-3xl">
              {title}
            </h1>
            <div className="bg-secondary lg:bg-secondary/70 lg:rounded-x h-25 w-full rounded-md p-2 lg:mt-5 lg:h-40 lg:w-2/3 lg:p-4">
              <p
                className={`line-clamp-4 text-start text-sm lg:line-clamp-5 lg:text-base ${reverse ? "lg:text-right" : "lg:text-left"}`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};
