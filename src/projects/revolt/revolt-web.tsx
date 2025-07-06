import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { RevoltCarousel } from "@/projects/revolt/revolt-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export const RevoltWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <RevoltCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/revolt/revolt-logo.svg"
          alt="Logo de Revolt"
          className="w-50"
        />
      </div>
      {/* cuadro de tecnologías */}
      <div className="flex w-full flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-blue-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Tecnologías
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 p-2">
            <ToolsText title="Vue.js" icons={[FaVuejs]} />
            <ToolsText title="JavaScript" icons={[FaJs]} />
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
              <h3>Diciembre 2024 -</h3>
              <span className="">Febrero 2025</span>
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
                href="https://revoltmx.com/"
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
              <strong>Revolt</strong> es una empresa enfocada en{" "}
              <strong>soluciones de energía sostenible</strong>, que ofrece sistemas de paneles solares para ayudar a hogares y negocios a reducir costos de electricidad mientras minimizan su impacto ambiental. Con un enfoque en innovación y eficiencia, Revolt busca proveer tecnología limpia y accesible para impulsar un futuro más sostenible.
            </p>
            <p>
              La página de aterrizaje de <strong>Revolt</strong> está diseñada para mostrar la empresa, sus valores y los beneficios de adoptar energía solar, facilitando también que clientes potenciales puedan contactarlos.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Diseño moderno y atractivo</strong>: Una interfaz visualmente atractiva que refuerza la identidad de la marca.
              </li>
              <li>
                <strong>Información clara y estructurada</strong>: Explica las ventajas de la energía solar y cómo Revolt puede ayudar a sus clientes en la transición.
              </li>
              <li>
                <strong>Diseño optimizado para conversión</strong>: Secciones estratégicamente diseñadas para guiar a los usuarios a solicitar información o cotización.
              </li>
              <li>
                <strong>Diseño responsivo</strong>: Garantiza una navegación fluida en cualquier dispositivo, incluyendo móvil, tablet y escritorio.
              </li>
              <li>
                <strong>Opciones rápidas de contacto</strong>: Formularios integrados y enlaces directos para una comunicación sencilla con la empresa.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              La página de <strong>Revolt</strong> está desarrollada usando{" "}
              <strong>Vue.js</strong>, un framework de JavaScript que permite interfaces rápidas y dinámicas. Para manejar la navegación fluida entre secciones sin recargar la página, se usa <strong>Vue Router</strong>, asegurando una experiencia de navegación continua.
            </p>
            <p>
              El diseño de la interfaz está construido con{" "}
              <strong>HTML y CSS puros</strong>, manteniendo un aspecto limpio y profesional. Además, <strong>JavaScript</strong> mejora la interactividad y optimiza la experiencia del usuario, haciendo la información fácilmente accesible y atractiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
