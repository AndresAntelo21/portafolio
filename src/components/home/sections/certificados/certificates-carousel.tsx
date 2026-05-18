import type { CertificateItem } from "@/constants/certificates";
import { HomeSectionCarousel } from "@/components/home/sections/shared/home-section-carousel";
import { CertificadoCard } from "./certificado-card";

type CertificatesCarouselProps = {
  items: CertificateItem[];
};

export const CertificatesCarousel = ({ items }: CertificatesCarouselProps) => (
  <HomeSectionCarousel
    items={items}
    ariaLabel="Certificates carousel"
    getSlideAriaLabel={(certificate, index) =>
      `Go to certificate ${index + 1}: ${certificate.title}`
    }
    renderSlide={(certificate) => (
      <CertificadoCard
        title={certificate.title}
        platform={certificate.platform}
        url={certificate.url}
        logo={certificate.logo}
        imageSrc={certificate.imageSrc}
        imageAlt={certificate.imageAlt}
        badges={certificate.badges}
        animated={false}
      />
    )}
  />
);
