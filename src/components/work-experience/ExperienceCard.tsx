import { ReactNode } from 'react';

interface ExperienceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    borderColor: string;
    bgColor: string;
}

export const ExperienceCard = ({ title, description, icon, borderColor, bgColor }: ExperienceCardProps) => {
    return (
        <div className={`bg-black/50 rounded-xl p-6 border ${borderColor} hover:${borderColor.replace('/20', '/50')} transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 ${bgColor} rounded-lg`}>
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
};
