import { Card } from "../work-experience/experience";

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (

    <div className={`font-poppins flex flex-col gap-4 py-10 ${className}`}>
      <h1 className="relative z-10 text-left text-3xl font-bold">
        MY <span className="text-blue-primary">PROJECTS</span>
      </h1>
      <div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        <Card
          backgroundImage="/projects/csipro/csi-slide4.webp"
          avatarSrc="/work-experience/csipro/csi-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/csipro.svg"
                alt="CSI PRO Lab logo"
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
                alt="CSI PRO Lab logo"
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
        <Card
          backgroundImage="/projects/umana/umana-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="CSI PRO Lab logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">November 2024 - <span className="">February 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/umana/umana-logo-text.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Umana is an online platform that offers routines, recipes, and personalized plans to improve health."
          linkUrl="/umana-web"
        />
        <Card
          backgroundImage="/projects/gng/gng-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/gng/gng-logo.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Glam N Glow by Ale Murillo is a beauty studio offering makeup, hairstyling, and treatments to enhance natural beauty with style and quality."
          linkUrl="/gng-web"
        />
        <Card
          backgroundImage="/projects/cbc/cbc-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/cbc/cbc-logo.svg"
                alt="Legrafica logo"
                className="w-15"
              />
              <div className="font-alegreya font-normal">
                <span>Colegio Bicultural Cananea</span>
              </div>
            </div>
          }
          description="Colegio Bicultural Cananea offers bilingual education and holistic development. Its website provides information on programs, values, and the admissions process."
          linkUrl="/cbc-web"
        />
        <Card
          backgroundImage="/projects/revolt/revolt-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/revolt/revolt-logo.svg"
                alt="Legrafica logo"
                className="w-40"
              />
            </div>
          }
          description="Revolt offers solar energy solutions to reduce costs and protect the environment. Their page presents the company, its values, and makes it easy for customers to get in touch."
          linkUrl="/revolt-web"
        />
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
                alt="Legrafica logo"
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
    </div>
  );
};
