// import { ContactButton } from "@/components/button/contact-button";

import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="font-montserrat flex w-full flex-col text-4xl font-bold lg:flex-row lg:text-5xl">
      <div className="lg:flex lg:flex-row lg:items-center lg:gap-4">
        <div className="flex w-full flex-col items-start gap-4">
          <p>
            ¡Hola! Me llamo{" "}
            <span className="text-blue-primary">Andrés Antelo</span> y soy{" "}
            <span className="text-blue-primary">desarrollador Front-End</span>.
          </p>
          <div className="hidden lg:block">
            <ContactButton className="items-start" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-4 lg:w-[70%]">
          <img src="/hero/me.webp" alt="" className="w-85" />
          <ContactButton className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};
