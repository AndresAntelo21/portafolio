import { FaCalendar } from "react-icons/fa";
import { IconType } from "react-icons";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    if (linkUrl) {
      window.location.href = linkUrl;
    }
  };

  if (loading) {
    return (
      <Skeleton
        className={`relative flex flex-col gap-4 ${reverse ? "lg:flex-row" : "lg:flex-row-reverse"} ${className}`}
      >
        <div className="absolute top-20 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-950 blur-2xl md:h-90 md:w-90 lg:hidden"></div>
        <div className="relative h-50 w-full overflow-hidden rounded-2xl bg-violet-950 lg:h-75 lg:w-[60%]"></div>
        <div
          className={`flex w-full flex-col gap-4 lg:absolute lg:flex-col-reverse`}
        >
          <div
            className={`flex flex-row items-center justify-between ${reverse ? "lg:justify-end" : "lg:justify-start"}`}
          >
            <div className="flex h-6 w-40 items-center gap-4 rounded-xl bg-violet-950 lg:hidden"></div>
            <div
              className={`flex h-6 w-30 flex-row-reverse gap-4 rounded-xl bg-violet-950 text-2xl text-gray-300 lg:h-9 lg:text-3xl`}
            ></div>
          </div>
          <div
            className={`${reverse ? "lg:items-end" : "lg:items-start"} flex flex-col gap-2`}
          >
            <div className="hidden lg:block">
              <div className="flex h-7 w-28 items-center gap-4 rounded-xl bg-violet-950 text-sm"></div>
            </div>
            <div className="font-poppins text-medium h-8 w-60 rounded-2xl bg-violet-950 text-2xl lg:text-3xl"></div>
            <div className="lg:bg-secondary h-25 w-full rounded-md bg-violet-950 p-2 lg:mt-5 lg:h-40 lg:w-2/3 lg:rounded-xl lg:p-4"></div>
          </div>
        </div>
      </Skeleton>
    );
  }
  return (
    <div
      className={`relative flex cursor-pointer flex-col gap-4 ${
        reverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className} `}
      onClick={handleRedirect}
    >
      <div className="absolute top-20 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-950 blur-2xl md:h-90 md:w-90 lg:hidden"></div>
      <div className="relative h-50 w-full overflow-hidden rounded-2xl bg-violet-900 lg:h-75 lg:w-[60%]">
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
            <FaCalendar className="text-violet-500" />
            <span className="text-sm text-violet-500">{date}</span>
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
              <FaCalendar className="text-violet-500" />
              <span className="text-sm text-violet-500">{date}</span>
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
  );
};
