import { Monitor, FolderOpen, Globe, Laptop, Phone, BarChart3 } from "lucide-react";
import {
    ExperienceSection,
    TechnologiesSection,
    AchievementItem,
    StatisticCard,
    Section
} from "@/components/work-experience";

export const Telsoluciones = () => {
    return (
        <div className="flex flex-col justify-center gap-10 pb-10 md:items-start">
            <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
                <img src="/work-experience/telsoluciones/bg-telsoluciones.png" alt="centro de contacto TelSoluciones" className="object-cover w-full h-full object-center" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute left-2 bottom-1 flex items-center gap-2  text-white">
                    <img
                        src="/work-experience/telsoluciones/telsol-logo-text.svg"
                        alt="Logo de Telsoluciones"
                        className="w-60"
                    />
                </div>
            </div>
            <div className="">
                <p>
                    <span className="text-blue-primary">Telsoluciones</span> es un centro de contacto que brinda soporte telefónico a clientes de <span className="text-blue-primary">Telcel</span>. Ahí reforcé mis habilidades de comunicación y trabajo en equipo.
                </p>
            </div>
            <ExperienceSection
                companyName="TELSOLUCIONES"
                experiences={[
                    {
                        title: "Soporte Técnico",
                        description: "Reparación y mantenimiento de equipos de cómputo, resolución de problemas técnicos y optimización del rendimiento de los sistemas.",
                        borderColor: "border-blue-500/20",
                        bgColor: "bg-blue-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        )
                    },
                    {
                        title: "Mantenimiento",
                        description: "Mantenimiento preventivo y correctivo de infraestructura tecnológica, limpieza de equipos y actualización de software.",
                        borderColor: "border-green-500/20",
                        bgColor: "bg-green-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        )
                    },
                    {
                        title: "Administración del Site",
                        description: "Gestión y supervisión de las operaciones del centro de contacto, monitoreo de sistemas y coordinación técnica.",
                        borderColor: "border-purple-500/20",
                        bgColor: "bg-purple-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        )
                    }
                ]}
            />

            <Section title="LOGROS Y" highlightedWord="RESULTADOS">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="Optimización total"
                            text="de más de 60 equipos mejorando su rendimiento y vida útil."
                            colorClass="bg-blue-500"
                        />
                        <AchievementItem
                            highlight="Implementación"
                            text="de protocolos de mantenimiento que mejoraron la eficiencia operacional."
                            colorClass="bg-purple-500"
                        />
                        <AchievementItem
                            highlight="Resolución rápida"
                            text="de problemas técnicos críticos minimizando tiempos de inactividad."
                            colorClass="bg-green-500"
                        />
                    </div>
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="Soporte 6hrs diarias"
                            text="garantizando la continuidad de las operaciones del call center."
                            colorClass="bg-indigo-500"
                        />
                        <AchievementItem
                            highlight="Gestión eficiente"
                            text="de recursos tecnológicos e inventario de equipos."
                            colorClass="bg-teal-500"
                        />
                        <AchievementItem
                            highlight="Documentación completa"
                            text="del inventario de equipos y procedimientos de mantenimiento."
                            colorClass="bg-cyan-500"
                        />
                    </div>
                </div>
            </Section>

            <TechnologiesSection
                technologies={[
                    { name: "Windows Server", IconComponent: Monitor },
                    { name: "Active Directory", IconComponent: FolderOpen },
                    { name: "Redes LAN/WAN", IconComponent: Globe },
                    { name: "Hardware PC", IconComponent: Laptop },
                    { name: "Sistemas VoIP", IconComponent: Phone },
                    { name: "Monitoreo", IconComponent: BarChart3 }
                ]}
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatisticCard
                    value="60+"
                    label="Equipos Mantenidos"
                    gradientFrom="from-blue-600/20"
                    gradientTo="to-blue-800/20"
                    borderColor="border-blue-500/30"
                    valueColor="text-blue-400"
                />
                <StatisticCard
                    value="6hrs"
                    label="Soporte Diario"
                    gradientFrom="from-green-600/20"
                    gradientTo="to-green-800/20"
                    borderColor="border-green-500/30"
                    valueColor="text-green-400"
                />
                <StatisticCard
                    value="0"
                    label="Fallos Críticos"
                    gradientFrom="from-purple-600/20"
                    gradientTo="to-purple-800/20"
                    borderColor="border-purple-500/30"
                    valueColor="text-purple-400"
                />
            </div>
        </div>
    );
};
