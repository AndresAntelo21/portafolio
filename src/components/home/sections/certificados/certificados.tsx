import { CertificadoCard } from "./certificado-card";

interface Certificado {
    title: string;
    platform: string;
    url: string;
    logo?: string;
    badges?: string[];
}

export const Certificados = () => {
    const certificados: Certificado[] = [
        {
            title: "Diseño UX: experiencia de usuario UX/UI + Figma 2025",
            platform: "UDEMY",
            url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b9453ad2-328e-4c48-bfc4-38db7ac1dc9f.pdf",
            logo: "/certificados/certificados-company/Udemy.svg",
            badges: ["UX Design", "UI Design", "Figma"],
        },
        {
            title: "Diseño UI: diseño visual y diseño de interfaz con Figma 2025",
            platform: "UDEMY",
            url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e9a6f2f9-7f11-4b1f-b2bd-e7b520ce1029.pdf",
            logo: "/certificados/certificados-company/Udemy.svg",
            badges: ["UI Design", "Visual Design", "Figma"],
        },
        {
            title: "UX Writing: diseño de contenido y experiencia de usuario",
            platform: "UDEMY",
            url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a6ca9509-6d66-435f-a475-59300866a0ef.pdf",
            logo: "/certificados/certificados-company/Udemy.svg",
            badges: ["UX Writing", "Content Design", "User Experience"],
        },
        {
            title: "Aspectos básicos: Datos, datos, en todas partes",
            platform: "GOOGLE",
            url: "https://www.coursera.org/account/accomplishments/verify/6LKLH47ESP8Z",
            logo: "/certificados/certificados-company/google.svg",
            badges: [
                "SQL",
                "Data Analytics",
                "Data Visualization"
            ],
        },
        {
            title: "Fundamentos de la ciberseguridad",
            platform: "GOOGLE",
            url: "https://www.coursera.org/account/accomplishments/verify/HLK69M355WRH",
            logo: "/certificados/certificados-company/google.svg",
            badges: [
                "Cybersecurity",
                "Cyber Attacks",
                "Threat Management"
            ],
        },
    ];

    return (
        <div className="font-poppins relative z-10 flex flex-col gap-5">
            <h1 className="relative z-10 text-left text-3xl font-bold">
                MIS <span className="text-blue-primary">CERTIFICADOS</span>
            </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center">
                {certificados.map((certificado, index) => (
                    <CertificadoCard
                        key={index}
                        title={certificado.title}
                        platform={certificado.platform}
                        url={certificado.url}
                        logo={certificado.logo}
                        badges={certificado.badges}
                    />
                ))}
            </div>
        </div>
    );
};

