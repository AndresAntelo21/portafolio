import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="font-poppins flex h-screen flex-col items-center gap-4 px-10 py-4 text-center text-lg">
      <h1>A Software Developer</h1>
      <span className="text-3xl font-bold">
        Where logic meets creativity...
      </span>
      <h2 className="text-xs">
        Because every great app starts with a single line of code
      </h2>
      <div className="relative mt-10">
        <div className="absolute top-1/2 left-1/2 z-0 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-500 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 z-0 h-30 w-30 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-amber-50 blur-2xl"></div>
        <img
          src="/public/hero/test-img.png"
          alt="yo merito"
          className="relative z-10 w-50 pt-5"
        />
      </div>
      <ContactButton className="pt-10" />

      <div className="flex flex-col gap-10 pt-10 text-2xl font-bold">
        <div className="flex flex-col gap-2">
          <span>I'm a Software Engineer</span>
          <div className="h-1 w-full bg-violet-950"></div>
        </div>
        <p className="text-justify text-base font-normal">
          I'm a passionate software developer focused on creating functional and
          appealing digital solutions. I love turning ideas into reality through
          code, always striving to innovate and enhance the user experience.
        </p>
      </div>
    </div>
  );
};
