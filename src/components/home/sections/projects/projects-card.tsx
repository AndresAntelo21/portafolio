import { FaCalendar } from "react-icons/fa";
import { IconType } from "react-icons";

interface ProjectsCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  icons: IconType[];
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  icons,
}) => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="absolute top-20 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-950 blur-2xl md:h-90 md:w-90"></div>
      <div className="relative h-50 w-full overflow-hidden rounded-2xl bg-violet-900">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <FaCalendar className="text-violet-500" />
          <span className="text-sm text-violet-500">{date}</span>
        </div>
        <div className="flex flex-row-reverse gap-4 text-2xl text-gray-300">
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-poppins text-medium text-2xl">{title}</h1>
        <div className="bg-opacity-10 bg-secondary h-25 rounded-md p-2">
          <p className="line-clamp-4 text-justify text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
