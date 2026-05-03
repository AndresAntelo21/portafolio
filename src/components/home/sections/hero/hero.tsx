// import { ContactButton } from "@/components/button/contact-button";

import { ContactButton } from "@/components/button/contact-button";
// import Aurora from "@/components/ui/Aurora/Aurora";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import { MinecraftSkinHeadTrack } from "@/components/ui/MinecraftSkinHeadTrack/MinecraftSkinHeadTrack";
import { useState } from "react";

export const Hero = () => {
  const [minecraftCard, setMinecraftCard] = useState(false);

  return (
    <>
      <div className="font-poppins flex w-full flex-col text-4xl font-bold lg:flex-row lg:text-5xl">
        <div className="lg:flex lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-start gap-4 pb-4">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Hi! I'm <span className="text-blue-primary">Andrés Antelo</span>{" "}
              and I'm a{" "}
              <span className="text-blue-primary">Full Stack developer</span>.
            </h1>
            <div className="hidden lg:block">
              <ContactButton className="items-start" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 lg:w-[50%]">
            <TiltedCard
              imageSrc={
                minecraftCard
                  ? "/minecraft-skin/background-skin.png"
                  : "/hero/me-background.webp"
              }
              altText="Full Stack Developer"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              walk={true}
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <button
                  type="button"
                  aria-pressed={minecraftCard}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMinecraftCard((open) => !open);
                  }}
                  className="font-minecraft m-0 inline-flex h-auto min-h-0 cursor-pointer items-center border-0 bg-transparent p-0 text-[10px] [line-height:1] leading-none font-semibold whitespace-nowrap"
                >
                  Andres Antelo
                </button>
              }
              foregroundContent={
                minecraftCard ? (
                  <div className="relative h-full w-full overflow-hidden">
                    <div className="flex h-full w-full items-end justify-center overflow-hidden">
                      <div className="origin-bottom translate-y-48 scale-[0.9]">
                        <MinecraftSkinHeadTrack
                          skin="/minecraft-skin/mine-andres.png"
                          width={320}
                          height={480}
                        />
                      </div>
                    </div>
                  </div>
                ) : null
              }
            />
            <ContactButton className="lg:hidden" />
          </div>
        </div>
      </div>
    </>
  );
};
