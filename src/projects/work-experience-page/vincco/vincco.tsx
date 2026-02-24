import { Monitor, FolderOpen, Globe, Laptop, Phone, BarChart3, Settings, Shield } from "lucide-react";
import {
    ExperienceSection,
    TechnologiesSection,
    AchievementItem,
    StatisticCard,
    Section
} from "@/components/work-experience";

export const Vincco = () => {
    return (
        <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
            <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
                <img src="/work-experience/vincco/bg-vincco-oficinas.png" alt="Vincco offices" className="object-cover w-full h-full object-center" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute left-2 bottom-1 flex items-center gap-2  text-white">
                    <img
                        src="/work-experience/vincco/vincco-logo-text.svg"
                        alt="Vincco logo"
                        className="w-40"
                    />
                </div>
            </div>
            <div className="">
                <p>
                    <span className="text-blue-primary">Vincco</span> es un{" "}
                    <span className="text-blue-primary">centro de contacto</span> que renta su{" "}
                    infraestructura a distintas <span className="text-blue-primary">empresas</span> para operar sus áreas de{" "}
                    <span className="text-blue-primary">servicio</span> y{" "}
                    <span className="text-blue-primary">atención telefónica</span>. Actualmente
                    alberga a cuatro compañías, cada una con diferentes enfoques y procesos según
                    sus necesidades.
                </p>
            </div>

            <ExperienceSection
                companyName="VINCCO"
                experiences={[
                    {
                        title: "Specialized Technical Support",
                        description: "Maintenance and repair of over 200 computer devices, resolution of complex technical issues, and large-scale performance optimization.",
                        borderColor: "border-blue-500/20",
                        bgColor: "bg-blue-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        )
                    },
                    {
                        title: "Administración del Site",
                        description: "Gestión integral de las operaciones del centro de contacto, supervisión de sistemas críticos y coordinación de servicios para múltiples clientes empresariales.",
                        borderColor: "border-purple-500/20",
                        bgColor: "bg-purple-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        )
                    },
                    {
                        title: "Multi-Client Support",
                        description: "Technical coordination and management for 4 client companies, ensuring customized services and maintenance of quality standards.",
                        borderColor: "border-indigo-500/20",
                        bgColor: "bg-indigo-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        )
                    }
                ]}
            />

            <Section title="ACHIEVEMENTS &" highlightedWord="RESULTS">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="Full management"
                            text="of over 200 devices distributed across multiple operational areas."
                            colorClass="bg-blue-500"
                        />
                        <AchievementItem
                            highlight="Multi-client support"
                            text="for 4 companies with specific and differentiated technical requirements."
                            colorClass="bg-purple-500"
                        />
                        <AchievementItem
                            highlight="Mass optimization"
                            text="of technology infrastructure improving operational efficiency."
                            colorClass="bg-green-500"
                        />
                    </div>
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="Full installation"
                            text="of partitions and physical space reorganization of the center."
                            colorClass="bg-indigo-500"
                        />
                        <AchievementItem
                            highlight="Full site administration"
                            text="coordinating technical and logistical operations."
                            colorClass="bg-teal-500"
                        />
                        <AchievementItem
                            highlight="Preventive maintenance"
                            text="implemented to ensure 24/7 operational continuity."
                            colorClass="bg-cyan-500"
                        />
                    </div>
                </div>
            </Section>

            <TechnologiesSection
                technologies={[
                    { name: "Windows Server", IconComponent: Monitor },
                    { name: "Active Directory", IconComponent: FolderOpen },
                    { name: "Redes Empresariales", IconComponent: Globe },
                    { name: "Hardware Masivo", IconComponent: Laptop },
                    { name: "Sistemas VoIP", IconComponent: Phone },
                    { name: "Monitoreo Avanzado", IconComponent: BarChart3 },
                    { name: "Gestión de Sites", IconComponent: Settings },
                    { name: "Seguridad IT", IconComponent: Shield }
                ]}
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatisticCard
                    value="200+"
                    label="Devices Managed"
                    gradientFrom="from-blue-600/20"
                    gradientTo="to-blue-800/20"
                    borderColor="border-blue-500/30"
                    valueColor="text-blue-400"
                />
                <StatisticCard
                    value="98%"
                    label="Tiempo Operativo"
                    gradientFrom="from-purple-600/20"
                    gradientTo="to-purple-800/20"
                    borderColor="border-purple-500/30"
                    valueColor="text-purple-400"
                />
                <StatisticCard
                    value="2min"
                    label="Response Time"
                    gradientFrom="from-green-600/20"
                    gradientTo="to-green-800/20"
                    borderColor="border-green-500/30"
                    valueColor="text-green-400"
                />
            </div>
        </div>
    );
};
