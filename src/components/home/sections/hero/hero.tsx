import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="w-full h-[100svh] font-montserrat font-bold lg:px-0">
      <div className="flex flex-col items-center text-left text-lg md:gap-2 lg:h-auto lg:flex-row-reverse lg:justify-center lg:text-left">
        <div className="flex flex-col gap-4 lg:h-40 lg:gap-2">
          <div className="flex flex-col gap-4 lg:justify-end lg:gap-3">
            <h1 className="leading-12s text-4xl">¡Hola! Me llamo <span className="text-blue-primary"> Andrés Antelo</span> y soy <span className="text-blue-primary">desarrollador Front-End</span>.</h1>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <img src="/hero/andresantelo.svg" alt="Andres Antelo Figueroa" className="size-75" />
          <img src="/icons/line.svg" alt="linea" className="absolute top-10 left-4" />
          <img src="/icons/circle.svg" alt="circulo" className="absolute -top-5 right-5" />
          <img src="/icons/triangle.svg" alt="triangulo" className="absolute -bottom-10 left-10" />
          <img src="/icons/plus.svg" alt="plus" className="absolute bottom-15 right-10" />
        </div>
        <div className="pt-4">
          <ContactButton />
        </div>
      </div>
    </div>
  );
};
