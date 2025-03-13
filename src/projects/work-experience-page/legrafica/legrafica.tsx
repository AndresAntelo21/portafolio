import { ProjectsCard } from "@/components/home/sections/projects/projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

export const Legrafica = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-row items-center justify-center gap-4 text-3xl">
        <img
          src="/public/projects/legrafica.svg"
          alt="logo del Legrafica"
          className="w-40"
        />
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
        reverse={true}
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
        reverse={true}
        linkUrl="/cbc-web"
      />
    </div>
  );
};
