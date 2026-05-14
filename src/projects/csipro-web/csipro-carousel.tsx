import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/index.css";

const CSI_REBOOT_SLIDES = [
  {
    src: "/projects/csipro/csipro-reboot/csiproreboot-cover.webp",
    alt: "CSI PRO REBOOT landing page preview",
  },
  {
    src: "/projects/csipro/csipro-reboot/csiproreboot-slide2.webp",
    alt: "CSI PRO REBOOT members section preview",
  },
  {
    src: "/projects/csipro/csipro-reboot/csiproreboot-slide3.webp",
    alt: "CSI PRO REBOOT projects section preview",
  },
  {
    src: "/projects/csipro/csipro-reboot/csiproreboot-slide4.webp",
    alt: "CSI PRO REBOOT events section preview",
  },
] as const;

export const CsiCarousel = () => {
  return (
    <div className="csipro-project-carousel border-csipro/20 relative w-full overflow-hidden rounded-2xl border bg-black/40 ring-1 shadow-2xl shadow-black/50 ring-white/[0.06]">
      <div
        className="to-csipro/10 pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent"
        aria-hidden
      />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop
        className="h-60 w-full lg:h-[28rem]"
      >
        {CSI_REBOOT_SLIDES.map((slide) => (
          <SwiperSlide key={slide.src}>
            <div className="flex h-full w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
