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
              CSI PRO {""}
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
        reverse={true}
        linkUrl="/cbc-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/revolt/revolt-cover.png"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/public/projects/revolt/revolt-logo.svg"
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
        linkUrl="/revolt-web"
      />

      <ProjectsCard
        imageSrc="/public/projects/movilidad/movilidad-cover.png"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/public/projects/movilidad/movilidad-logo.svg"
              alt="Logo de movilidad urbana"
              className="h-8 w-8"
            />
            <div className="font-normal">
              <span>MOVILIDAD URBANA</span>
            </div>
          </div>
        }
        date="08/02/2024"
        description="Movilidad Urbana is a project designed to
              analyze, visualize, and optimize traffic and urban mobility. By
              leveraging technology, it provides valuable insights to aid in
              transportation planning, route optimization, and traffic
              congestion reduction.
              The Movilidad Urbana website presents data,
              analysis, and visualizations on traffic patterns and urban
              movement, making key information accessible to researchers, urban
              planners, and mobility authorities."
        icons={[FaPython, FaHtml5, FaCss3Alt, FaJs, SiJupyter]}
        reverse={true}
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
