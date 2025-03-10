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
            imageSrc="/public/projects/movilidad/img2.png"
            title={
              <div className="flex items-center gap-2">
                <img
                  src="/public/projects/csipro.svg"
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
            description="We are students from the University of Sonora seeking to innovate. We develop and implement technologies, including software created by us."
            buttonUrl="/"
          />
          <ExperienceCard
            imageSrc="/public/projects/movilidad/img1.png"
            title={
              <div className="flex items-center gap-2">
                <img
                  src="/public/projects/unison.svg"
                  alt="Logo del laboratorio CSI PRO"
                  className="h-10 w-10"
                />
                <div className="font-normal">UNISON</div>
              </div>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            buttonUrl="/"
          />
          <ExperienceCard
            imageSrc="/public/projects/movilidad/img3.png"
            title={
              <div className="flex items-center justify-start">
                <img
                  src="/public/projects/legrafica.svg"
                  alt="Logo del laboratorio CSI PRO"
                  className="h-9"
                />
                {/* <div className="font-normal">LEGRAFICA</div> */}
              </div>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            buttonUrl="/"
          />
          <ExperienceCard
            imageSrc="/public/projects/movilidad/img4.png"
            title="IDK"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
            buttonUrl="/"
          />
        </div>
      </div>
    </div>
  );
};
