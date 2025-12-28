import { ExternalLink } from "lucide-react";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import { cn } from "@/lib/utils";

interface CertificadoCardProps {
    title: string;
    platform: string;
    url: string;
    logo?: string;
    badges?: string[];
}

// Array de colores para los badges (cada badge tendrá un color diferente)
const badgeColors = [
    { bg: "bg-blue-500/20", text: "text-blue-300", border: "border-blue-500/30" },
    { bg: "bg-purple-500/20", text: "text-purple-300", border: "border-purple-500/30" },
    { bg: "bg-pink-500/20", text: "text-pink-300", border: "border-pink-500/30" },
    { bg: "bg-green-500/20", text: "text-green-300", border: "border-green-500/30" },
    { bg: "bg-yellow-500/20", text: "text-yellow-300", border: "border-yellow-500/30" },
    { bg: "bg-cyan-500/20", text: "text-cyan-300", border: "border-cyan-500/30" },
    { bg: "bg-indigo-500/20", text: "text-indigo-300", border: "border-indigo-500/30" },
    { bg: "bg-orange-500/20", text: "text-orange-300", border: "border-orange-500/30" },
];

export const CertificadoCard: React.FC<CertificadoCardProps> = ({
    title,
    platform,
    url,
    logo,
    badges = [],
}) => {
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
            <div className="group relative h-full flex flex-col gap-5 p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Logo de la plataforma */}
                {logo && (
                    <div className="flex items-center justify-start">
                        <img
                            src={logo}
                            alt={platform}
                            className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                )}

                {/* Título con enlace */}
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                >
                    <h3 className="text-lg md:text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300 flex items-start gap-2 group/link leading-tight">
                        {title}
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                    </h3>
                </a>

                {/* Badges con habilidades aprendidas - cada uno con color diferente */}
                {badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {badges.map((badge, index) => {
                            const colorIndex = index % badgeColors.length;
                            const colors = badgeColors[colorIndex];
                            return (
                                <span
                                    key={index}
                                    className={cn(
                                        "px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 hover:scale-105",
                                        colors.bg,
                                        colors.text,
                                        colors.border
                                    )}
                                >
                                    {badge}
                                </span>
                            );
                        })}
                    </div>
                )}

                {/* Efecto de brillo sutil en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            </div>
        </AnimatedContent>
    );
};

