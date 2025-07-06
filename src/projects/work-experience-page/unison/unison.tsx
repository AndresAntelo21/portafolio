import { Card } from "@/components/home/sections/work-experience/experience";

export const Unison = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/unison/bg-unison.png" alt="" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-1 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/unison.svg"
            alt="Logo de la Universidad de Sonora"
            className="w-15 lg:w-20"
          />
          <h1 className="font-poppins uppercase text-2xl lg:text-3xl ">
            Universidad de Sonora
          </h1>
        </div>
      </div>
      <div className="">
        <p>
          La <span className="text-blue-primary">Universidad de Sonora</span> es una
          institución líder en educación superior e investigación en el noroeste de{" "}
          <span className="text-blue-primary">México</span>. Con una amplia oferta de
          programas académicos y un compromiso con la innovación, forma profesionales
          que contribuyen al desarrollo{" "}
          <span className="text-blue-primary">social</span>,{" "}
          <span className="text-blue-primary">económico</span> y{" "}
          <span className="text-blue-primary">cultural</span> de la región.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MIS <span className="text-blue-primary">PROYECTOS</span> DE LA
        </h1>
        <img src="/work-experience/unison/unison-white.svg" alt="logo de la unison" className="w-30" />
      </div>
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
  );
};
