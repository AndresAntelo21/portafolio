import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoLogoVue } from "react-icons/io5";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
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
import Tooltip from "@/components/ui/tooltip/tooltip";
import ProjectCard from "./projects-card";
import { DiAndroid, DiSqllite, DiSwift } from "react-icons/di";

import type { ProjectCardProps } from "./projects-card";
import UmanaLogo from "@/assets/legrafica/umana/UmanaLogo";
import GngLogo from "@/assets/legrafica/gng/GngLogo";
import CbcLogo from "@/assets/legrafica/cbc/CbcLogo";
import RevoltLogo from "@/assets/legrafica/revolt/RevoltLogo";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import SenderoLogo from "@/assets/vadodevs/sendero/SenderoLogo";
import VadoDevsLogo from "@/assets/vadodevs/vadodevs/VadoLogo";
import EasySalesLogo from "@/assets/vadodevs/easysales/EasySalesLogo";
import MaggloreLogo from "@/assets/vadodevs/maggiore/MaggioreLogo";
import WashAutLogo from "@/assets/vadodevs/washaut/WashAutLogo";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

interface ProjectsProps {
  className?: string;
}

/** Pagination with blue-primary accent (matches the section heading). */
const paginationLinkBase =
  "border-blue-primary/55 text-blue-primary shadow-none hover:bg-blue-primary/15 hover:text-blue-primary focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

const paginationLinkActive =
  "!border-blue-primary !bg-blue-primary !text-white hover:!bg-blue-primary/90 hover:!text-white";

const PAGE_SIZE_LG = 6;
const PAGE_SIZE_SM = 3;

