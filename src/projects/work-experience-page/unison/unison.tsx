import { Card } from "@/components/home/sections/work-experience/experience";

export const Unison = () => {
  return (
    <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/unison/bg-unison.png" alt="Universidad de Sonora campus Hermosillo" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-1 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/unison.svg"
            alt="University of Sonora logo"
            className="w-15 lg:w-20"
          />
          <h1 className="font-poppins uppercase text-2xl lg:text-3xl ">
            Universidad de Sonora
          </h1>
        </div>
      </div>
      <div className="">
        <p>
          The <span className="text-blue-primary">University of Sonora</span> is a
          leading institution in higher education and research in northwestern{" "}
          <span className="text-blue-primary">Mexico</span>. With a wide range of
          academic programs and a commitment to innovation, it trains professionals
          who contribute to the{" "}
          <span className="text-blue-primary">social</span>,{" "}
          <span className="text-blue-primary">economic</span>, and{" "}
          <span className="text-blue-primary">cultural</span> development of the region.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MY <span className="text-blue-primary">PROJECTS</span> AT
        </h1>
        <img src="/work-experience/unison/unison-white.svg" alt="University of Sonora logo" className="w-30" />
      </div>
      <Card
        backgroundImage="/projects/movilidad/movilidad-slide1.webp"
        avatarSrc="/work-experience/unison/unison-logo.png"
        authorName={
          <div className="flex items-center gap-2">
            <img
              src="/work-experience/unison/unison-white.svg"
              alt="University of Sonora logo"
              className="w-25"
            />
          </div>
        }
        readTime={
          <p className=" text-gray-400">February 2024 - <span className="">November 2024</span></p>
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
        description="Urban Mobility analyzes and visualizes traffic to improve mobility in the city. Its website offers accessible data and analysis for decision-makers."
        linkUrl="/movilidad-web"
      />
    </div>
  );
};
