import { ExperienceCard } from "./experience-card";

interface WorkExperienceProps {
  className?: string;
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  className,
}) => {
  return (
    <div
      className={`font-poppins flex flex-col gap-10 pt-2 text-2xl lg:text-center ${className}`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="relative z-10 text-center">
          Work <span className="text-violet-600">Experience</span>
        </h1>
        <div className="h-1 w-full rounded-full bg-violet-700"></div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-950 blur-2xl md:h-90 md:w-90"></div>
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
          <ExperienceCard
            imageSrc="/work-experience/csipro/csi-logo.png"
            title={
              <div className="flex items-center gap-2">
                <img
                  src="/projects/csipro.svg"
                  alt="Logo del laboratorio CSI PRO"
                  className="h-8 w-8"
                />
                <div className="font-normal">
                  CSI{" "}
                  <span className="rounded-md bg-violet-700 px-2 font-medium text-white">
                    PRO
                  </span>
                </div>
              </div>
            }
            description="At CSI PRO, a laboratory within the University of Sonora, we are a group of students passionate about software development. Here, we combine our knowledge, creativity, and teamwork to build projects that solve real problems. Whether it's developing apps, designing systems, or experimenting with new technologies, CSI PRO is our space to learn, create, and grow as future professionals in the tech industry."
            buttonUrl="/csipro"
          />
          <ExperienceCard
            imageSrc="/work-experience/legrafica/legrafica-logo.png"
            title={
              <div className="flex items-center justify-start">
                <img
                  src="/projects/legrafica.svg"
                  alt="Logo de legrafica"
                  className="h-9"
                />
                {/* <div className="font-normal">LEGRAFICA</div> */}
              </div>
            }
            description="Legrafica is a marketing and digital development agency specializing in creating comprehensive experiences for brands and their consumers. They combine creativity and technology to drive growth and authentic audience connections."
            buttonUrl="/legrafica"
          />
          <ExperienceCard
            imageSrc="/work-experience/unison/unison-logo.png"
            title={
              <div className="flex items-center gap-2">
                <img
                  src="/projects/unison.svg"
                  alt="Logo de la Universidad de Sonora"
                  className="h-10 w-10"
                />
                <div className="font-normal">UNISON</div>
              </div>
            }
            description="The Universidad de Sonora is a leading institution in higher education and research in northwest Mexico. With a wide range of academic programs and a commitment to innovation, it prepares professionals who contribute to the social, economic, and cultural development of the region."
            buttonUrl="/unison"
          />
          {/* <ExperienceCard
            imageSrc="/projects/movilidad/img4.png"
            title={
              <div className="flex items-center gap-2">
                <div className="text-2xl font-normal">TELSOLUCIONES</div>
              </div>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            buttonUrl="/"
          /> */}
        </div>
      </div>
    </div>
  );
};
