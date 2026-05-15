import type { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { getProjectToolIconSrc } from "@/constants/project-tool-icons";

export type HobbyTechnologyStackId = "url-shortening-api-landing";

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
  "url-shortening-api-landing": [
    defineTechnology("React", FaReact),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
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
