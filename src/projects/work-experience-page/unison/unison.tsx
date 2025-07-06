import { Card } from "@/components/home/sections/work-experience/experience";

export const Unison = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <div className="flex flex-row items-center justify-center gap-4 text-xl lg:text-3xl">
        <img
          src="/projects/unison.svg"
          alt="Logo de la Universidad de Sonora"
          className="w-15 lg:w-25"
        />
        <h1 className="font-poppins uppercase">Universidad de Sonora</h1>
      </div>
      <div className="z-10 text-left lg:text-center">
        <p>
          The <span className="text-blue-600">Universidad de Sonora</span> is a
          leading institution in higher education and research in northwest{" "}
          <span className="text-blue-600">Mexico</span>. With a wide range of
          academic programs and a commitment to innovation, it prepares
          professionals who contribute to the{" "}
          <span className="text-blue-600"> social</span>,{" "}
          <span className="text-blue-600"> economic</span>, and{" "}
          <span className="text-blue-600">cultural</span> development of the
          region.
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
