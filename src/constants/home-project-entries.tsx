import { ProjectTechnologyCardRow } from "@/components/project-technology/project-technology-card-row";
import type { ProjectCardProps } from "@/components/home/sections/projects/projects-card";
import UmanaLogo from "@/assets/legrafica/umana/UmanaLogo";
import GngLogo from "@/assets/legrafica/gng/GngLogo";
import CbcLogo from "@/assets/legrafica/cbc/CbcLogo";
import RevoltLogo from "@/assets/legrafica/revolt/RevoltLogo";
import SenderoLogo from "@/assets/vadodevs/sendero/SenderoLogo";
import VadoDevsLogo from "@/assets/vadodevs/vadodevs/VadoLogo";
import EasySalesLogo from "@/assets/vadodevs/easysales/EasySalesLogo";
import MaggloreLogo from "@/assets/vadodevs/maggiore/MaggioreLogo";
import WashAutLogo from "@/assets/vadodevs/washaut/WashAutLogo";

export type HomeProjectEntry = ProjectCardProps & { id: string };

export function buildHomeProjectEntries(): HomeProjectEntry[] {
  return [
    {
      id: "csipro",
      to: "/csipro-web",
      previewAriaLabel: "View project CSI PRO REBOOT",
      coverSrc: "/projects/csipro/csipro-reboot/csiproreboot-cover.webp",
      category: "Website",
      categoryClassName: "font-semibold text-csipro lg:text-csipro/85",
      title: (
        <img
          src="/projects/csipro/csipro-reboot/csiproreboot-logo.svg"
          alt="CSI PRO REBOOT"
          className="h-9 w-auto sm:h-10 lg:h-11"
        />
      ),
      description:
        "Full redesign of the CSI PRO website, a technology company. The project included a new visual identity, UI design, and frontend development using React, Tailwind CSS and Vite.",
      technologies: <ProjectTechnologyCardRow stackId="csipro" />,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "umana",
      to: "/umana-web",
      reverse: true,
      previewAriaLabel: "View project Umana",
      coverSrc: "/projects/legrafica/umana/umana-cover.webp",
      category: "Web App & Mobile App",
      categoryClassName: "font-semibold text-umana-gradient",
      title: <UmanaLogo className="h-7 w-auto" title="Umana" />,
      description:
        "Redesign of the Umana website, an online platform focused on health and routines.",
      technologies: <ProjectTechnologyCardRow stackId="umana" />,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "gng",
      to: "/gng-web",
      previewAriaLabel: "View project Glam N Glow",
      coverSrc: "/projects/legrafica/glamnglow/glamnglow-cover.webp",
      category: "Website",
      categoryClassName: "font-semibold text-gng",
      title: <GngLogo white className="h-7 w-auto" title="Glam N Glow" />,
      description:
        "Website redesign and frontend implementation with a focus on visual identity and responsive UI.",
      technologies: <ProjectTechnologyCardRow stackId="gng" />,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "cbc",
      to: "/cbc-web",
      reverse: true,
      previewAriaLabel: "View Colegio Bicultural Cananea project",
      coverSrc: "/projects/legrafica/cbc/cbc-cover.webp",
      category: "Website",
      categoryClassName: "font-semibold text-cbc",
      title: (
        <div className="flex items-center gap-3">
          <CbcLogo
            white
            className="h-7 w-auto"
            title="Colegio Bicultural Cananea"
          />
          <span className="font-poppins text-sm font-semibold">
            Colegio bicultural cananea
          </span>
        </div>
      ),
      description:
        "Website redesign and frontend development aligned with the client's brand and goals.",
      technologies: <ProjectTechnologyCardRow stackId="cbc" />,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "revolt",
      to: "/revolt-web",
      previewAriaLabel: "View project Revolt",
      coverSrc: "/projects/legrafica/revolt/revolt-cover.webp",
      category: "Website",
      categoryClassName: "font-semibold text-revolt",
      title: <RevoltLogo className="h-7 w-auto" title="Revolt" />,
      description:
        "Website redesign and UX improvements with emphasis on performance and accessibility.",
      technologies: <ProjectTechnologyCardRow stackId="revolt" />,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "vado-landing",
      to: "/vado-web",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Vado landing",
      coverSrc: "/projects/vadodevs/vado-landing/vado-cover.webp",
      category: "Website",
      categoryClassName: "font-semibold text-vado",
      title: (
        <VadoDevsLogo
          variant="white"
          className="h-7 w-auto"
          title="Vado landing"
        />
      ),
      description:
        "Landing oriented towards conversion to present Vado Devs' value proposition with clear messaging, visual hierarchy, and effective calls to action.",
      technologies: <ProjectTechnologyCardRow stackId="vado" />,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "sendero",
      to: "/sendero-web",
      previewAriaLabel: "View Vado Devs experience — Sendero",
      coverSrc: "/projects/vadodevs/sendero/sendero-cover.webp",
      category: "Platform",
      categoryClassName: "font-semibold text-sendero",
      title: <SenderoLogo title="Sendero" className="h-7 w-auto" />,
      description:
        "Web experience for Sendero focused on brand storytelling, smooth navigation and accessible content presentation.",
      technologies: <ProjectTechnologyCardRow stackId="sendero" />,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "easysales",
      to: "/easysales-web",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Easysales",
      coverSrc: "/projects/vadodevs/easysales/easysales-cover.webp",
      category: "Platform",
      categoryClassName: "font-semibold text-easysales",
      title: <EasySalesLogo className="h-10 w-auto" />,
      description:
        "Digital concept for Easysales to communicate product benefits, reduce reading friction and support the sales funnel.",
      technologies: <ProjectTechnologyCardRow stackId="easysales" />,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "maggiore",
      to: "/maggiore-web",
      previewAriaLabel: "View Vado Devs experience — Maggiore",
      coverSrc: "/projects/vadodevs/maggiore/maggiore-cover.webp",
      category: "Platform",
      categoryClassName: "font-semibold text-maggiore",
      title: <MaggloreLogo variant="white" className="h-7 w-auto" />,
      description:
        "Web development for Maggiore: clear interface and solid performance, aligned with the client's identity and business goals.",
      technologies: <ProjectTechnologyCardRow stackId="maggiore" />,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "washaut",
      to: "/washaut-web",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Washaut",
      coverSrc: "/projects/vadodevs/washaut/washaut-cover.webp",
      category: "Mobile app",
      categoryClassName: "font-semibold text-washaut",
      title: (
        <WashAutLogo variant="white" className="h-7 w-auto" title="Washaut" />
      ),
      description:
        "Website and digital presence for Washaut, focused on clear service communication and building trust at first glance.",
      technologies: <ProjectTechnologyCardRow stackId="washaut" />,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "movilidad",
      to: "/movilidad-web",
      previewAriaLabel: "View Urban Mobility project",
      coverSrc: "/projects/unison/movilidad-urbana/movilidad-cover.webp",
      category: "Research & Data",
      categoryClassName: "font-semibold text-movilidad",
      title: (
        <span className="font-poppins flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-[1.65rem]">
          <img
            src="/projects/movilidad/movilidad-logo.svg"
            alt=""
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          Urban mobility
        </span>
      ),
      description:
        "Traffic and urban mobility analysis and visualization project at the University of Sonora: data, maps and interface for research and planning.",
      technologies: <ProjectTechnologyCardRow stackId="movilidad" />,
      previewFocusRingClassName: "focus-visible:ring-blue-primary",
    },
  ];
}

export const HOME_PROJECT_ENTRIES = buildHomeProjectEntries();

export function getHomeProjectEntriesByIds(ids: readonly string[]) {
  const entriesById = new Map(
    HOME_PROJECT_ENTRIES.map((entry) => [entry.id, entry]),
  );

  return ids
    .map((id) => entriesById.get(id))
    .filter((entry): entry is HomeProjectEntry => entry !== undefined);
}

export const WORK_EXPERIENCE_PROJECT_IDS = {
  unison: ["movilidad"],
  csipro: ["csipro"],
  legrafica: ["umana", "gng", "cbc", "revolt"],
  vado: ["vado-landing", "sendero", "easysales", "maggiore", "washaut"],
} as const;
