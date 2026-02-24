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
          alt="Urban Mobility logo"
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
                Technologies
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
              <h3 className="">February 2024 -</h3>
              <span className="">November 2024</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">              <span className="font-poppins text-xl font-medium tracking-widest">
                Links
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
            <span>Project Description</span>
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
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Data analysis</strong>: Displays relevant information
                on traffic and urban mobility trends.
              </li>
              <li>
                <strong>Interactive visualization</strong>: Charts and visual
                representations to improve data understanding.
              </li>
              <li>
                <strong>Accessible design</strong>: A clear, optimized interface
                for easy access to information.
              </li>
              <li>
                <strong>Research-oriented</strong>: A project focused on
                exploring solutions to improve urban mobility.
              </li>
              <li>
                <strong>Advanced technology implementation</strong>: Uses
                cutting-edge tools for data collection and processing.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>How does it work?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Urban Mobility</strong> website development integrates
              various technologies to ensure efficient data processing
              and clear presentation of information.
            </p>
            <p>
              The <strong>backend</strong> is built with <strong>Python</strong>,
              a widely used programming language for data analysis
              and machine learning. <strong>Jupyter Notebook</strong> is used
              for data processing, modeling, and generating interactive
              visualizations.
            </p>
            <p>
              The <strong>frontend</strong> is developed with{" "}
              <strong>plain HTML and CSS</strong>, providing a simple
              yet functional design that makes data easy to access. This
              technology stack ensures the <strong>Urban Mobility</strong>{" "}
              project offers an efficient and user-friendly platform to analyze and
              improve urban mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
