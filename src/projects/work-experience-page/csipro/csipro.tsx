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
      <div className="font-poppins z-10 text-justify lg:text-center">
        <p>
          At CSI <span className="rounded-md bg-violet-800 px-1">PRO</span>, a
          laboratory within the{" "}
          <span className="text-violet-600">Universidad de Sonora</span>, we are
          a group of students passionate about{" "}
          <span className="text-violet-600">software development</span>. Here,
          we combine our knowledge, creativity, and teamwork to build projects
          that solve real problems. Whether it's developing apps, designing
          systems, or experimenting with new technologies, CSI{" "}
          <span className="rounded-md bg-violet-800 px-1">PRO</span> is our
          space to learn, create, and grow as future professionals in the tech
          industry.
        </p>
      </div>

      <ProjectsCard
        imageSrc="/public/projects/csipro/csipro-cover.webp"
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
        description="CSI PRO REBOOT is a platform created to showcase
              the CSI PRO laboratory at the
              Universidad de Sonora. The main goal of this
              website is to highlight the lab's work, projects, and impact on
              both students and professionals.
              The site was developed to address the lack of awareness about the
              lab among students, providing them with valuable information and
              opportunities to get involved in its activities."
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
