import { ReactNode } from 'react';
import { ExperienceCard } from './ExperienceCard';

interface Experience {
    title: string;
    description: string;
    icon: ReactNode;
    borderColor: string;
    bgColor: string;
}

interface ExperienceSectionProps {
    experiences: Experience[];
    title?: string;
    highlightedWord?: string;
    companyName?: string;
}

export const ExperienceSection = ({
    experiences,
    title = "MI",
    highlightedWord = "EXPERIENCIA",
    companyName = ""
}: ExperienceSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
                {title} <span className="text-blue-primary">{highlightedWord}</span>
                {companyName && ` EN ${companyName.toUpperCase()}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        title={exp.title}
                        description={exp.description}
                        borderColor={exp.borderColor}
                        bgColor={exp.bgColor}
                        icon={exp.icon}
                    />
                ))}
            </div>
        </div>
    );
};
