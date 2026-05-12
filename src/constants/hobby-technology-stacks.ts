import type { IconType } from "react-icons";
import { FaCss3Alt, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiFigma, SiGit, SiTypescript } from "react-icons/si";
import { getProjectToolIconSrc } from "@/constants/project-tool-icons";

export type HobbyTechnologyStackId =
  | "minecraft-hero"
  | "design-lab"
  | "automation-scripts"
  | "frontend-experiments"
  | "learning-sandbox"
  | "open-source"
  | "game-dev-sketches";

export type HobbyTechnologyDefinition = {
  title: string;
  cardIcon: IconType;
  iconSrc?: string;
};

const defineTechnology = (
  title: string,
  cardIcon: IconType,
): HobbyTechnologyDefinition => ({
  title,
  cardIcon,
  iconSrc: getProjectToolIconSrc(title),
});

export const HOBBY_TECHNOLOGY_STACKS: Record<
  HobbyTechnologyStackId,
  HobbyTechnologyDefinition[]
> = {
  "minecraft-hero": [
    defineTechnology("React", FaReact),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("HTML5", FaHtml5),
    defineTechnology("CSS3", FaCss3Alt),
  ],
  "design-lab": [defineTechnology("Figma", SiFigma)],
  "automation-scripts": [
    defineTechnology("JavaScript", FaJs),
    defineTechnology("Python", FaPython),
  ],
  "frontend-experiments": [
    defineTechnology("React", FaReact),
    defineTechnology("TypeScript", SiTypescript),
  ],
  "learning-sandbox": [
    defineTechnology("React", FaReact),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("JavaScript", FaJs),
  ],
  "open-source": [defineTechnology("Git", SiGit)],
  "game-dev-sketches": [
    defineTechnology("JavaScript", FaJs),
    defineTechnology("HTML5", FaHtml5),
    defineTechnology("CSS3", FaCss3Alt),
  ],
};

export function getHobbyTechnologyStack(stackId: HobbyTechnologyStackId) {
  return HOBBY_TECHNOLOGY_STACKS[stackId];
}

export function getHobbyDetailTechnologies(stackId: HobbyTechnologyStackId) {
  return getHobbyTechnologyStack(stackId).map(({ title, iconSrc }) => ({
    title,
    iconSrc,
  }));
}
