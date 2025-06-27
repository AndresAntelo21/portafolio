// import { ProjectsCard } from "./projects-card";
// import { FaReact } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiVite, SiJupyter, SiReactrouter } from "react-icons/si";
// import { FaVuejs, FaJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
// import { BiLogoTypescript } from "react-icons/bi";
// import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";

import { Card } from "../work-experience/prueba";

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (

    <div className={`font-poppins flex flex-col gap-4 py-10 ${className}`}>
      <h1 className="relative z-10 text-left text-3xl font-bold">
        MIS <span className="text-blue-primary">PROYECTOS</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        <Card
          backgroundImage="/projects/csipro/csi-slide4.webp"
          avatarSrc="/work-experience/csipro/csi-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/csipro.svg"
                alt="Logo del laboratorio CSI PRO"
                className="h-8 w-8"
              />
              <div className="font-normal">
                CSI  {""}
                <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                  PRO
                </span>
              </div>
            </div>
          }
          readTime={
            <p className=" text-gray-400">Noviembre 2023 - <span className="italic">presente</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/csipro.svg"
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
          description="CSI PRO REBOOT es una plataforma que muestra el trabajo, proyectos e impacto del laboratorio CSI PRO de la Universidad de Sonora."
          linkUrl="/csipro-web"
        />
        <Card
          backgroundImage="/projects/umana/umana-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del laboratorio CSI PRO"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Noviembre 2024 - <span className="">Febrero 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/umana/umana-logo-text.svg"
                alt="Logo de legrafica"
                className="w-50"
              />
            </div>
          }
          description="Umana es una plataforma en línea que ofrece rutinas, recetas y planes personalizados para mejorar la salud."
          linkUrl="/umana-web"
        />
        <Card
          backgroundImage="/projects/gng/gng-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/gng/gng-logo.svg"
                alt="Logo de legrafica"
                className="w-50"
              />
            </div>
          }
          description="Glam N Glow by Ale Murillo es un estudio de belleza exclusivo que resalta la esencia única de cada persona. Ofrece maquillaje, peinados y tratamientos faciales con profesionalismo y calidad."
          linkUrl="/gng-web"
        />
        <Card
          backgroundImage="/projects/cbc/cbc-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/cbc/cbc-logo.svg"
                alt="Logo de legrafica"
                className="w-15"
              />
              <div className="font-alegreya font-normal">
                <span>Colegio Bicultural Cananea</span>
              </div>
            </div>
          }
          description="El Colegio Bicultural Cananea ofrece educación bilingüe y formación integral. Su sitio web informa sobre programas, valores y proceso de admisión."
          linkUrl="/cbc-web"
        />
        <Card
          backgroundImage="/projects/revolt/revolt-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/revolt/revolt-logo.svg"
                alt="Logo de legrafica"
                className="w-40"
              />
            </div>
          }
          description="Revolt ofrece soluciones de energía solar para reducir costos y cuidar el medio ambiente. Su página presenta la empresa, sus valores y facilita el contacto con clientes."
          linkUrl="/revolt-web"
        />
        <Card
          backgroundImage="/projects/movilidad/movilidad-slide1.webp"
          avatarSrc="/work-experience/unison/unison-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/work-experience/unison/unison-white.svg"
                alt="Logo de la Universidad de Sonora"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2024 - <span className="">Noviembre 2024</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/movilidad/movilidad-logo.svg"
                alt="Logo de legrafica"
                className="w-7"
              />
              <div className="font-normal">
                <span>MOVILIDAD URBANA</span>
              </div>
            </div>
          }
          description="Movilidad Urbana analiza y visualiza el tráfico para mejorar la movilidad en la ciudad. Su sitio web ofrece datos y análisis accesibles para tomadores de decisiones."
          linkUrl="/movilidad-web"
        />
      </div>
    </div>
  );
};
