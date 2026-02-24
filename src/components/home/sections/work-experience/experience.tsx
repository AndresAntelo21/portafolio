import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps {
  backgroundImage: string;
  avatarSrc: string;
  authorName: React.ReactNode;
  readTime: React.ReactNode;
  title: React.ReactNode;
  description: string;
  className?: string;
  linkUrl?: string;
}

const cardMotion = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

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
      window.location.href = linkUrl;
    }
  };

  return (
    <motion.div {...cardMotion}>
      <div
        className={cn("max-w-full w-full group/card cursor-pointer", className)}
        onClick={handleRedirect}
      >
        <div
          className={cn(
            "overflow-hidden relative card h-96 rounded-xl shadow-2xl max-w-sm mx-auto flex flex-col justify-between p-6 transition-all duration-500 ease-out group-hover/card:scale-[1.02] group-hover/card:shadow-2xl group-hover/card:shadow-blue-500/20"
          )}
        >
          {/* Imagen de fondo con zoom suave en hover */}
          <div 
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover/card:scale-110 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          
          {/* Overlay con gradiente mejorado */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 transition-all duration-500 group-hover/card:from-black/40 group-hover/card:via-black/30 group-hover/card:to-black/50 z-[1]"></div>
          
          {/* Efecto de brillo sutil en hover */}
          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-[1]"></div>
          
          {/* Contenido superior */}
          <div className="flex flex-row items-center space-x-4 z-[2] transform transition-all duration-300 group-hover/card:translate-y-[-4px] relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
              <img
                height="100"
                width="100"
                alt="Avatar"
                src={avatarSrc}
                className="relative h-10 w-10 rounded-full border-2 border-white/30 object-cover transition-all duration-300 group-hover/card:border-white/60 group-hover/card:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-base text-gray-50 relative z-10 transition-all duration-300 group-hover/card:text-white group-hover/card:drop-shadow-lg">
                {authorName}
              </p>
              <p className="text-sm font-montserrat text-gray-400 transition-all duration-300 group-hover/card:text-gray-300">{readTime}</p>
            </div>
          </div>

          {/* Contenido inferior */}
          <div className="text-content z-[2] transform transition-all duration-300 group-hover/card:translate-y-[-4px] relative">
            <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 transition-all duration-300 group-hover/card:text-white group-hover/card:drop-shadow-lg">
              {title}
            </h1>
            <p className="font-semibold text-sm text-gray-50 relative z-10 my-4 font-montserrat transition-all duration-300 group-hover/card:text-white/95 group-hover/card:drop-shadow-md line-clamp-3">
              {description}
            </p>
            
            {/* Indicador de "click" sutil */}
            <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
              <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">View project</span>
              <svg 
                className="w-4 h-4 text-blue-300 transform transition-transform duration-300 group-hover/card:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};