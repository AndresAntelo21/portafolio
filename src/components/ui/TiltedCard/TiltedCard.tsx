/*
  Installed from https://reactbits.dev/ts/tailwind/
*/

import type { SpringOptions } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;

  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  /** Rendered above the image, below the overlay (e.g. 3D / interactive content). */
  foregroundContent?: React.ReactNode;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface RectCache {
  left: number;
  top: number;
  width: number;
  height: number;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",

  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  overlayContent = null,
  displayOverlayContent = false,
  foregroundContent = null,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const rectCacheRef = useRef<RectCache | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  // Update cached rect on mount, resize, and mouse enter
  const updateRectCache = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rectCacheRef.current = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  };

  useEffect(() => {
    updateRectCache();
    window.addEventListener("resize", updateRectCache);
    return () => window.removeEventListener("resize", updateRectCache);
  }, []);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!rectCacheRef.current) return;

    const rect = rectCacheRef.current;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    updateRectCache();
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex h-full w-full flex-col items-center justify-center [perspective:800px]"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 block text-center text-sm sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative overflow-hidden rounded-[15px] [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 [transform:translateZ(0)] rounded-[15px] object-cover will-change-transform"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
          fetchPriority="high"
        />

        {foregroundContent && (
          <div className="pointer-events-none absolute inset-0 z-[1] [transform:translateZ(20px)] overflow-hidden rounded-[15px]">
            <div className="pointer-events-auto h-full w-full overflow-hidden">
              {foregroundContent}
            </div>
          </div>
        )}

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-8 left-1/2 z-[2] inline-flex max-w-[calc(100%-1rem)] [transform:translate3d(-50%,0,30px)] items-center justify-center rounded-sm bg-gray-800/60 px-1.5 py-2 leading-none will-change-transform [&>*]:shrink-0">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
    </figure>
  );
}
