interface CircleGridProps {
  images: string[];
}

export const CircleGrid: React.FC<CircleGridProps> = ({ images }) => {
  const firstRowImages = images.slice(0, 7);
  const secondRowImages = images.slice(7);

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      <div className="flex justify-center gap-1 md:gap-4">
        {firstRowImages.map((imageSrc, index) => (
          <div
            key={index}
            className="relative h-10 w-10 overflow-hidden rounded-full bg-[#251C31] p-1 lg:h-12 lg:w-12"
          >
            <img
              src={imageSrc}
              alt={`circle ${index}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      {secondRowImages.length > 0 && (
        <div className="flex justify-center gap-4 md:gap-4">
          {secondRowImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative h-10 w-10 overflow-hidden rounded-full bg-[#251C31] p-1 lg:h-12 lg:w-12"
            >
              <img
                src={imageSrc}
                alt={`circle ${index + 7}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
