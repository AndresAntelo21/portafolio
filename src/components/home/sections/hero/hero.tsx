import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="font-poppins lg:px-0">
      <div className="flex flex-col items-center text-center text-lg md:gap-2 lg:h-auto lg:flex-row-reverse lg:justify-center lg:text-left">
        <div className="flex flex-col gap-4 lg:h-40 lg:gap-2">
          <div className="flex flex-col gap-4 lg:justify-end lg:gap-3">
            <h1 className="text-2xl">A Software Developer</h1>
            <h2 className="text-3xl font-bold lg:text-4xl">
              Where logic meets{" "}
              <span className="relative text-blue-600 lg:pl-1">
                creativity
                <img
                  src="/hero/eclipse.png"
                  alt="eclipse llamativo"
                  className="absolute top-0 left-0 h-15 w-48"
                />
              </span>
              ...
            </h2>
            <h3 className="relative text-xs lg:text-base">
              Because every great app starts with a{" "}
              <span className="text-blue-500">single line</span> of code
            </h3>
          </div>
          <div className="hidden lg:block">
            <ContactButton className="mt-10" />
          </div>
        </div>
        <div className="relative mt-10 md:mt-2 lg:px-10">
          <div className="absolute top-1/2 left-1/2 z-0 h-70 w-70 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-800 blur-2xl md:h-50 md:w-50 lg:h-70 lg:w-70"></div>
          <div className="absolute top-1/2 left-1/2 z-0 h-30 w-30 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-amber-50 blur-2xl md:h-20 md:w-20 lg:h-30 lg:w-30"></div>
          <img
            src="/hero/me.webp"
            alt="Andres Antelo Figueroa"
            className="relative -top-10 left-3 z-10 w-75"
          />
        </div>
        <ContactButton className="lg:hidden" />
      </div>
      <div className="flex flex-col gap-4 pt-10 text-justify lg:pt-20 lg:text-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-2xl">
            I'm a <span className="text-blue-500">software Engineer</span>.
          </h3>
          <div className="h-1 w-full rounded-full bg-blue-700"></div>
        </div>

        <p>
          I'm a passionate{" "}
          <span className="text-blue-500">software developer</span> focused an
          creating functional and appealing digital solutions. I love turning
          ideas into reality through code, always striving to innovate and
          enhance the user experience.
        </p>
      </div>
    </div>
  );
};