function subscribeMinWidthLg(onStoreChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMinWidthLgSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getMinWidthLgServerSnapshot() {
  return false;
}

function useIsDesktopGrid() {
  return useSyncExternalStore(
    subscribeMinWidthLg,
    getMinWidthLgSnapshot,
    getMinWidthLgServerSnapshot,
  );
}

const movilidadTechnologies = (
  <>
    <li>
      <Tooltip content="Python">
        <FaPython aria-label="Python" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="HTML">
        <FaHtml5 aria-label="HTML" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="CSS">
        <FaCss3Alt aria-label="CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Jupyter Notebook">
        <SiJupyter aria-label="Jupyter Notebook" />
      </Tooltip>
    </li>
  </>
);

const csiproTechnologies = (
  <>
    <li>
      <Tooltip content="React">
        <FaReact aria-label="React" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss aria-label="Tailwind CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vite">
        <SiVite aria-label="Vite" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="React Router">
        <SiReactrouter aria-label="React Router" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Payload CMS">
        <SiPayloadcms aria-label="Payload CMS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Next.js">
        <SiNextdotjs aria-label="Next.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vercel">
        <RiVercelFill aria-label="Vercel" />
      </Tooltip>
    </li>
  </>
);

const umanaTechnologies = (
  <>
    <li>
      <Tooltip content="Vue.js">
        <IoLogoVue aria-label="Vue.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Flutter">
        <FaFlutter aria-label="Flutter" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Dart">
        <FaDartLang aria-label="Dart" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Swift">
        <DiSwift aria-label="Swift" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Android Studio">
        <DiAndroid aria-label="Android Studio" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="MySQL">
        <SiMysql aria-label="MySQL" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="SQLite">
        <DiSqllite aria-label="SQLite" />
      </Tooltip>
    </li>
  </>
);

const gngTechnologies = (
  <>
    <li>
      <Tooltip content="Vue.js">
        <IoLogoVue aria-label="Vue.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="MySQL">
        <SiMysql aria-label="MySQL" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="SQLite">
        <DiSqllite aria-label="SQLite" />
      </Tooltip>
    </li>
  </>
);

const cbcTechnologies = (
  <>
    <li>
      <Tooltip content="React">
        <FaReact aria-label="React" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss aria-label="Tailwind CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vite">
        <SiVite aria-label="Vite" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="React Router">
        <SiReactrouter aria-label="React Router" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
  </>
);

const revoltTechnologies = (
  <>
    <li>
      <Tooltip content="Vue.js">
        <IoLogoVue aria-label="Vue.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="MySQL">
        <SiMysql aria-label="MySQL" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="SQLite">
        <DiSqllite aria-label="SQLite" />
      </Tooltip>
    </li>
  </>
);

const vadoTechnologies = (
  <>
    <li>
      <Tooltip content="React">
        <FaReact aria-label="React" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss aria-label="Tailwind CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vite">
        <SiVite aria-label="Vite" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="React Router">
        <SiReactrouter aria-label="React Router" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Nest.js">
        <SiNestjs aria-label="Nest.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="PostgreSQL">
        <BiLogoPostgresql aria-label="PostgreSQL" />
      </Tooltip>
    </li>
  </>
);

const senderoTechnologies = (
  <>
    <li>
      <Tooltip content="React">
        <FaReact aria-label="React" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss aria-label="Tailwind CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vite">
        <SiVite aria-label="Vite" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="React Router">
        <SiReactrouter aria-label="React Router" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Nest.js">
        <SiNestjs aria-label="Nest.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="PostgreSQL">
        <BiLogoPostgresql aria-label="PostgreSQL" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="OpenAI API">
        <SiOpenai aria-label="OpenAI API" />
      </Tooltip>
    </li>
  </>
);

const easysalesTechnologies = (
  <>
    <li>
      <Tooltip content="Vue.js">
        <IoLogoVue aria-label="Vue.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Nest.js">
        <SiNestjs aria-label="Nest.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="PostgreSQL">
        <BiLogoPostgresql aria-label="PostgreSQL" />
      </Tooltip>
    </li>
  </>
);

const maggioreTechnologies = (
  <>
    <li>
      <Tooltip content="React">
        <FaReact aria-label="React" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Tailwind CSS">
        <SiTailwindcss aria-label="Tailwind CSS" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Vite">
        <SiVite aria-label="Vite" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="React Router">
        <SiReactrouter aria-label="React Router" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Nest.js">
        <SiNestjs aria-label="Nest.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="PostgreSQL">
        <BiLogoPostgresql aria-label="PostgreSQL" />
      </Tooltip>
    </li>
  </>
);

const washautTechnologies = (
  <>
    <li>
      <Tooltip content="Vue.js">
        <IoLogoVue aria-label="Vue.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="JavaScript">
        <FaJs aria-label="JavaScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Swift">
        <DiSwift aria-label="Swift" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Android Studio">
        <DiAndroid aria-label="Android Studio" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="TypeScript">
        <SiTypescript aria-label="TypeScript" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Node.js">
        <FaNodeJs aria-label="Node.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="Nest.js">
        <SiNestjs aria-label="Nest.js" />
      </Tooltip>
    </li>
    <li>
      <Tooltip content="PostgreSQL">
        <BiLogoPostgresql aria-label="PostgreSQL" />
      </Tooltip>
    </li>
  </>
);

type ProjectEntry = ProjectCardProps & { id: string };

function buildProjectEntries(): ProjectEntry[] {
  return [
    {
      id: "csipro",
      to: "/csipro-web",
      previewAriaLabel: "View project CSI PRO REBOOT",
      coverSrc: "/projects/csipro/csipro-reboot/csiproreboot-cover.png",
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
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "umana",
      to: "/umana-web",
      reverse: true,
      previewAriaLabel: "View project Umana",
      coverSrc: "/projects/legrafica/umana/umana-cover.png",
      category: "Web App & Mobile App",
      categoryClassName: "font-semibold text-umana-gradient",
      title: <UmanaLogo className="h-7 w-auto" title="Umana" />,
      description:
        "Redesign of the Umana website, an online platform focused on health and routines.",
      technologies: umanaTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "gng",
      to: "/gng-web",
      previewAriaLabel: "View project Glam N Glow",
      coverSrc: "/projects/legrafica/glamnglow/glamnglow-cover.png",
      category: "Website",
      categoryClassName: "font-semibold text-gng",
      title: <GngLogo white className="h-7 w-auto" title="Glam N Glow" />,
      description:
        "Website redesign and frontend implementation with a focus on visual identity and responsive UI.",
      technologies: gngTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "cbc",
      to: "/cbc-web",
      reverse: true,
      previewAriaLabel: "View Colegio Bicultural Cananea project",
      coverSrc: "/projects/legrafica/cbc/cbc-cover.png",
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
      technologies: cbcTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "revolt",
      to: "/revolt-web",
      previewAriaLabel: "View project Revolt",
      coverSrc: "/projects/legrafica/revolt/revolt-cover.png",
      category: "Website",
      categoryClassName: "font-semibold text-revolt",
      title: <RevoltLogo className="h-7 w-auto" title="Revolt" />,
      description:
        "Website redesign and UX improvements with emphasis on performance and accessibility.",
      technologies: revoltTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "vado-landing",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Vado landing",
      coverSrc: "/projects/vadodevs/vado-landing/vado-cover.png",
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
      technologies: vadoTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "sendero",
      to: "/vado",
      previewAriaLabel: "View Vado Devs experience — Sendero",
      coverSrc: "/projects/vadodevs/sendero/sendero-cover.png",
      category: "Platform",
      categoryClassName: "font-semibold text-sendero",
      title: <SenderoLogo title="Sendero" className="h-7 w-auto" />,
      description:
        "Web experience for Sendero focused on brand storytelling, smooth navigation and accessible content presentation.",
      technologies: senderoTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "easysales",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Easysales",
      coverSrc: "/projects/vadodevs/easysales/easysales-cover.png",
      category: "Platform",
      categoryClassName: "font-semibold text-easysales",
      title: <EasySalesLogo className="h-10 w-auto" />,
      description:
        "Digital concept for Easysales to communicate product benefits, reduce reading friction and support the sales funnel.",
      technologies: easysalesTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "maggiore",
      to: "/vado",
      previewAriaLabel: "View Vado Devs experience — Maggiore",
      coverSrc: "/projects/vadodevs/maggiore/maggiore-cover.png",
      category: "Platform",
      categoryClassName: "font-semibold text-maggiore",
      title: <MaggloreLogo variant="white" className="h-7 w-auto" />,
      description:
        "Web development for Maggiore: clear interface and solid performance, aligned with the client's identity and business goals.",
      technologies: maggioreTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "washaut",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "View Vado Devs experience — Washaut",
      coverSrc: "/projects/vadodevs/washaut/washaut-cover.png",
      category: "Mobile app",
      categoryClassName: "font-semibold text-washaut",
      title: (
        <WashAutLogo variant="white" className="h-7 w-auto" title="Washaut" />
      ),
      description:
        "Website and digital presence for Washaut, focused on clear service communication and building trust at first glance.",
      technologies: washautTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "movilidad",
      to: "/movilidad-web",
      previewAriaLabel: "View project Movilidad Urbana",
      coverSrc: "/projects/unison/movilidad-urbana/movilidad-cover.png",
      category: "Research & Data",
      categoryClassName: "font-semibold text-movilidad",
      title: (
        <span className="font-poppins flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-[1.65rem]">
          <img
            src="/projects/movilidad/movilidad-logo.svg"
            alt=""
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          Movilidad urbana
        </span>
      ),
      description:
        "Traffic and urban mobility analysis and visualization project at the University of Sonora: data, maps and interface for research and planning.",
      technologies: movilidadTechnologies,
      previewFocusRingClassName: "focus-visible:ring-blue-primary",
    },
  ];
}

const PROJECT_ENTRIES = buildProjectEntries();

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/projects";
  const SectionHeading = isStandalonePage ? "h1" : "h2";
  const isLg = useIsDesktopGrid();
  const pageSize = isLg ? PAGE_SIZE_LG : PAGE_SIZE_SM;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(PROJECT_ENTRIES.length / pageSize));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const visibleEntries = useMemo(() => {
    const start = (page - 1) * pageSize;
    return PROJECT_ENTRIES.slice(start, start + pageSize);
  }, [page, pageSize]);

  const cardsTopRef = useRef<HTMLDivElement>(null);

  const scrollToCardsFromPagination = () => {
    requestAnimationFrame(() => {
      cardsTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div
      className={cn(
        "font-poppins flex flex-col gap-4 py-10 lg:gap-8",
        className,
      )}
    >
      <SectionHeading className="relative z-10 text-left text-3xl font-bold">
        MY <span className="text-blue-primary">PROJECTS</span>
      </SectionHeading>

      <div
        ref={cardsTopRef}
        className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] lg:scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))]"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {visibleEntries.map(({ id, ...cardProps }, index) => (
            <motion.div
              key={`${page}-${id}`}
              className="min-h-0"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard {...cardProps} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {totalPages > 1 ? (
        <Pagination className="pt-4 lg:pt-6" aria-label="Projects pagination">
          <PaginationContent className="flex max-w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto px-1 py-1 sm:gap-3 md:justify-center">
            <PaginationItem className="shrink-0">
              <PaginationLink
                href="#"
                size="default"
                aria-label="Previous page"
                className={cn(
                  "h-10 gap-1.5 border px-3 sm:pl-3",
                  paginationLinkBase,
                  page <= 1 &&
                    "pointer-events-none border-white/15 text-white/35 opacity-90 hover:bg-transparent hover:text-white/35",
                )}
                aria-disabled={page <= 1}
                tabIndex={page <= 1 ? -1 : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (page <= 1) return;
                  setPage((p) => Math.max(1, p - 1));
                  scrollToCardsFromPagination();
                }}
              >
                <ChevronLeft className="size-4 shrink-0" />
                <span className="hidden sm:inline">Previous</span>
              </PaginationLink>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n} className="shrink-0">
                <PaginationLink
                  href="#"
                  size="default"
                  isActive={false}
                  aria-label={`Go to page ${n}`}
                  aria-current={n === page ? "page" : undefined}
                  className={cn(
                    "flex min-h-10 min-w-10 shrink-0 items-center justify-center border px-3 font-medium",
                    paginationLinkBase,
                    n === page && paginationLinkActive,
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    if (n === page) return;
                    setPage(n);
                    scrollToCardsFromPagination();
                  }}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem className="shrink-0">
              <PaginationLink
                href="#"
                size="default"
                aria-label="Next page"
                className={cn(
                  "h-10 gap-1.5 border px-3 sm:pr-3",
                  paginationLinkBase,
                  page >= totalPages &&
                    "pointer-events-none border-white/15 text-white/35 opacity-90 hover:bg-transparent hover:text-white/35",
                )}
                aria-disabled={page >= totalPages}
                tabIndex={page >= totalPages ? -1 : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (page >= totalPages) return;
                  setPage((p) => Math.min(totalPages, p + 1));
                  scrollToCardsFromPagination();
                }}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="size-4 shrink-0" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
};
