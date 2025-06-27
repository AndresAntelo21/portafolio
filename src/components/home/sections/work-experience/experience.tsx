import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import { cn } from "@/lib/utils";

interface CardProps {
  backgroundImage: string;
  avatarSrc: string;
  authorName: React.ReactNode;
  readTime: React.ReactNode;
  title: React.ReactNode;
  description: string;
  className?: string;
  linkUrl?: string; // Nueva propiedad para manejar la redirección
}

export const Card: React.FC<CardProps> = ({
  backgroundImage,
  avatarSrc,
  authorName,
  readTime,
  title,
  description,
  className,
  linkUrl,
}) => {
  const handleRedirect = () => {
    if (linkUrl) {
      window.location.href = linkUrl; // Redirige a la URL especificada
    }
  };

  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <div
        className={cn("max-w-full w-full group/card cursor-pointer", className)}
        onClick={handleRedirect} // Maneja el clic para redirigir
      >
        <div
          className={cn(
            "overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center"
          )}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute w-full h-full top-0 left-0 bg-black/70 transition duration-300 group-hover/card:bg-black/20"></div>
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt="Avatar"
              src={avatarSrc}
              className="h-10 w-10 rounded-full border-2 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10">
                {authorName}
              </p>
              <p className="text-sm font-montserrat text-gray-400">{readTime}</p>
            </div>
          </div>

          <div className="text-content z-10">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {title}
            </h1>
            <p className="font-semibold text-sm text-gray-50 relative z-10 my-4 font-montserrat">
              {description}
            </p>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};