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
  SiNextdotjs,
  SiPayloadcms,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import ProjectCard from "./projects-card";
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

interface ProjectsProps {
  className?: string;
}

/** Paginación con acento blue-primary (coincide con el heading de la sección). */
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
      <FaPython title="Python" />
    </li>
    <li>
      <FaHtml5 title="HTML" />
    </li>
    <li>
      <FaCss3Alt title="CSS" />
    </li>
    <li>
      <FaJs title="JavaScript" />
    </li>
    <li>
      <SiJupyter title="Jupyter Notebook" />
    </li>
  </>
);

const csiproTechnologies = (
  <>
    <li>
      <FaReact title="React" />
    </li>
    <li>
      <SiTailwindcss title="Tailwind CSS" />
    </li>
    <li>
      <SiVite title="Vite" />
    </li>
    <li>
      <SiReactrouter title="React Router" />
    </li>
    <li>
      <SiTypescript title="TypeScript" />
    </li>
    <li>
      <FaNodeJs title="Node.js" />
    </li>
    <li>
      <SiPayloadcms title="Payload CMS" />
    </li>
    <li>
      <SiNextdotjs title="Next.js" />
    </li>
    <li>
      <RiVercelFill title="Vercel" />
    </li>
  </>
);

type ProjectEntry = ProjectCardProps & { id: string };

