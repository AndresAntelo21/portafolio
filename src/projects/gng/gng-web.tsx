import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { GnGCarousel } from "@/projects/gng/gng-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export const GnGWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <GnGCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/gng/gng-logo.svg"
          alt="Logo de Glam N Glow by Ale Murillo"
          className="w-70"
        />
      </div>

      {/* cuadro de tecnologías */}
      <div className="flex w-full flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-blue-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Technologies
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
              <h3>February 2025 -</h3>
              <span className="">March 2025</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Links
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://glamnglow.mx/"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-700/30 py-1"
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
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Project Description</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Glam N Glow by Ale Murillo</strong> es un exclusivo <strong>estudio de belleza</strong> dedicado a realzar la esencia y unicidad de cada persona mediante servicios personalizados. Con un enfoque en <strong>profesionalismo</strong>, <strong>innovación</strong> y <strong>calidad</strong>, el estudio ofrece una experiencia única que resalta la belleza natural, permitiendo a cada cliente mostrar su estilo y confianza.
            </p>
            <p>
              Desde maquillaje profesional y tratamientos faciales hasta peinados y cuidado capilar, <strong>Glam N Glow</strong> es el destino ideal para quienes buscan servicios de belleza de primera categoría.
            </p>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Modern, functional landing page</strong>: Designed for an attractive and easy-to-navigate experience.</li>
              <li><strong>Service showcase</strong>: Interactive menu with pagination showing all available treatments and services.</li>
              <li><strong>Optimized booking system</strong>: Streamlined process to schedule appointments quickly and easily.</li>
              <li><strong>Responsive design</strong>: Smooth navigation on any device, whether mobile, tablet, or desktop.</li>
              <li><strong>Direct client connection</strong>: Quick contact options for inquiries and reservations.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>How does it work?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Glam N Glow</strong> landing page is built with modern technologies to ensure smooth navigation and intuitive user interaction.
            </p>
            <p>
              The <strong>frontend</strong> is developed with <strong>Vue.js</strong>, a JavaScript framework that enables a highly interactive and dynamic interface. <strong>Vue Router</strong> is used to handle navigation and service catalog pagination efficiently, allowing users to explore services without unnecessary page reloads.
            </p>
            <p>
              To improve the user experience and simplify appointment booking, the site is designed with <strong>plain HTML and CSS</strong>, ensuring an elegant and professional look. In addition, <strong>Axios</strong> is integrated for efficient backend communication, keeping service information and availability always up to date.
            </p>
            <p>
              With this technology stack, the <strong>Glam N Glow</strong> website offers a <strong>modern</strong>, <strong>fast</strong>, and <strong>accessible</strong> platform where clients can explore services and book appointments easily and without hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
