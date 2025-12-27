interface CircleGridProps {
  images: string[];
}

const InfiniteCarousel = ({
  images,
  direction = "left"
}: {
  images: string[];
  direction?: "left" | "right"
}) => {
  // Duplicar las imágenes para crear el efecto infinito sin saltos
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .infinite-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .infinite-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
      <div className="w-screen overflow-hidden lg:w-full" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <div
          className={`flex gap-2 ${direction === "left" ? "infinite-scroll-left" : "infinite-scroll-right"}`}
          style={{ display: "inline-flex", width: "fit-content" }}
        >
          {duplicatedImages.map((imageSrc, index) => (
            <div
              key={`carousel-${index}`}
              className="relative size-14 flex-shrink-0 overflow-hidden rounded-full bg-[#251C31] p-1"
            >
              <img
                src={imageSrc}
                alt={`circle ${index}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const CircleGrid: React.FC<CircleGridProps> = ({ images }) => {
  const firstRowImages = images.slice(0, 7);
  const secondRowImages = images.slice(7);

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      {/* Primera línea: carrusel infinito en mobile, diseño original en desktop */}
      {/* Versión mobile con carrusel infinito */}
      <div className="w-full lg:hidden">
        <InfiniteCarousel images={firstRowImages} direction="left" />
      </div>

      {/* Versión desktop sin carrusel */}
      <div className="hidden lg:flex justify-center gap-4 pl-15">
        {firstRowImages.map((imageSrc, index) => (
          <div
            key={`first-desktop-${index}`}
            className="relative size-13 overflow-hidden rounded-full bg-[#251C31] p-1"
          >
            <img
              src={imageSrc}
              alt={`circle ${index}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Segunda línea: carrusel infinito en mobile, diseño original en desktop */}
      {secondRowImages.length > 0 && (
        <>
          {/* Versión mobile con carrusel infinito */}
          <div className="w-full lg:hidden">
            <InfiniteCarousel images={secondRowImages} direction="right" />
          </div>

          {/* Versión desktop sin carrusel */}
          <div className="hidden lg:flex justify-center gap-4">
            {secondRowImages.map((imageSrc, index) => (
              <div
                key={`second-desktop-${index}`}
                className="relative size-13 overflow-hidden rounded-full bg-[#251C31] p-1"
              >
                <img
                  src={imageSrc}
                  alt={`circle ${index + 7}`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
