import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { MovilidadCarousel } from "@/projects/movilidad/movilidad-carousel";
import { FaGithub, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
export const MovilidadWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <MovilidadCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/public/projects/movilidad/movilidad-logo.svg"
          alt="Logo de movilidad urbana"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-3xl">MOVILIDAD URBANA</h1>
      </div>
      {/* cuadro de tecnologias */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-violet-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
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
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Period
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3 className="">February 2024 -</h3>
              <span className="italic">Present</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Links
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://github.com/Kartleth/movilidad"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Github Repository
                </span>
              </a>
              <a
                href="https://movilidad.isi.unison.mx/"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-700/30 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaLink />
                  Link
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="font-poppins flex w-full flex-col gap-8 text-left lg:w-[60%]">
          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span>Project Description</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Movilidad Urbana</strong> is a project designed to
              analyze, visualize, and optimize traffic and urban mobility. By
              leveraging technology, it provides valuable insights to aid in
              transportation planning, route optimization, and traffic
              congestion reduction.
            </p>
            <p>
              The <strong>Movilidad Urbana</strong> website presents data,
              analysis, and visualizations on traffic patterns and urban
              movement, making key information accessible to researchers, urban
              planners, and mobility authorities.
            </p>
          </div>
          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Data Analysis</strong>: Displays relevant information
                about traffic and urban mobility trends.
              </li>
              <li>
                <strong> Interactive Visualization</strong>: Graphs and visual
                representations to enhance data understanding.
              </li>
              <li>
                <strong>Accessible Design</strong>: A clear and optimized
                interface for easy information access.
              </li>
              <li>
                <strong>Research-Oriented</strong>: A project focused on
                exploring solutions to improve city mobility.
              </li>
              <li>
                <strong>Advanced Technology Implementation</strong>: Utilizes
                cutting-edge tools for data collection and processing.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span> How It Works?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The development of the <strong>Movilidad Urbana</strong> website
              integrates various technologies to ensure efficient data
              processing and clear information presentation.
            </p>
            <p>
              The <strong>backend</strong> is built with <strong>Python</strong>
              , a widely used programming language for data analysis and machine
              learning. <strong>Jupyter Notebook</strong> is used for data
              processing, modeling, and generating interactive visualizations.
            </p>
            <p>
              The <strong>frontend</strong> is developed with{" "}
              <strong>pure HTML and CSS</strong>, providing a simple yet
              functional design that makes data easy to access. This technology
              stack ensures that the <strong>Movilidad Urbana</strong> project
              delivers an efficient and user-friendly platform for analyzing and
              improving urban mobility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
