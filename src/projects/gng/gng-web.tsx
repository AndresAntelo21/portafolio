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
              <h3>Febrero 2025 -</h3>
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
                href="https://glamnglow.mx/"
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
              <strong>Glam N Glow by Ale Murillo</strong> es un exclusivo <strong>estudio de belleza</strong> dedicado a realzar la esencia y unicidad de cada persona mediante servicios personalizados. Con un enfoque en <strong>profesionalismo</strong>, <strong>innovación</strong> y <strong>calidad</strong>, el estudio ofrece una experiencia única que resalta la belleza natural, permitiendo a cada cliente mostrar su estilo y confianza.
            </p>
            <p>
              Desde maquillaje profesional y tratamientos faciales hasta peinados y cuidado capilar, <strong>Glam N Glow</strong> es el destino ideal para quienes buscan servicios de belleza de primera categoría.
            </p>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Características</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Página de aterrizaje moderna y funcional</strong>: Diseñada para una experiencia atractiva y fácil de navegar.</li>
              <li><strong>Exhibición de servicios</strong>: Menú interactivo con paginación que muestra todos los tratamientos y servicios disponibles.</li>
              <li><strong>Sistema optimizado de citas</strong>: Proceso ágil para agendar citas rápida y fácilmente.</li>
              <li><strong>Diseño responsivo</strong>: Navegación fluida en cualquier dispositivo, ya sea móvil, tablet o escritorio.</li>
              <li><strong>Conexión directa con clientes</strong>: Opciones rápidas de contacto para consultas y reservaciones.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              La página de aterrizaje de <strong>Glam N Glow</strong> está construida con tecnologías modernas para garantizar una navegación fluida y una interacción intuitiva con el usuario.
            </p>
            <p>
              El <strong>frontend</strong> está desarrollado con <strong>Vue.js</strong>, un framework de JavaScript que permite una interfaz altamente interactiva y dinámica. Para manejar la navegación y la paginación del catálogo de servicios eficientemente, usamos <strong>Vue Router</strong>, lo que permite a los usuarios explorar los servicios sin recargar la página innecesariamente.
            </p>
            <p>
              Para mejorar la experiencia del usuario y facilitar la reserva de citas, el sitio está diseñado con <strong>HTML y CSS puros</strong>, asegurando una estética elegante y profesional. Además, se integra <strong>Axios</strong> para una comunicación eficiente con el backend, manteniendo la información y disponibilidad de servicios siempre actualizada.
            </p>
            <p>
              Con esta combinación de tecnologías, el sitio web de <strong>Glam N Glow</strong> ofrece una plataforma <strong>moderna</strong>, <strong>rápida</strong> y <strong>accesible</strong> donde los clientes pueden explorar servicios y reservar citas fácilmente y sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
