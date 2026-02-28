import { CertificacionesCard } from "@/components/home/sections/certificaciones/certificaciones-card";

export const Certificaciones = () => {
    return (
        <div className="font-montserrat text-3xl font-bold">
            <section className="flex gap-4 flex-col">
                <h2>MY <span className="text-blue-primary">CERTIFICATIONS</span></h2>
                <div className="grid grid-cols-1 gap-4">
                    <CertificacionesCard
                        title="Foundations of Cybersecurity"
                        platform="COURSERA"
                        description="Certification in cybersecurity fundamentals covering essential concepts of digital protection."
                        imageSrc="/certificados/certificados-img/FundamentosCiberseguridad.jpg"
                        pdfUrl="/certificados/FundamentosCiberseguridad.pdf"
                    />
                    <CertificacionesCard
                        title="Foundations: Data, Data, Everywhere"
                        platform="COURSERA"
                        description="Certification in data analysis introducing key concepts on data use and processing for decision-making."
                        imageSrc="/certificados/certificados-img/DatosTodasPartes.jpg"
                        pdfUrl="/certificados/DatosTodasPartes.pdf"
                    />
                </div>
            </section>
        </div>
    )
}
