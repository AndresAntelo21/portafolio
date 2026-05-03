import { ReactNode, CSSProperties } from "react";

import { cn } from "@/lib/utils";

import { ExperienceCard } from "./ExperienceCard";

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
    /** Tailwind color class for `highlightedWord` (e.g. `text-vincco`, `text-telsoluciones`). */
    highlightedWordClassName?: string;
    /** Word(s) after “MY EXPERIENCE” (e.g. `VINCCO`, `TEL Soluciones`). */
    companyName?: string;
    /** Extra classes on the company name only (weight, tracking, color). */
    companyNameClassName?: string;
    /** Overrides heading font for the company name so it wins over `font-poppins` on the `h2`. */
    companyFont?: "montserrat" | "inter";
}

const companyFontStyle = (font: ExperienceSectionProps["companyFont"]): CSSProperties | undefined => {
    if (font === "montserrat") {
        return { fontFamily: "var(--font-montserrat), sans-serif" };
    }
    if (font === "inter") {
        return { fontFamily: "var(--font-inter), system-ui, sans-serif" };
    }
    return undefined;
};

export const ExperienceSection = ({
    experiences,
    title = "MY",
    highlightedWord = "EXPERIENCE",
    highlightedWordClassName = "text-blue-primary",
    companyName = "",
    companyNameClassName,
    companyFont,
}: ExperienceSectionProps) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-poppins text-2xl font-bold text-white">
                <span>{title}</span>{" "}
                <span className={highlightedWordClassName}>{highlightedWord}</span>
                {companyName ? (
                    <>
                        {" "}
                        <span>AT</span>{" "}
                        <span
                            className={cn(companyNameClassName)}
                            style={companyFontStyle(companyFont)}
                        >
                            {companyName}
                        </span>
                    </>
                ) : null}
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
