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
            src="/public/projects/movilidad/movilidad-slide1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/movilidad/movilidad-slide2.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/movilidad/movilidad-slide3.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/movilidad/movilidad-slide4.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
