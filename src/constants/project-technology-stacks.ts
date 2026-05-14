import type { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiAndroid, DiSqllite, DiSwift } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { RiVercelFill } from "react-icons/ri";
import {
  SiJupyter,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPayloadcms,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { getProjectToolIconSrc } from "@/constants/project-tool-icons";

export type ProjectTechnologyStackId =
  | "csipro"
  | "umana"
  | "gng"
  | "cbc"
  | "revolt"
  | "movilidad"
  | "vado"
  | "sendero"
  | "easysales"
  | "maggiore"
  | "washaut";

export type ProjectTechnologyDefinition = {
  title: string;
  cardIcon: IconType;
  iconSrc?: string;
};

const defineTechnology = (
  title: string,
  cardIcon: IconType,
): ProjectTechnologyDefinition => ({
  title,
  cardIcon,
  iconSrc: getProjectToolIconSrc(title),
});

export const PROJECT_TECHNOLOGY_STACKS: Record<
  ProjectTechnologyStackId,
  ProjectTechnologyDefinition[]
> = {
  csipro: [
    defineTechnology("React", FaReact),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
    defineTechnology("React Router", SiReactrouter),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Payload CMS", SiPayloadcms),
    defineTechnology("Next.js", SiNextdotjs),
    defineTechnology("Vercel", RiVercelFill),
  ],
  umana: [
    defineTechnology("Vue.js", IoLogoVue),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("Flutter", FaFlutter),
    defineTechnology("Dart", FaDartLang),
    defineTechnology("Swift", DiSwift),
    defineTechnology("Android Studio", DiAndroid),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("MySQL", SiMysql),
    defineTechnology("SQLite", DiSqllite),
  ],
  gng: [
    defineTechnology("Vue.js", IoLogoVue),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("MySQL", SiMysql),
    defineTechnology("SQLite", DiSqllite),
  ],
  cbc: [
    defineTechnology("React", FaReact),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
    defineTechnology("React Router", SiReactrouter),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
  ],
  revolt: [
    defineTechnology("Vue.js", IoLogoVue),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("MySQL", SiMysql),
    defineTechnology("SQLite", DiSqllite),
  ],
  movilidad: [
    defineTechnology("Python", FaPython),
    defineTechnology("HTML", FaHtml5),
    defineTechnology("CSS", FaCss3Alt),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("Jupyter Notebook", SiJupyter),
  ],
  vado: [
    defineTechnology("React", FaReact),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
    defineTechnology("React Router", SiReactrouter),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Nest.js", SiNestjs),
    defineTechnology("PostgreSQL", BiLogoPostgresql),
  ],
  sendero: [
    defineTechnology("React", FaReact),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
    defineTechnology("React Router", SiReactrouter),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Nest.js", SiNestjs),
    defineTechnology("PostgreSQL", BiLogoPostgresql),
    defineTechnology("OpenAI API", SiOpenai),
  ],
  easysales: [
    defineTechnology("Vue.js", IoLogoVue),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Nest.js", SiNestjs),
    defineTechnology("PostgreSQL", BiLogoPostgresql),
  ],
  maggiore: [
    defineTechnology("React", FaReact),
    defineTechnology("Tailwind CSS", SiTailwindcss),
    defineTechnology("Vite", SiVite),
    defineTechnology("React Router", SiReactrouter),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Nest.js", SiNestjs),
    defineTechnology("PostgreSQL", BiLogoPostgresql),
  ],
  washaut: [
    defineTechnology("Vue.js", IoLogoVue),
    defineTechnology("JavaScript", FaJs),
    defineTechnology("Swift", DiSwift),
    defineTechnology("Android Studio", DiAndroid),
    defineTechnology("TypeScript", SiTypescript),
    defineTechnology("Node.js", FaNodeJs),
    defineTechnology("Nest.js", SiNestjs),
    defineTechnology("PostgreSQL", BiLogoPostgresql),
  ],
};

export function getProjectTechnologyStack(stackId: ProjectTechnologyStackId) {
  return PROJECT_TECHNOLOGY_STACKS[stackId];
}

export function getProjectTechnologyTitles(stackId: ProjectTechnologyStackId) {
  return getProjectTechnologyStack(stackId).map((technology) => technology.title);
}

export function getProjectDetailTechnologies(stackId: ProjectTechnologyStackId) {
  return getProjectTechnologyStack(stackId).map(({ title, iconSrc }) => ({
    title,
    iconSrc,
  }));
}
