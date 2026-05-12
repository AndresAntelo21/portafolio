import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./projects-card";
import { HOME_PROJECT_ENTRIES } from "@/constants/home-project-entries";
import { usePaginatedPageSize } from "@/hooks/use-paginated-page-size";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

const paginationLinkBase =
  "border-blue-primary/55 text-blue-primary shadow-none hover:bg-blue-primary/15 hover:text-blue-primary focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

const paginationLinkActive =
  "!border-blue-primary !bg-blue-primary !text-white hover:!bg-blue-primary/90 hover:!text-white";

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/projects";
  const SectionHeading = isStandalonePage ? "h1" : "h2";
  const pageSize = usePaginatedPageSize();
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(HOME_PROJECT_ENTRIES.length / pageSize),
  );

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const visibleEntries = useMemo(() => {
    const start = (page - 1) * pageSize;
    return HOME_PROJECT_ENTRIES.slice(start, start + pageSize);
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
