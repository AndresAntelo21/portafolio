import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CsiCarousel } from "@/projects/csipro-web/csipro-carousel";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiReactrouter } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

export const CsiproWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CsiCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/csipro.svg"
          alt="Logo del laboratorio CSI PRO"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-3xl font-normal">
          CSI PRO <span className="rounded-xl bg-violet-800 px-2">REBOOT</span>
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
              <h3>Noviembre 2023 -</h3>
              <span className="italic">Presente</span>
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
                href="https://csipro.isi.unison.mx/"
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
              <strong>CSI PRO REBOOT</strong> es una plataforma creada para dar visibilidad al <strong>laboratorio CSI PRO</strong> de la <strong>Universidad de Sonora</strong>. El objetivo principal del sitio es destacar el trabajo, los proyectos y el impacto del laboratorio en estudiantes y profesionales.
            </p>
            <p>
              Este sitio fue desarrollado para atender la falta de conocimiento que los estudiantes tienen sobre el laboratorio, brindándoles información valiosa y oportunidades para involucrarse en sus actividades.
            </p>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Presentación del laboratorio</strong>: Información detallada sobre la misión y objetivos de CSI PRO.</li>
              <li><strong>Sección de miembros</strong>: Área dedicada para mostrar a los miembros del laboratorio y su rol en distintos proyectos.</li>
              <li><strong>Proyectos activos</strong>: Espacio para mostrar los desarrollos tecnológicos en curso.</li>
              <li><strong>Eventos y participación</strong>: Calendario con los eventos donde participa el laboratorio dentro y fuera de la universidad.</li>
              <li><strong>Registro de actividades</strong>: Funcionalidad para que los estudiantes se registren en eventos y proyectos.</li>
              <li><strong>Diseño moderno y responsivo</strong>: Optimizado para una navegación fluida en móviles y computadoras.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              El sitio <strong>CSI PRO REBOOT</strong> está construido con tecnologías modernas que garantizan un rendimiento rápido, accesibilidad y una experiencia de usuario fluida.
            </p>
            <p>
              El <strong>frontend</strong> fue desarrollado con <strong>React y TypeScript</strong>, lo que proporciona una estructura escalable y robusta. Se utiliza <strong>React Router</strong> para gestionar la navegación entre secciones sin recargar la página.
            </p>
            <p>
              Para la interfaz y estilos, se implementa <strong>Tailwind CSS</strong>, logrando un diseño limpio y adaptable. El proyecto se ejecuta con <strong>Vite</strong>, una herramienta potente que mejora el rendimiento y acelera el desarrollo.
            </p>
            <p>
              Con este stack tecnológico, <strong>CSI PRO REBOOT</strong> no solo informa a los estudiantes sobre el laboratorio, sino que también los motiva a formar parte de su comunidad y participar activamente en sus proyectos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
