import { ProjectsCard } from "./projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div className={`font-poppins flex flex-col gap-15 py-10 ${className}`}>
      <ProjectsCard
        imageSrc="/public/projects/gokussj1.png"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/public/projects/csipro.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              CSI PRO{" "}
              <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                WEB
              </span>
            </div>
          </div>
        }
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[FaReact, RiTailwindCssFill]}
        linkUrl="/csipro-web"
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj2.png"
        title="Movilidad"
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
        reverse={true}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj3.png"
        title="Umana"
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[RiTailwindCssFill, SiVite]}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj4.png"
        title="CbC"
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[FaReact, SiVite]}
        reverse={true}
      />
    </div>
  );
};
