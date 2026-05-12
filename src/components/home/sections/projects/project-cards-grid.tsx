import { motion } from "motion/react";
import ProjectCard from "@/components/home/sections/projects/projects-card";
import type { HomeProjectEntry } from "@/constants/home-project-entries";
import { cn } from "@/lib/utils";

type ProjectCardsGridProps = {
  entries: HomeProjectEntry[];
  className?: string;
};

export function ProjectCardsGrid({ entries, className }: ProjectCardsGridProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6", className)}
    >
      {entries.map(({ id, ...cardProps }, index) => (
        <motion.div
          key={id}
          className="min-h-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.45,
            delay: index * 0.06,
            ease: "easeOut",
          }}
        >
          <ProjectCard {...cardProps} className="h-full" />
        </motion.div>
      ))}
    </div>
  );
}
