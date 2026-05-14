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
                <img src="/work-experience/telsoluciones/bg-telsoluciones.webp" alt="TelSoluciones contact center" className="object-cover w-full h-full object-center" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute left-2 bottom-1 flex items-center gap-2  text-white">
                    <img
                        src="/work-experience/telsoluciones/telsol-logo-text.svg"
                        alt="TelSoluciones logo"
                        className="w-60"
                    />
                </div>
            </div>
            <div className="">
                <p>
                    <span className="text-blue-primary">Telsoluciones</span> is a contact center that provides phone support to <span className="text-blue-primary">Telcel</span> customers. There I strengthened my communication and teamwork skills.
                </p>
            </div>
            <ExperienceSection
                companyName="TELSOLUCIONES"
                experiences={[
                    {
                        title: "Technical Support",
                        description: "Repair and maintenance of computer equipment, troubleshooting, and optimization of system performance.",
                        borderColor: "border-blue-500/20",
                        bgColor: "bg-blue-600/20",
                        icon: (
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        )
                    },
                    {
                        title: "Maintenance",
                        description: "Preventive and corrective maintenance of technology infrastructure, equipment cleaning, and software updates.",
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
                        title: "Site Administration",
                        description: "Management and supervision of contact center operations, system monitoring, and technical coordination.",
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

            <Section title="ACHIEVEMENTS &" highlightedWord="RESULTS">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="Full optimization"
                            text="of over 60 devices improving their performance and lifespan."
                            colorClass="bg-blue-500"
                        />
                        <AchievementItem
                            highlight="Implementation"
                            text="of maintenance protocols that improved operational efficiency."
                            colorClass="bg-purple-500"
                        />
                        <AchievementItem
                            highlight="Rapid resolution"
                            text="of critical technical issues minimizing downtime."
                            colorClass="bg-green-500"
                        />
                    </div>
                    <div className="space-y-4">
                        <AchievementItem
                            highlight="6hrs daily support"
                            text="ensuring continuity of call center operations."
                            colorClass="bg-indigo-500"
                        />
                        <AchievementItem
                            highlight="Efficient management"
                            text="of technology resources and equipment inventory."
                            colorClass="bg-teal-500"
                        />
                        <AchievementItem
                            highlight="Complete documentation"
                            text="of equipment inventory and maintenance procedures."
                            colorClass="bg-cyan-500"
                        />
                    </div>
                </div>
            </Section>

            <TechnologiesSection
                technologies={[
                    { name: "Windows Server", IconComponent: Monitor },
                    { name: "Active Directory", IconComponent: FolderOpen },
                    { name: "LAN/WAN Networks", IconComponent: Globe },
                    { name: "Hardware PC", IconComponent: Laptop },
                    { name: "Sistemas VoIP", IconComponent: Phone },
                    { name: "Monitoreo", IconComponent: BarChart3 }
                ]}
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatisticCard
                    value="60+"
                    label="Devices Maintained"
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
                    label="Critical Failures"
                    gradientFrom="from-purple-600/20"
                    gradientTo="to-purple-800/20"
                    borderColor="border-purple-500/30"
                    valueColor="text-purple-400"
                />
            </div>
        </div>
    );
};
