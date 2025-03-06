import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="font-poppins flex h-screen flex-col items-center gap-4 px-12 py-4 text-center text-lg">
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
    </div>
  );
};
