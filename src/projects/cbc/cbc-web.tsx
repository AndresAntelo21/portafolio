import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CbCCarousel } from "@/projects/cbc/cbc-carousel";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

export const CbCWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CbCCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <h1 className="font-alegreya text-3xl font-normal">
          Colegio Bicultural Cananea
        </h1>
      </div>
      {/* cuadro de tecnologías */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-blue-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Tecnologías
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 p-2">
            <ToolsText title="React" icons={[FaReact]} />
            <ToolsText title="TypeScript" icons={[BiLogoTypescript]} />
            <ToolsText title="React Router" icons={[SiReactrouter]} />
            <ToolsText title="Tailwind" icons={[RiTailwindCssFill]} />
            <ToolsText title="Vite" icons={[SiVite]} />
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Periodo
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3>Febrero 2025 -</h3>
              <span className="">Marzo 2025</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Enlaces
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://colegiobc.xyz/"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-700/30 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaLink />
                  Enlace
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="font-poppins flex w-full flex-col gap-8 text-left lg:w-[60%]">
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Descripción del Proyecto</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Colegio Bicultural Cananea (CBC)</strong> es una institución educativa comprometida con el desarrollo integral de sus estudiantes, ofreciendo un <strong>modelo bilingüe de aprendizaje</strong> que fomenta el crecimiento académico, cultural y personal. Con un enfoque innovador, CBC proporciona un ambiente de aprendizaje dinámico y de alta calidad, preparando a los alumnos para los retos futuros.
            </p>
            <p>
              El sitio web del colegio ha sido diseñado para ofrecer información <strong>clara y accesible</strong> sobre sus programas educativos, valores institucionales y proceso de admisiones, facilitando que la comunidad escolar se mantenga conectada.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Información Institucional</strong>: Presentación de la misión, visión y valores fundamentales del colegio.
              </li>
              <li>
                <strong>Programas Educativos</strong>: Detalles sobre los niveles académicos y programas ofrecidos.
              </li>
              <li>
                <strong>Navegación Intuitiva</strong>: Diseño optimizado para una experiencia de usuario fluida.
              </li>
              <li>
                <strong>Diseño Moderno y Responsivo</strong>: Garantizando una experiencia sin problemas en todos los dispositivos.
              </li>
              <li>
                <strong>Sistema de Contacto</strong>: Facilitando la comunicación directa con la institución para consultas o procesos de inscripción.
              </li>
            </ul>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              El sitio web del <strong>Colegio Bicultural Cananea</strong> fue desarrollado usando tecnologías modernas para asegurar un rendimiento óptimo y una navegación eficiente.
            </p>
            <p>
              El <strong>frontend</strong> está construido con <strong>React</strong>, una de las librerías de JavaScript más populares, que proporciona una interfaz rápida e interactiva. Se utilizó <strong>TypeScript</strong> para mejorar la escalabilidad y seguridad del código, asegurando una experiencia estable para los usuarios.
            </p>
            <p>
              Para una navegación fluida entre secciones, el sitio implementa <strong>React Router</strong>, permitiendo transiciones suaves sin recargar la página. El diseño de la interfaz está elaborado con <strong>Tailwind CSS</strong>, un framework moderno que mejora la flexibilidad del diseño manteniendo una estética limpia y profesional.
            </p>
            <p>
              Finalmente, el sitio fue construido con <strong>Vite</strong>, una herramienta poderosa de desarrollo que mejora el rendimiento y reduce los tiempos de carga, garantizando una experiencia rápida y fluida en cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
