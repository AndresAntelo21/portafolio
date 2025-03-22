import { ProjectsCard } from "@/components/home/sections/projects/projects-card";
import { FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";

export const Unison = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10">
      <div className="flex flex-row items-center justify-center gap-4 text-xl lg:text-3xl">
        <img
          src="/projects/unison.svg"
          alt="Logo de la Universidad de Sonora"
          className="w-15 lg:w-25"
        />
        <h1 className="font-poppins uppercase">Universidad de Sonora</h1>
      </div>
      <div className="z-10 text-justify lg:text-center">
        <p>
          The <span className="text-blue-600">Universidad de Sonora</span> is a
          leading institution in higher education and research in northwest{" "}
          <span className="text-blue-600">Mexico</span>. With a wide range of
          academic programs and a commitment to innovation, it prepares
          professionals who contribute to the{" "}
          <span className="text-blue-600"> social</span>,{" "}
          <span className="text-blue-600"> economic</span>, and{" "}
          <span className="text-blue-600">cultural</span> development of the
          region.
        </p>
      </div>

      <ProjectsCard
        imageSrc="/projects/movilidad/movilidad-cover.webp"
        title={
          <div className="flex items-center gap-2">
            <img
              src="/projects/movilidad/movilidad-logo.svg"
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
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
