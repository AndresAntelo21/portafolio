import { ProjectsCard } from "@/components/home/sections/projects/projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaVuejs, FaJs } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";

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
          Legrafica is a <span className="text-violet-600">marketing</span> and{" "}
          <span className="text-violet-600">digital development</span> agency
          specializing in creating comprehensive experiences for brands and
          their consumers. They combine{" "}
          <span className="text-violet-600">creativity</span> and{" "}
          <span className="text-violet-600">technology</span> to drive{" "}
          <span className="text-violet-600">growth</span> and authentic audience
          connections.
        </p>
      </div>
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
        linkUrl="/umana-web"
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
        icons={[FaVuejs, FaJs]}
        reverse={true}
        linkUrl="/revolt-web"
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
    </div>
  );
};
