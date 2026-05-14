import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const paginationLinkBase =
  "border-blue-primary/55 text-blue-primary shadow-none hover:bg-blue-primary/15 hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

const paginationLinkActive =
  "!border-blue-primary !bg-blue-primary !text-white hover:!bg-blue-primary/90 hover:!text-white";

type SectionPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  ariaLabel?: string;
  className?: string;
};

export function SectionPagination({
  page,
  totalPages,
  onPageChange,
  ariaLabel = "Section pagination",
  className,
}: SectionPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination className={cn("pt-4 lg:pt-6", className)} aria-label={ariaLabel}>
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
            onClick={(event) => {
              event.preventDefault();
              if (page <= 1) return;
              onPageChange(page - 1);
            }}
          >
            <ChevronLeft className="size-4 shrink-0" />
            <span className="hidden sm:inline">Previous</span>
          </PaginationLink>
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <PaginationItem key={pageNumber} className="shrink-0">
              <PaginationLink
                href="#"
                size="default"
                isActive={false}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={pageNumber === page ? "page" : undefined}
                className={cn(
                  "flex min-h-10 min-w-10 shrink-0 items-center justify-center border px-3 font-medium",
                  paginationLinkBase,
                  pageNumber === page && paginationLinkActive,
                )}
                onClick={(event) => {
                  event.preventDefault();
                  if (pageNumber === page) return;
                  onPageChange(pageNumber);
                }}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

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
            onClick={(event) => {
              event.preventDefault();
              if (page >= totalPages) return;
              onPageChange(page + 1);
            }}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="size-4 shrink-0" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
