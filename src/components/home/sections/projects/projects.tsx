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
                REBOOT
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
        title={
          <div className="flex items-center gap-2 lg:flex-row-reverse">
            <img
              src="/public/projects/movilidad/movilidad-logo.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              <span>MOVILIDAD URBANA</span>
            </div>
          </div>
        }
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
        linkUrl="/movilidad-web"
        reverse={true}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj3.png"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/public/projects/umana/umana-logo-text.svg"
              alt="Logo de la pagina web de Umana"
              className="h-8 w-40"
            />
          </div>
        }
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[RiTailwindCssFill, SiVite]}
        linkUrl="/umana-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/kamehameha.png"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/public/projects/gng/gng-logo.svg"
              alt="Logo de Glam N Glow"
              className="h-8 w-50"
            />
          </div>
        }
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[RiTailwindCssFill, SiVite]}
        reverse={true}
        linkUrl="/gng-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/gokussj4.png"
        title={
          <div className="flex items-center gap-2">
            <div className="font-alegreya font-normal">
              <span>Colegio Bicultural Cananea</span>
            </div>
          </div>
        }
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[FaReact, SiVite]}
        linkUrl="/cbc-web"
      />
    </div>
  );
};
