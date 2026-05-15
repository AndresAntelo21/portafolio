import { motion } from "motion/react";
import ProjectCard from "@/components/home/sections/projects/projects-card";
import { HobbyLevelBadge } from "@/components/home/sections/hobbies/hobby-level-badge";
import { HobbyTechnologyCardRow } from "@/components/hobby-technology/hobby-technology-card-row";
import type { HobbyItem } from "@/constants/hobbies";

type HobbyCardProps = HobbyItem & {
  animationIndex?: number;
};

export const HobbyCard = ({
  id,
  title,
  category,
  cardDescription,
  coverSrc,
  coverAlt,
  technologyStackId,
  level,
  animationIndex = 0,
}: HobbyCardProps) => {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: animationIndex * 0.06,
        ease: "easeOut",
      }}
    >
      <ProjectCard
        to={`/hobbies/${id}`}
        previewAriaLabel={`View hobby project ${title}`}
        coverSrc={coverSrc}
        coverAlt={coverAlt}
        category={category}
        categoryClassName="font-semibold text-blue-primary"
        level={<HobbyLevelBadge level={level} />}
        title={<span className="font-poppins text-xl font-bold">{title}</span>}
        description={cardDescription}
        technologies={<HobbyTechnologyCardRow stackId={technologyStackId} />}
        technologiesAriaLabel="Technologies used in this hobby project"
        previewFocusRingClassName="focus-visible:ring-blue-primary"
        className="h-full"
      />
    </motion.div>
  );
};
