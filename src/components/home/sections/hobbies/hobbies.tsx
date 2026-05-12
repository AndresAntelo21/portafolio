import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SectionPagination } from "@/components/ui/section-pagination";
import { HOBBY_ITEMS } from "@/constants/hobbies";
import { HobbyCard } from "./hobby-card";

const PAGE_SIZE = 6;

export const Hobbies = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/hobbies";
  const SectionHeading = isStandalonePage ? "h1" : "h2";
  const [page, setPage] = useState(1);
  const cardsTopRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(HOBBY_ITEMS.length / PAGE_SIZE));

  const visibleHobbies = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return HOBBY_ITEMS.slice(start, start + PAGE_SIZE);
  }, [page]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const scrollToCardsFromPagination = () => {
    requestAnimationFrame(() => {
      cardsTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    scrollToCardsFromPagination();
  };

  return (
    <div className="font-poppins relative z-10 flex flex-col gap-5 py-10 lg:gap-8">
      <div className="flex flex-col gap-2">
        <SectionHeading className="relative z-10 text-left text-3xl font-bold">
          MY <span className="text-blue-primary">HOBBIES</span>
        </SectionHeading>
        <p className="max-w-3xl text-sm text-zinc-400 sm:text-base">
          Personal projects and side experiments built outside client work.
        </p>
      </div>

      <div
        ref={cardsTopRef}
        className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] lg:scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))]"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {visibleHobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} {...hobby} animationIndex={index} />
          ))}
        </div>
      </div>

      <SectionPagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        ariaLabel="Hobbies pagination"
      />
    </div>
  );
};
