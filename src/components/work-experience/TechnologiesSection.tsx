import { LucideIcon } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';

interface Technology {
    name: string;
    IconComponent: LucideIcon;
}

interface TechnologiesSectionProps {
    technologies: Technology[];
    title?: string;
    highlightedWord?: string;
}

export const TechnologiesSection = ({
    technologies,
    title = "TECNOLOGÍAS Y",
    highlightedWord = "HERRAMIENTAS"
}: TechnologiesSectionProps) => {
    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6 ">
                {title} <span className="text-blue-primary">{highlightedWord}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                    <TechnologyCard
                        key={index}
                        name={tech.name}
                        IconComponent={tech.IconComponent}
                    />
                ))}
            </div>
        </div>
    );
};
