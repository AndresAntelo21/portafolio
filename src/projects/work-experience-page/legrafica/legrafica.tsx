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
          src="/projects/legrafica.svg"
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
        imageSrc="/projects/umana/umana-cover.webp"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/projects/umana/umana-logo-text.svg"
              alt="Logo de la pagina web de Umana"
              className="h-8 w-40"
            />
          </div>
        }
        date="05/11/2024"
        description="Umana is an online platform designed to improve
            people’s health and well-being through
            virtual workouts,
            personalized nutrition,
            and an active community. It provides access to
            live and on-demand workout classes, along with a
            wide selection of healthy recipes and
            meal plans to help users maintain a balanced
            lifestyle. Umana also features a membership system that unlocks
            exclusive content, providing a more complete and personalized
            experience. Additionally, its community allows users to share
            progress, receive support, and stay motivated on their journey to a
            healthier life."
        icons={[FaVuejs, FaJs]}
        linkUrl="/umana-web"
      />

      <ProjectsCard
        imageSrc="/projects/gng/gng-cover.webp"
        title={
          <div className="flex items-center pt-2">
            <img
              src="/projects/gng/gng-logo.svg"
              alt="Logo de Glam N Glow"
              className="h-8 w-50"
            />
          </div>
        }
        date="15/02/2025"
        description="Glam N Glow by Ale Murillo is an exclusive
              beauty studio dedicated to enhancing the essence
              and uniqueness of every individual through personalized services.
              With a focus on professionalism,
              innovation, and quality, the
              studio delivers a unique experience that highlights natural
              beauty, allowing each client to showcase their style and
              confidence.
              From professional makeup and facial treatments to hairstyling and
              hair care, Glam N Glow is the perfect destination
              for those seeking top-tier beauty services.
            "
        icons={[FaVuejs, FaJs]}
        reverse={true}
        linkUrl="/gng-web"
      />

      <ProjectsCard
        imageSrc="/projects/cbc/cbc-cover.webp"
        title={
          <div className="flex items-center gap-2">
            <div className="font-alegreya font-normal">
              <span>Colegio Bicultural Cananea</span>
            </div>
          </div>
        }
        date="24/02/2025"
        description="Colegio Bicultural Cananea (CBC) is an
              educational institution committed to the comprehensive development
              of its students, offering a
               bilingual learning model that fosters academic,
              cultural, and personal growth. With an innovative approach, CBC
              provides a dynamic and high-quality learning environment,
              preparing students for future challenges.
              The school’s website has been designed to offer
               clear and accessible information about its
              educational programs, institutional values, and admissions
              process, making it easier for the school community to stay
              connected.
            "
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
        imageSrc="/projects/revolt/revolt-cover.webp"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/projects/revolt/revolt-logo.svg"
              alt="Logo del revolt"
              className="w-40"
            />
          </div>
        }
        date="26/12/2024"
        description="Revolt is a company focused on
              sustainable energy solutions, offering solar
              panel systems that help homes and businesses reduce electricity
              costs while minimizing their environmental impact. With a focus on
              innovation and efficiency, Revolt aims to provide clean and
              accessible technology to drive a more sustainable future.
              The Revolt landing page is designed to showcase
              the company, its values, and the benefits of adopting solar
              energy, while also making it easy for potential customers to get
              in touch.
            "
        icons={[FaVuejs, FaJs]}
        reverse={true}
        linkUrl="/revolt-web"
      />
    </div>
  );
};
