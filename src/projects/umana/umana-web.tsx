import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { UmanaCarousel } from "@/projects/umana/umana-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export const UmanaWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <UmanaCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/umana/umana-logo-text.svg"
          alt="Logo de la página de Umana"
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
            <ToolsText title="Vue" icons={[FaVuejs]} />
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
              <h3>Noviembre 2024 -</h3>
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
                href="https://umana.com.mx/"
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
          <p>
            <strong>Umana</strong> es una plataforma en línea diseñada para mejorar la salud y el bienestar de las personas a través de <strong>entrenamientos virtuales</strong>, <strong>nutrición personalizada</strong> y una <strong>comunidad activa</strong>. Ofrece acceso a <strong>clases de ejercicio en vivo y bajo demanda</strong>, junto con una amplia selección de <strong>recetas saludables</strong> y <strong>planes alimenticios</strong> para mantener un estilo de vida equilibrado.
            También cuenta con un sistema de membresías que desbloquea contenido exclusivo, brindando una experiencia más completa y personalizada. Además, su comunidad permite a los usuarios compartir su progreso, recibir apoyo y mantenerse motivados en su camino hacia una vida más saludable.
          </p>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Entrenamientos en línea</strong>: Sesiones grabadas disponibles en cualquier momento.</li>
              <li><strong>Clases en vivo</strong>: Sesiones en tiempo real con entrenadores expertos.</li>
              <li><strong>Recetas saludables</strong>: Opciones de comida nutritivas y deliciosas para mejorar la alimentación.</li>
              <li><strong>Planes de alimentación personalizados</strong>: Diseñados para complementar los entrenamientos y necesidades dietéticas.</li>
              <li><strong>Sistema de membresía</strong>: Acceso a contenido exclusivo y beneficios adicionales.</li>
              <li><strong>Comunidad</strong>: Espacio para compartir experiencias y mantenerse motivado.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              La plataforma <strong>Umana</strong> está construida con un enfoque moderno y dinámico. El <strong>frontend</strong> está desarrollado con <strong>Vue.js</strong>, un framework de JavaScript que proporciona una experiencia de usuario fluida e interactiva. Para manejar la navegación entre secciones se utiliza <strong>Vue Router</strong>, asegurando transiciones rápidas y sin interrupciones.
            </p>
            <p>
              Para la comunicación con el backend y la actualización de datos en tiempo real, se utiliza <strong>Axios</strong>, lo que facilita el acceso a la información de entrenamientos, recetas y planes alimenticios. La interfaz de usuario está diseñada con <strong>HTML y CSS puro</strong>, garantizando una estructura limpia, responsiva y amigable para cualquier dispositivo.
            </p>
            <p>
              Con estas tecnologías, Umana ofrece un entorno intuitivo y accesible donde los usuarios pueden enfocarse en su bienestar sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
