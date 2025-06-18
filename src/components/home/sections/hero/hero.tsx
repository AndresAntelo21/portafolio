import { ContactButton } from "@/components/button/contact-button";

export const Hero = () => {
  return (
    <div className="w-full h-[100svh] font-montserrat font-bold md:h-auto md:pb-20 lg:pb-25">
      <div className="flex flex-col items-center text-left text-lg md:flex-row md:w-full lg:gap-30">
        <div className="flex flex-col md:w-[60%] md:justify-center md:gap-5 lg:w-[40%]">
          <div className="flex flex-col items-start">
            <h1 className="leading-12s text-3xl md:text-4xl">¡Hola! Me llamo <span className="text-blue-primary"> Andrés Antelo</span> y soy <span className="text-blue-primary">desarrollador Front-End</span>.</h1>
          </div>
          <div className=""><ContactButton className="hidden md:block" /></div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="relative w-full flex items-center justify-center">
            <img src="/hero/andresantelo.svg" alt="Andres Antelo Figueroa" className="size-90 lg:size-120" />
            <img src="/icons/line.svg" alt="linea" className="absolute top-10 left-4 lg:size-20" />
            <img src="/icons/circle.svg" alt="circulo" className="absolute -top-5 right-5 md:top-10 lg:size-10" />
            <img src="/icons/triangle.svg" alt="triangulo" className="absolute -bottom-10 left-10 lg:size-20" />
            <img src="/icons/plus.svg" alt="plus" className="absolute bottom-15 right-10 lg:size-15" />
          </div>
          <ContactButton className="pt-4 text-center md:hidden" />
        </div>
      </div>
    </div>
  );
};