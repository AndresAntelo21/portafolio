
import { ExternalLink, Download, Award, Building2 } from 'lucide-react';

export const Test = () => {
    const certifications = [
        {
            id: 1,
            title: "Fundamentos de la ciberseguridad",
            institution: "COURSERA",
            image: "/certificados/certificados-img/FundamentosCiberseguridad.jpg",
            pdfUrl: "#",
            isVerified: true
        },
        {
            id: 2,
            title: "Certificación: Fundamentos de React",
            institution: "Platzi",
            image: "/certificados/certificados-img/ReactFundamentos.jpg",
            pdfUrl: "#",
            isVerified: true
        },
        {
            id: 3,
            title: "Professional Cloud Architect",
            institution: "Google Cloud",
            image: "/certificados/certificados-img/CloudArchitect.jpg",
            pdfUrl: "#",
            isVerified: false
        },
        {
            id: 4,
            title: "Full Stack Web Development",
            institution: "Coursera",
            image: "/certificados/certificados-img/FullStack.jpg",
            pdfUrl: "#",
            isVerified: true
        },
        {
            id: 5,
            title: "JavaScript Algorithms and Data Structures",
            institution: "freeCodeCamp",
            image: "/certificados/certificados-img/JavaScript.jpg",
            pdfUrl: "#",
            isVerified: true
        },
        {
            id: 6,
            title: "AWS Solutions Architect",
            institution: "Amazon Web Services",
            image: "/certificados/certificados-img/AWS.jpg",
            pdfUrl: "#",
            isVerified: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br font-montserrat p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        Certificaciones y Cursos
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Mis logros académicos y profesionales que respaldan mi experiencia
                    </p>
                </div>

                {/* Grid responsivo de certificaciones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group"
                        >
                            {/* Imagen del certificado */}
                            <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback si la imagen no carga
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback para cuando no hay imagen */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 hidden items-center justify-center">
                                    <div className="text-center">
                                        <Award className="w-8 sm:w-12 h-8 sm:h-12 text-blue-500 mx-auto mb-2" />
                                        <p className="text-xs sm:text-sm text-gray-500 px-2">Certificado</p>
                                    </div>
                                </div>

                                {/* Badge de verificación */}
                                {cert.isVerified && (
                                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                        <Award className="w-3 h-3" />
                                        <span className="hidden sm:inline">Verificado</span>
                                    </div>
                                )}
                            </div>

                            {/* Contenido de la tarjeta */}
                            <div className="p-3 sm:p-4 lg:p-6">
                                {/* Título del curso/certificación */}
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>

                                {/* Institución */}
                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                    <Building2 className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-blue-600 font-medium truncate">
                                        {cert.institution}
                                    </span>
                                </div>

                                {/* Botones de acción */}
                                <div className="flex gap-2 sm:gap-3">
                                    <button
                                        onClick={() => window.open(cert.pdfUrl, '_blank')}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                                    >
                                        <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                                        <span className="hidden sm:inline">Ver certificado</span>
                                        <span className="sm:hidden">Ver</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            // Simular descarga
                                            const link = document.createElement('a');
                                            link.href = cert.pdfUrl;
                                            link.download = `${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
                                            link.click();
                                        }}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors flex-shrink-0"
                                        title="Descargar certificado"
                                    >
                                        <Download className="w-3 sm:w-4 h-3 sm:h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};