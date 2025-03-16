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
        description="CSI PRO REBOOT is the official platform of the CSI PRO laboratory at the Universidad de Sonora. Here, you will find information about our team of researchers, collaborators, and students, as well as the innovative projects we are leading in various scientific and technological fields."
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
        description="Umana is a fitness app created by Anabel Soto, designed to help you transform your physical and mental well-being. Access workout videos, fitness routines, live classes, healthy recipes, and a community chat to stay motivated every step of the way."
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
        description="Glam N Glow by Ale Murillo is a beauty studio dedicated to highlighting the essence and uniqueness of each individual. They specialize in enhancing natural beauty through personalized services. Their website is designed to showcase their service catalog and streamline the booking process, making it easy and efficient to schedule appointments. With a focus on professionalism, innovation, and quality, Glam N Glow creates unique experiences that reflect style and confidence."
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
        description="The Colegio Bicultural Cananea is an educational institution committed to the comprehensive development of its students. Through its website, parents and students can explore the academic offerings, facilities, and values that guide the school's education. The platform is designed to provide clear and accessible information about educational programs, extracurricular activities, and enrollment processes, making it easier to connect with the institution."
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
        date="26/12/2024"
        description="Revolt is a Mexican company with over 20 years of experience in manufacturing voltage regulation, transformation, and conditioning equipment. Its mission is to provide high-quality energy solutions that ensure an efficient and reliable power supply.

Through its website, customers can learn more about the company, its values, and the services it offers, including voltage regulators, transformers, surge suppressors, uninterruptible power supply (UPS) systems, and voltage studies. Revolt stands out for its commitment to innovation, honesty, and quality, offering tailored solutions to optimize its clients' energy performance."
        icons={[FaVuejs, FaJs]}
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
