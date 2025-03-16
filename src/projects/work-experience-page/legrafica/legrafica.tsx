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
        description="Umana is a fitness app created by Anabel Soto, designed to help you transform your physical and mental well-being. Access workout videos, fitness routines, live classes, healthy recipes, and a community chat to stay motivated every step of the way."
        icons={[FaVuejs, FaJs]}
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
        reverse={true}
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
        reverse={true}
        linkUrl="/revolt-web"
      />
    </div>
  );
};
