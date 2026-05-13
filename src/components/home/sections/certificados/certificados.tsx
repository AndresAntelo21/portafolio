import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SectionPagination } from "@/components/ui/section-pagination";
import { CERTIFICATE_ITEMS } from "@/constants/certificates";
import { usePaginatedPageSize } from "@/hooks/use-paginated-page-size";
import { CertificadoCard } from "./certificado-card";

export const Certificados = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/certificados";
  const SectionHeading = isStandalonePage ? "h1" : "h2";
  const pageSize = usePaginatedPageSize();
  const [page, setPage] = useState(1);
  const cardsTopRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(
    1,
    Math.ceil(CERTIFICATE_ITEMS.length / pageSize),
  );

  const visibleCertificates = useMemo(() => {
    const start = (page - 1) * pageSize;
    return CERTIFICATE_ITEMS.slice(start, start + pageSize);
  }, [page, pageSize]);

  useEffect(() => {
    setPage((currentPage) => Math.min(currentPage, totalPages));
  }, [totalPages]);

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
          MY <span className="text-blue-primary">CERTIFICATES</span>
        </SectionHeading>
      </div>

      <div
        ref={cardsTopRef}
        className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] lg:scroll-mt-[calc(6rem+env(safe-area-inset-top,0px))]"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {visibleCertificates.map((certificate, index) => (
            <CertificadoCard
              key={certificate.id}
              title={certificate.title}
              platform={certificate.platform}
              url={certificate.url}
              logo={certificate.logo}
              badges={certificate.badges}
              animationIndex={index}
            />
          ))}
        </div>
      </div>

      <SectionPagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        ariaLabel="Certificates pagination"
      />
    </div>
  );
};
