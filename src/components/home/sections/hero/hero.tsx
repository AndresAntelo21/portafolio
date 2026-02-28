// import { ContactButton } from "@/components/button/contact-button";

import { ContactButton } from "@/components/button/contact-button";
// import Aurora from "@/components/ui/Aurora/Aurora";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";

export const Hero = () => {
  return (
    <>

      <div className="font-montserrat flex w-full flex-col text-4xl font-bold lg:flex-row lg:text-5xl">
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-start gap-4 pb-4">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Hi! I'm{" "}
              <span className="text-blue-primary">Andrés Antelo</span> and I'm a{" "}
              <span className="text-blue-primary">Full Stack developer</span>.
            </h1>
            <div className="hidden lg:block">
              <ContactButton className="items-start" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 lg:w-[50%]">
            <TiltedCard
              imageSrc="/hero/me-background.webp"
              altText="Full Stack Developer"
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
