import { ProjectsCard } from "@/components/home/sections/projects/projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiReactrouter } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
export const Csipro = () => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-row items-center justify-center gap-4 text-3xl">
        <img
          src="/public/projects/csipro.svg"
          alt="logo del laboratorio CSI PRO"
          className="h-10 w-10"
        />
        <h1>
          CSI <span className="rounded-lg bg-violet-700 px-2">PRO</span>
        </h1>
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
    </div>
  );
};
