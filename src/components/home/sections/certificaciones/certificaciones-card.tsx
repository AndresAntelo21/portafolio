import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import { Button } from "@/components/ui/button";
import { Building2, SquareArrowOutUpRight, X } from "lucide-react";
import { useState } from "react";

interface CertificacionesCardProps {
    title: string;
    platform: string;
    description: string;
    imageSrc: string;
    pdfUrl: string;
}

export const CertificacionesCard: React.FC<CertificacionesCardProps> = ({
    title,
    platform,
    description,
    imageSrc,
    pdfUrl,
}) => {
    const [showPDFPreview, setShowPDFPreview] = useState(false);

    const handleViewCertificate = () => {
        if (pdfUrl) {
            setShowPDFPreview(true);
        }
    };

    return (
        <>
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
                <div className="group h-full relative flex flex-col text-xl font-normal overflow-hidden border border-gray-700/50 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-500/50 md:flex-row">
                    <div className="relative w-full h-full bg-white rounded-t-2xl overflow-hidden md:w-80 md:rounded-l-2xl md:rounded-tr-none">
                        <img
                            src={imageSrc}
                            alt={`Certificado de ${title}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                        {/* <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                            <Award className="w-4 h-4" />
                            Verificado
                        </div> */}
                    </div>
                    <div className="flex flex-col justify-between bg-black/95 backdrop-blur-sm rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex-1">
                        <div className="p-6 space-y-4">
                            <h2 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                                {title}
                            </h2>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-blue-600/20 rounded-lg">
                                    <Building2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="font-semibold text-lg text-white">{platform}</span>
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed">{description}</p>
                        </div>
                        <div className="p-6 pt-0">
                            <Button
                                onClick={handleViewCertificate}
                                variant="default"
                                size="lg"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-semibold"
                            >
                                <SquareArrowOutUpRight className="w-5 h-5 mr-2" />
                                Ver Certificado
                            </Button>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                </div>
            </AnimatedContent>
            {showPDFPreview && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[90vh] overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b bg-fondo">
                            <h3 className="text-lg font-semibold text-white-900">{title} - {platform}</h3>
                            <button
                                onClick={() => setShowPDFPreview(false)}
                                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        <div className="h-full pb-16">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-full border-0"
                                title="Vista previa del certificado"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};