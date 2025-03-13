import { ProjectsCard } from "@/components/home/sections/projects/projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

export const Unison = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10">
      <div className="flex flex-row items-center justify-center gap-4 text-xl lg:text-3xl">
        <img
          src="/public/projects/unison.svg"
          alt="Logo de la Universidad de Sonora"
          className="w-15 lg:w-25"
        />
        <h1 className="font-poppins uppercase">Universidad de Sonora</h1>
      </div>
      <div className="z-10 text-justify lg:text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <ProjectsCard
        imageSrc="/public/projects/gokussj2.png"
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
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
        linkUrl="/movilidad-web"
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj2.png"
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
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
        reverse={true}
        linkUrl="/movilidad-web"
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj2.png"
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
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
