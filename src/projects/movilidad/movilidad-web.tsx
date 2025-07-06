import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { MovilidadCarousel } from "@/projects/movilidad/movilidad-carousel";
import { FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
export const MovilidadWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <MovilidadCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/movilidad/movilidad-logo.svg"
          alt="Logo de movilidad urbana"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-3xl">MOVILIDAD URBANA</h1>
      </div>
      {/* cuadro de tecnologias */}
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
            <ToolsText title="Python" icons={[FaPython]} />
            <ToolsText title="HTML" icons={[FaHtml5]} />
            <ToolsText title="CSS" icons={[FaCss3Alt]} />
            <ToolsText title="JavaScript" icons={[FaJs]} />
            <ToolsText title="Jupyter Notebook" icons={[SiJupyter]} />
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">              <span className="font-poppins text-xl font-medium tracking-widest">
                Período
              </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3 className="">Febrero 2024 -</h3>
              <span className="italic">Presente</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">              <span className="font-poppins text-xl font-medium tracking-widest">
                Enlaces
              </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              {/* <a
                href="https://github.com/Kartleth/movilidad"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Github Repository
                </span>
              </a> */}
              <a
                href="https://movilidad.isi.unison.mx/"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-700/30 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaLink />
                  Ver Proyecto
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
              <strong>Movilidad Urbana</strong> es un proyecto diseñado para
              analizar, visualizar y optimizar el tráfico y la movilidad urbana. Mediante el uso de
              tecnología avanzada, proporciona información valiosa para ayudar en la planificación del
              transporte, optimización de rutas y reducción de la congestión vehicular.
            </p>
            <p>
              El sitio web de <strong>Movilidad Urbana</strong> presenta datos,
              análisis y visualizaciones sobre patrones de tráfico y movimiento urbano, haciendo que la
              información clave sea accesible para investigadores, planificadores urbanos y autoridades
              de movilidad.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Análisis de Datos</strong>: Muestra información relevante
                sobre tendencias de tráfico y movilidad urbana.
              </li>
              <li>
                <strong>Visualización Interactiva</strong>: Gráficos y representaciones
                visuales para mejorar la comprensión de los datos.
              </li>
              <li>
                <strong>Diseño Accesible</strong>: Una interfaz clara y optimizada
                para un fácil acceso a la información.
              </li>
              <li>
                <strong>Orientado a la Investigación</strong>: Un proyecto enfocado en
                explorar soluciones para mejorar la movilidad urbana.
              </li>
              <li>
                <strong>Implementación de Tecnología Avanzada</strong>: Utiliza
                herramientas de vanguardia para la recopilación y procesamiento de datos.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo Funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              El desarrollo del sitio web de <strong>Movilidad Urbana</strong> integra
              diversas tecnologías para garantizar un procesamiento eficiente de datos
              y una presentación clara de la información.
            </p>
            <p>
              El <strong>backend</strong> está construido con <strong>Python</strong>,
              un lenguaje de programación ampliamente utilizado para análisis de datos
              y aprendizaje automático. <strong>Jupyter Notebook</strong> se utiliza
              para el procesamiento de datos, modelado y generación de visualizaciones
              interactivas.
            </p>
            <p>
              El <strong>frontend</strong> está desarrollado con{" "}
              <strong>HTML y CSS puros</strong>, proporcionando un diseño simple
              pero funcional que facilita el acceso a los datos. Este conjunto de
              tecnologías asegura que el proyecto <strong>Movilidad Urbana</strong>{" "}
              ofrezca una plataforma eficiente y fácil de usar para analizar y
              mejorar la movilidad urbana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
