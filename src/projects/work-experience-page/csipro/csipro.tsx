import { Card } from "@/components/home/sections/work-experience/experience";
export const Csipro = () => {
  return (
    <div className="flex flex-col justify-center md:items-start gap-10">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/csipro/reales.png" alt="imagen del CSI" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-1 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/csipro.svg"
            alt="logo del laboratorio CSI PRO"
            className="w-12"
          />
          <h1 className="text-2xl">
            CSI <span className="rounded-lg bg-violet-700 px-2">PRO</span>
          </h1>
        </div>
      </div>
      <div className="font-poppins">
        <p>
          En CSI <span className="rounded-md bg-violet-800 px-1">PRO</span>, un
          laboratorio de la{" "}
          <span className="text-blue-primary">Universidad de Sonora</span>, desarrollamos
          proyectos de{" "}
          <span className="text-blue-primary">software</span> aplicando creatividad,
          tecnología y trabajo en equipo. Es nuestro espacio para crecer como futuros
          profesionales.
        </p>
      </div>
      <div className="flex gap-2">

        <div className=" flex  gap-2 flex-wrap relative z-10 text-left text-3xl font-bold">MIS <span className="text-blue-primary">PROYECTOS</span> DEL
          <div className="flex items-start gap-2 font-normal">
            <img src="/projects/csipro.svg" alt="" className="size-11" />
            CSI
            <span className="rounded-md bg-violet-700 px-2 font-base text-white"> PRO</span>
          </div>
        </div>
      </div>
      <Card
        backgroundImage="/projects/csipro/csi-slide4.webp"
        avatarSrc="/work-experience/csipro/csi-logo.png"
        authorName={
          <div className="flex items-center gap-2">
            <img
              src="/projects/csipro.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              CSI  {""}
              <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                PRO
              </span>
            </div>
          </div>
        }
        readTime={
          <p className=" text-gray-400">Noviembre 2023 - <span className="italic">presente</span></p>
        }
        title={
          <div className="flex items-center gap-2">
            <img
              src="/projects/csipro.svg"
              alt="Logo del laboratorio CSI PRO"
              className="h-8 w-8"
            />
            <div className="font-normal">
              CSI PRO {""}
              <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                REBOOT
              </span>
            </div>
          </div>
        }
        description="CSI PRO REBOOT es una plataforma que muestra el trabajo, proyectos e impacto del laboratorio CSI PRO de la Universidad de Sonora."
        linkUrl="/csipro-web"
      />
    </div>
  );
};
