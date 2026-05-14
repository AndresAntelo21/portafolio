import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper/modules";
import "@/index.css";
import { cn } from "@/lib/utils";

type ProjectImageCarouselProps = {
  slides: readonly { src: string; alt: string }[];
  className?: string;
};

export function ProjectImageCarousel({
  slides,
  className,
}: ProjectImageCarouselProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-black/40 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06]",
        className,
      )}
    >
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
        {slides.map((slide) => (
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
}
