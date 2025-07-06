import { ReactNode } from 'react';

interface SectionProps {
    title: string;
    highlightedWord: string;
    children: ReactNode;
    className?: string;
}

export const Section = ({ title, highlightedWord, children, className = "" }: SectionProps) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <h2 className="text-2xl font-bold">
                {title} <span className="text-blue-primary">{highlightedWord}</span>
            </h2>
            {children}
        </div>
    );
};
