import { Card } from "@/components/home/sections/work-experience/experience";
export const Csipro = () => {
  return (
    <div className="flex flex-col justify-center md:items-start gap-10">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/csipro/reales.png" alt="CSI PRO image" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-1 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/csipro.svg"
            alt="CSI PRO Lab logo"
            className="w-12"
          />
          <h1 className="text-2xl">
            CSI <span className="rounded-lg bg-violet-700 px-2">PRO</span>
          </h1>
        </div>
      </div>
      <div className="font-poppins">
        <p>
          At CSI <span className="rounded-md bg-violet-800 px-1">PRO</span>, a
          lab at the{" "}
          <span className="text-blue-primary">University of Sonora</span>, we develop
          <span className="text-blue-primary"> software</span> projects applying creativity,
          technology, and teamwork. It's our space to grow as future professionals.
        </p>
      </div>
      <div className="flex gap-2">

        <div className=" flex  gap-2 flex-wrap relative z-10 text-left text-3xl font-bold">MY <span className="text-blue-primary">PROJECTS</span> AT
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
          <p className=" text-gray-400">November 2023 - <span className="italic">present</span></p>
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
        description="CSI PRO REBOOT is a platform that showcases the work, projects, and impact of the CSI PRO lab at the University of Sonora."
        linkUrl="/csipro-web"
      />
    </div>
  );
};
