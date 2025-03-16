import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CsiCarousel } from "@/projects/csipro-web/csipro-carousel";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiReactrouter } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
export const CsiproWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CsiCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/public/projects/csipro.svg"
          alt="Logo del laboratorio CSI PRO"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-3xl font-normal">
          CSI PRO <span className="rounded-xl bg-violet-800 px-2">REBOOT</span>
        </h1>
      </div>
      {/* cuadro de tecnologias */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-violet-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Technologies
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 p-2">
            <ToolsText title="React" icons={[FaReact]} />
            <ToolsText title="Typescript" icons={[BiLogoTypescript]} />
            <ToolsText title="React Router" icons={[SiReactrouter]} />
            <ToolsText title="Tailwind" icons={[RiTailwindCssFill]} />
            <ToolsText title="Vite" icons={[SiVite]} />
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Period
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3 className="">November 2023 -</h3>
              <span className="italic">Present</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Links
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://github.com/CSIPro/csipro"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Front-end Repository
                </span>
              </a>
              <a
                href="https://csipro.isi.unison.mx/"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-700/30 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaLink />
                  Link
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="font-poppins flex w-full flex-col gap-2 p-2 text-left lg:w-[60%]">
          <div className="flex flex-col gap-4 py-5">
            <p>
              CSI PRO REBOOT is the official platform of the CSI PRO laboratory
              at the Universidad de Sonora. Here, you will find information
              about our team of researchers, collaborators, and students, as
              well as the innovative projects we are leading in various
              scientific and technological fields.
            </p>
          </div>
          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <h1>Project Description</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
