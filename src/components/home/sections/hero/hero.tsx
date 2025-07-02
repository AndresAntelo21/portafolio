// import { ContactButton } from "@/components/button/contact-button";

import { ContactButton } from "@/components/button/contact-button";
import Aurora from "@/components/ui/Aurora/Aurora";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";

export const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full">
        <Aurora
          colorStops={["#050a48", "#32012b", "#2d0bb1"]}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div>
      <div className="font-montserrat flex w-full flex-col text-4xl font-bold lg:flex-row lg:text-5xl">
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-start gap-4 pb-4">
            <p>
              ¡Hola! Me llamo{" "}
              <span className="text-blue-primary">Andrés Antelo</span> y soy{" "}
              <span className="text-blue-primary">desarrollador Front-End</span>
              .
            </p>
            <div className="hidden lg:block">
              <ContactButton className="items-start" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 lg:w-[50%]">
            <TiltedCard
              imageSrc="/hero/me-background.png"
              altText="Front-End Developer"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="font-minecraft text-[10px] font-semibold">
                  Andres Antelo
                </p>
              }
            />
            <ContactButton className="lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
};
