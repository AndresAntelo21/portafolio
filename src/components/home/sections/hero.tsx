import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="font-poppins flex h-screen flex-col items-center gap-4 px-10 py-4 text-center text-lg md:gap-2 md:py-2 lg:h-auto lg:flex-row-reverse lg:justify-center lg:py-25 lg:text-left">
      <div className="flex flex-col gap-4 lg:h-40 lg:gap-2">
        <div className="flex flex-col gap-4 lg:justify-end lg:gap-3">
          <h1 className="text-2xl">A Software Developer</h1>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Where logic meets{" "}
            <span className="relative text-violet-600 lg:pl-1">
              creativity
              <img
                src="/public/hero/eclipse.png"
                alt="eclipse llamativo"
                className="absolute top-0 left-0 h-15 w-48"
              />
            </span>
            ...
          </h2>
          <h3 className="relative text-xs lg:text-base">
            Because every great app starts with a single line of code
          </h3>
        </div>
        <div className="hidden lg:block">
          <ContactButton className="mt-10" />
        </div>
      </div>
      <div className="relative mt-10 md:mt-2 lg:px-10">
        <div className="absolute top-1/2 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-500 blur-2xl md:h-50 md:w-50 lg:h-50 lg:w-50"></div>
        <div className="absolute top-1/2 left-1/2 z-0 h-30 w-30 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-amber-50 blur-2xl md:h-20 md:w-20 lg:h-20 lg:w-20"></div>
        <img
          src="/public/hero/test-img.png"
          alt="yo merito"
          className="relative z-10 w-50 pt-5"
        />
      </div>
      <ContactButton className="pt-10 lg:hidden" />
    </div>
  );
};