function buildProjectEntries(): ProjectEntry[] {
  return [
    {
      id: "csipro",
      to: "/csipro-web",
      previewAriaLabel: "Ver proyecto CSI PRO REBOOT",
      coverSrc: "/projects/csipro/csipro-reboot/csiproreboot-cover.png",
      category: "Página web",
      categoryClassName: "text-csipro lg:text-csipro/85",
      title: (
        <img
          src="/projects/csipro/csipro-reboot/csiproreboot-logo.svg"
          alt="CSI PRO REBOOT"
          className="h-9 w-auto sm:h-10 lg:h-11"
        />
      ),
      description:
        "Rediseño completo del sitio web de CSI PRO, una empresa de tecnología. El proyecto incluyó la creación de una nueva identidad visual, diseño de interfaz de usuario y desarrollo frontend utilizando React, Tailwind CSS y Vite.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "umana",
      to: "/umana-web",
      reverse: true,
      previewAriaLabel: "Ver proyecto Umana",
      coverSrc: "/projects/legrafica/umana/umana-cover.png",
      category: "Página web",
      categoryClassName: "text-csipro lg:text-csipro/85",
      title: <UmanaLogo className="h-7 w-auto" title="Umana" />,
      description:
        "Rediseño completo del sitio web de Umana, una plataforma en línea enfocada en salud y rutinas.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "gng",
      to: "/gng-web",
      previewAriaLabel: "Ver proyecto Glam N Glow",
      coverSrc: "/projects/legrafica/glamnglow/glamnglow-cover.png",
      category: "Página web",
      categoryClassName: "text-csipro lg:text-csipro/85",
      title: <GngLogo white className="h-7 w-auto" title="Glam N Glow" />,
      description:
        "Rediseño completo del sitio web de CSI PRO, una empresa de tecnología. El proyecto incluyó la creación de una nueva identidad visual, diseño de interfaz de usuario y desarrollo frontend utilizando React, Tailwind CSS y Vite.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "cbc",
      to: "/cbc-web",
      reverse: true,
      previewAriaLabel: "Ver proyecto Colegio Bicultural Cananea",
      coverSrc: "/projects/legrafica/cbc/cbc-cover.png",
      category: "Página web",
      categoryClassName: "text-csipro lg:text-csipro/85",
      title: (
        <CbcLogo
          white
          className="h-7 w-auto"
          title="Colegio Bicultural Cananea"
        />
      ),
      description:
        "Rediseño completo del sitio web de CSI PRO, una empresa de tecnología. El proyecto incluyó la creación de una nueva identidad visual, diseño de interfaz de usuario y desarrollo frontend utilizando React, Tailwind CSS y Vite.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "revolt",
      to: "/revolt-web",
      previewAriaLabel: "Ver proyecto Revolt",
      coverSrc: "/projects/legrafica/revolt/revolt-cover.png",
      category: "Página web",
      categoryClassName: "text-csipro lg:text-csipro/85",
      title: <RevoltLogo className="h-7 w-auto" title="Revolt" />,
      description:
        "Rediseño completo del sitio web de CSI PRO, una empresa de tecnología. El proyecto incluyó la creación de una nueva identidad visual, diseño de interfaz de usuario y desarrollo frontend utilizando React, Tailwind CSS y Vite.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-csipro",
    },
    {
      id: "vado-landing",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "Ver experiencia Vado Devs — Vado landing",
      coverSrc: "/projects/vadodevs/vado-landing/vado-cover.png",
      category: "Página web",
      categoryClassName: "text-vado lg:text-vado/85",
      title: (
        <VadoDevsLogo
          variant="white"
          className="h-7 w-auto"
          title="Vado landing"
        />
      ),
      description:
        "Landing orientada a conversión para presentar la propuesta de valor de Vado Devs con mensaje claro, jerarquía visual y llamadas a la acción efectivas.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "sendero",
      to: "/vado",
      previewAriaLabel: "Ver experiencia Vado Devs — Sendero",
      coverSrc: "/projects/vadodevs/sendero/sendero-cover.png",
      category: "Página web",
      categoryClassName: "text-vado lg:text-vado/85",
      title: <SenderoLogo title="Sendero" className="h-7 w-auto" />,
      description:
        "Experiencia web para Sendero con foco en narrativa de marca, navegación fluida y contenido presentado de forma ordenada y accesible.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "easysales",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "Ver experiencia Vado Devs — Easysales",
      coverSrc: "/projects/vadodevs/easysales/easysales-cover.png",
      category: "Página web",
      categoryClassName: "text-vado lg:text-vado/85",
      title: <EasySalesLogo className="h-10 w-auto" />,
      description:
        "Propuesta digital para Easysales para comunicar beneficios del producto, reducir fricción en la lectura y apoyar el embudo comercial.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "maggiore",
      to: "/vado",
      previewAriaLabel: "Ver experiencia Vado Devs — Maggiore",
      coverSrc: "/projects/vadodevs/maggiore/maggiore-cover.png",
      category: "Página web",
      categoryClassName: "text-vado lg:text-vado/85",
      title: <MaggloreLogo variant="white" className="h-7 w-auto" />,
      description:
        "Desarrollo web para Maggiore: interfaz clara y rendimiento sólido, alineado con la identidad del cliente y objetivos de negocio.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "washaut",
      to: "/vado",
      reverse: true,
      previewAriaLabel: "Ver experiencia Vado Devs — Washaut",
      coverSrc: "/projects/vadodevs/washaut/washaut-cover.png",
      category: "Página web",
      categoryClassName: "text-vado lg:text-vado/85",
      title: (
        <WashAutLogo variant="white" className="h-7 w-auto" title="Washaut" />
      ),
      description:
        "Sitio y presencia digital para Washaut, enfocado en comunicar el servicio de forma directa y generar confianza desde el primer vistazo.",
      technologies: csiproTechnologies,
      previewFocusRingClassName: "focus-visible:ring-vado",
    },
    {
      id: "movilidad",
      to: "/movilidad-web",
      previewAriaLabel: "Ver proyecto Movilidad Urbana",
      coverSrc: "/projects/unison/movilidad-urbana/movilidad-cover.png",
      category: "Investigación y datos",
      categoryClassName: "text-blue-primary lg:text-blue-primary/85",
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
        "Proyecto de análisis y visualización de tráfico y movilidad urbana en la Universidad de Sonora: datos, mapas e interfaz para investigación y planificación.",
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
        <Pagination
          className="pt-4 lg:pt-6"
          aria-label="Paginación de proyectos"
        >
          <PaginationContent className="flex max-w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto px-1 py-1 sm:gap-3 md:justify-center">
            <PaginationItem className="shrink-0">
              <PaginationLink
                href="#"
                size="default"
                aria-label="Página anterior"
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
                <span className="hidden sm:inline">Anterior</span>
              </PaginationLink>
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n} className="shrink-0">
                <PaginationLink
                  href="#"
                  size="default"
                  isActive={false}
                  aria-label={`Ir a la página ${n}`}
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
                aria-label="Página siguiente"
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
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="size-4 shrink-0" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
};
