import { CertificacionesCard } from "@/components/home/sections/certificaciones/certificaciones-card";

export const Certificaciones = () => {
    return (
        <div className="font-montserrat text-3xl font-bold">
            <section className="flex gap-4 flex-col">
                <h1>MIS <span className="text-blue-primary">CERTIFICACIONES</span></h1>
                <div className="grid grid-cols-1 gap-4">
                    <CertificacionesCard
                        title="Fundamentos de la ciberseguridad"
                        platform="COURSERA"
                        description="Certificación en fundamentos de ciberseguridad que abarca conceptos esenciales de protección digital."
                        imageSrc="/certificados/certificados-img/FundamentosCiberseguridad.jpg"
                        pdfUrl="/certificados/FundamentosCiberseguridad.pdf"
                    />
                    <CertificacionesCard
                        title="Aspectos básicos: Datos, datos, en todas partes"
                        platform="COURSERA"
                        description="Certificación en análisis de datos que introduce los conceptos clave sobre el uso y procesamiento de datos para la toma de decisiones."
                        imageSrc="/certificados/certificados-img/DatosTodasPartes.jpg"
                        pdfUrl="/certificados/DatosTodasPartes.pdf"
                    />
                </div>
            </section>
        </div>
    )
}
