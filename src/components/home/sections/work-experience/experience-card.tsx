import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ExperienceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonUrl: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  imageSrc,
  title,
  description,
  buttonUrl,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Skeleton className="bg-secondary flex h-50 w-full gap-4 overflow-hidden rounded-2xl border-t-3 border-t-violet-900 p-4">
        <div className="h-full w-[40%] flex-col rounded-2xl bg-violet-900"></div>
        <div className="flex w-[60%] flex-col gap-4">
          <div className="h-7 w-full rounded bg-violet-900"></div>
          <div className="h-14 w-full rounded bg-violet-900"></div>
          <div className="h-10 w-full rounded bg-violet-900"></div>
        </div>
      </Skeleton>
    );
  }

  return (
    <div className="bg-secondary flex h-50 w-full gap-4 overflow-hidden rounded-2xl border-t-3 border-t-violet-900 p-4">
      <div className="h-full w-[40%] overflow-hidden rounded-2xl">
        <img
          src={imageSrc}
          alt="project logo"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="font-poppins flex w-[60%] flex-col gap-4">
        <h1 className="text-start font-bold">{title}</h1>
        <div className="line-clamp-3 overflow-hidden text-sm md:text-start">
          <p>{description}</p>
        </div>
        <a
          href={buttonUrl}
          className="flex justify-center rounded-lg border-1 border-violet-600 bg-violet-950 py-1"
        >
          <span className="text-lg uppercase">Learn More</span>
        </a>
      </div>
    </div>
  );
};
