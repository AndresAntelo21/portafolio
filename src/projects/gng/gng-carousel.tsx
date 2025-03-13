import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import "@/index.css";

export const GnGCarousel = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      loop={true}
      className="h-70 w-full"
    >
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/gokussj1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/movilidad/img2.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/movilidad/img1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full">
          <img
            src="/public/projects/gokussj4.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
