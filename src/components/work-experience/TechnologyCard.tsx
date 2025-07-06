import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
    name: string;
    IconComponent: LucideIcon;
}

export const TechnologyCard = ({ name, IconComponent }: TechnologyCardProps) => {
    return (
        <div className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300">
            <div className="mb-2 flex justify-center">
                <IconComponent className="w-8 h-8 text-blue-primary" />
            </div>
            <p className="text-sm text-gray-300 font-medium">{name}</p>
        </div>
    );
};
