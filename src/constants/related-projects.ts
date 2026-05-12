import type { ProjectTechnologyStackId } from "@/constants/project-technology-stacks";

export type RelatedProjectItem = {
  id: string;
  to: string;
  name: string;
  description: string;
  coverSrc: string;
  coverAlt: string;
  category: string;
  categoryClassName: string;
  previewFocusRingClassName: string;
  technologyStackId: ProjectTechnologyStackId;
};

export const RELATED_PROJECT_CATALOG: RelatedProjectItem[] = [
  {
    id: "csipro",
    to: "/csipro-web",
    name: "CSI PRO REBOOT",
    description:
      "Full redesign of the CSI PRO website with a new visual identity, UI design, and frontend development.",
    coverSrc: "/projects/csipro/csipro-reboot/csiproreboot-cover.png",
    coverAlt: "CSI PRO REBOOT project cover",
    category: "Website",
    categoryClassName: "font-semibold text-csipro",
    previewFocusRingClassName: "focus-visible:ring-csipro",
    technologyStackId: "csipro",
  },
  {
    id: "umana",
    to: "/umana-web",
    name: "Umana",
    description:
      "Redesign of the Umana website, an online platform focused on health and routines.",
    coverSrc: "/projects/legrafica/umana/umana-cover.png",
    coverAlt: "Umana project cover",
    category: "Web App & Mobile App",
    categoryClassName: "font-semibold text-umana-gradient",
    previewFocusRingClassName: "focus-visible:ring-csipro",
    technologyStackId: "umana",
  },
  {
    id: "gng",
    to: "/gng-web",
    name: "Glam N Glow",
    description:
      "Website redesign and frontend implementation with a focus on visual identity and responsive UI.",
    coverSrc: "/projects/legrafica/glamnglow/glamnglow-cover.png",
    coverAlt: "Glam N Glow project cover",
    category: "Website",
    categoryClassName: "font-semibold text-gng",
    previewFocusRingClassName: "focus-visible:ring-csipro",
    technologyStackId: "gng",
  },
  {
    id: "cbc",
    to: "/cbc-web",
    name: "Colegio Bicultural Cananea",
    description:
      "Website redesign and frontend development aligned with the client's brand and goals.",
    coverSrc: "/projects/legrafica/cbc/cbc-cover.png",
    coverAlt: "Colegio Bicultural Cananea project cover",
    category: "Website",
    categoryClassName: "font-semibold text-cbc",
    previewFocusRingClassName: "focus-visible:ring-csipro",
    technologyStackId: "cbc",
  },
  {
    id: "revolt",
    to: "/revolt-web",
    name: "Revolt",
    description:
      "Website redesign and UX improvements with emphasis on performance and accessibility.",
    coverSrc: "/projects/legrafica/revolt/revolt-cover.png",
    coverAlt: "Revolt project cover",
    category: "Website",
    categoryClassName: "font-semibold text-revolt",
    previewFocusRingClassName: "focus-visible:ring-csipro",
    technologyStackId: "revolt",
  },
  {
    id: "vado-landing",
    to: "/vado-web",
    name: "Vado Devs Landing",
    description:
      "Conversion-focused landing page presenting Vado Devs' value proposition with clear messaging and calls to action.",
    coverSrc: "/projects/vadodevs/vado-landing/vado-cover.png",
    coverAlt: "Vado Devs landing project cover",
    category: "Website",
    categoryClassName: "font-semibold text-vado",
    previewFocusRingClassName: "focus-visible:ring-vado",
    technologyStackId: "vado",
  },
  {
    id: "sendero",
    to: "/sendero-web",
    name: "Sendero",
    description:
      "Web experience focused on brand storytelling, smooth navigation, and accessible content presentation.",
    coverSrc: "/projects/vadodevs/sendero/sendero-cover.png",
    coverAlt: "Sendero project cover",
    category: "Platform",
    categoryClassName: "font-semibold text-sendero",
    previewFocusRingClassName: "focus-visible:ring-vado",
    technologyStackId: "sendero",
  },
  {
    id: "easysales",
    to: "/easysales-web",
    name: "Easysales",
    description:
      "Digital concept to communicate product benefits, reduce reading friction, and support the sales funnel.",
    coverSrc: "/projects/vadodevs/easysales/easysales-cover.png",
    coverAlt: "Easysales project cover",
    category: "Platform",
    categoryClassName: "font-semibold text-easysales",
    previewFocusRingClassName: "focus-visible:ring-vado",
    technologyStackId: "easysales",
  },
  {
    id: "maggiore",
    to: "/maggiore-web",
    name: "Maggiore",
    description:
      "Web development with a clear interface and solid performance, aligned with the client's identity and goals.",
    coverSrc: "/projects/vadodevs/maggiore/maggiore-cover.png",
    coverAlt: "Maggiore project cover",
    category: "Platform",
    categoryClassName: "font-semibold text-maggiore",
    previewFocusRingClassName: "focus-visible:ring-vado",
    technologyStackId: "maggiore",
  },
  {
    id: "washaut",
    to: "/washaut-web",
    name: "Washaut",
    description:
      "Website and digital presence focused on clear service communication and building trust at first glance.",
    coverSrc: "/projects/vadodevs/washaut/washaut-cover.png",
    coverAlt: "Washaut project cover",
    category: "Mobile app",
    categoryClassName: "font-semibold text-washaut",
    previewFocusRingClassName: "focus-visible:ring-vado",
    technologyStackId: "washaut",
  },
  {
    id: "movilidad",
    to: "/movilidad-web",
    name: "Movilidad Urbana",
    description:
      "Traffic and urban mobility analysis and visualization project with data, maps, and interface for research and planning.",
    coverSrc: "/projects/unison/movilidad-urbana/movilidad-cover.png",
    coverAlt: "Movilidad Urbana project cover",
    category: "Research & Data",
    categoryClassName: "font-semibold text-movilidad",
    previewFocusRingClassName: "focus-visible:ring-blue-primary",
    technologyStackId: "movilidad",
  },
];

export function getRelatedProjects(projectId: string, limit = 3) {
  const currentIndex = RELATED_PROJECT_CATALOG.findIndex(
    (project) => project.id === projectId,
  );

  if (currentIndex === -1) {
    return RELATED_PROJECT_CATALOG.filter((project) => project.id !== projectId).slice(
      0,
      limit,
    );
  }

  const related: RelatedProjectItem[] = [];

  for (
    let offset = 1;
    offset < RELATED_PROJECT_CATALOG.length && related.length < limit;
    offset += 1
  ) {
    related.push(
      RELATED_PROJECT_CATALOG[
        (currentIndex + offset) % RELATED_PROJECT_CATALOG.length
      ],
    );
  }

  return related;
}
