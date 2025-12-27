interface CircleGridProps {
  images: string[];
}

export const CircleGrid: React.FC<CircleGridProps> = ({ images }) => {
  const firstRowImages = images.slice(0, 7);
  const secondRowImages = images.slice(7);

  // Duplicar imágenes para el efecto infinito (solo para mobile)
  const firstRowDuplicated = [...firstRowImages, ...firstRowImages];
  const secondRowDuplicated = [...secondRowImages, ...secondRowImages];

  return (
    <>
      {/* Estilos para las animaciones del carrusel infinito */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .carousel-container {
          overflow: hidden;
          width: calc(100% + 2rem);
          margin-left: -1rem;
          margin-right: -1rem;
          padding-left: 0;
          padding-right: 0;
        }
        
        .carousel-track {
          display: flex;
          gap: 0.5rem;
          width: fit-content;
        }
        
        @media (min-width: 1024px) {
          .carousel-container {
            overflow: visible;
            width: auto;
          }
          .carousel-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="flex flex-col items-center gap-2">
        {/* Primera línea: carrusel infinito en mobile, diseño original en desktop */}
        {/* Versión mobile con carrusel */}
        <div className="carousel-container lg:hidden">
          <div className="carousel-track animate-scroll-left flex gap-2">
            {firstRowDuplicated.map((imageSrc, index) => (
              <div
                key={`first-mobile-${index}`}
                className="relative size-10 flex-shrink-0 overflow-hidden rounded-full bg-[#251C31] p-1"
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
            {/* Versión mobile con carrusel */}
            <div className="carousel-container lg:hidden">
              <div className="carousel-track animate-scroll-right flex gap-2">
                {secondRowDuplicated.map((imageSrc, index) => (
                  <div
                    key={`second-mobile-${index}`}
                    className="relative size-10 flex-shrink-0 overflow-hidden rounded-full bg-[#251C31] p-1"
                  >
                    <img
                      src={imageSrc}
                      alt={`circle ${index + 7}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
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
    </>
  );
};
