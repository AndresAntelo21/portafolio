import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/index.css";

export const MovilidadCarousel = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      loop={true}
      className="h-60 w-full lg:h-90"
    >
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/projects/movilidad/movilidad-slide1.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/projects/movilidad/movilidad-slide2.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/projects/movilidad/movilidad-slide3.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/projects/movilidad/movilidad-slide4.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
