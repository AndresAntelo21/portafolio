import { ProjectsCard } from "./projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiJupyter, SiReactrouter } from "react-icons/si";
import { FaVuejs, FaJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div className={`font-poppins flex flex-col gap-15 py-10 ${className}`}>
      <ProjectsCard
        imageSrc="/public/projects/csipro/csipro-cover.png"
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
        date="10/11/2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        icons={[
          FaReact,
          BiLogoTypescript,
          SiReactrouter,
          SiVite,
          RiTailwindCssFill,
        ]}
        linkUrl="/csipro-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/umana/umana-cover.png"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/public/projects/umana/umana-logo-text.svg"
              alt="Logo de la pagina web de Umana"
              className="h-8 w-40"
            />
          </div>
        }
        date="05/11/2024"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        icons={[FaVuejs, FaJs]}
        reverse={true}
        linkUrl="/umana-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/gng/gng-cover.png"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/public/projects/gng/gng-logo.svg"
              alt="Logo de Glam N Glow"
              className="h-8 w-50"
            />
          </div>
        }
        date="15/02/2025"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        icons={[FaVuejs, FaJs]}
        linkUrl="/gng-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/cbc/cbc-cover.png"
        title={
          <div className="flex items-center gap-2">
            <div className="font-alegreya font-normal">
              <span>Colegio Bicultural Cananea</span>
            </div>
          </div>
        }
        date="24/02/2025"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        icons={[
          FaReact,
          BiLogoTypescript,
          SiReactrouter,
          SiVite,
          RiTailwindCssFill,
        ]}
        reverse={true}
        linkUrl="/cbc-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/revolt/revolt-cover.png"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/public/projects/revolt/revolt-logo.svg"
              alt="Logo del laboratorio CSI PRO"
              className="w-40"
            />
          </div>
        }
        date="08/02/2023"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaPython, FaHtml5, FaCss3Alt, FaJs, SiJupyter]}
        linkUrl="/revolt-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/movilidad/movilidad-cover.png"
        title={
          <div className="flex items-center gap-2">
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
        date="08/02/2023"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaPython, FaHtml5, FaCss3Alt, FaJs, SiJupyter]}
        reverse={true}
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
