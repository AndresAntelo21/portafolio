interface CircleGridProps {
  images: string[];
}

export const CircleGrid: React.FC<CircleGridProps> = ({ images }) => {
  const firstRowImages = images.slice(0, 6);
  const secondRowImages = images.slice(6);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center gap-2 pl-3 lg:gap-4 lg:pl-15">
        {firstRowImages.map((imageSrc, index) => (
          <div
            key={index}
            className="relative size-10 overflow-hidden rounded-full bg-[#251C31] p-1 lg:size-13"
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
        <div className="flex justify-center gap-2 lg:gap-4">
          {secondRowImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative size-10 overflow-hidden rounded-full bg-[#251C31] p-1 lg:size-13"
            >
              <img
                src={imageSrc}
                alt={`circle ${index + 6}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
