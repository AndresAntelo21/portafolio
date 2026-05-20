import type { HobbyItem } from "@/constants/hobbies";
import { HomeSectionCarousel } from "@/components/home/sections/shared/home-section-carousel";
import { HobbyCard } from "./hobby-card";

type HobbiesCarouselProps = {
  items: HobbyItem[];
};

export const HobbiesCarousel = ({ items }: HobbiesCarouselProps) => (
  <HomeSectionCarousel
    items={items}
    ariaLabel="Hobbies carousel"
    getSlideAriaLabel={(hobby, index) =>
      `Go to hobby ${index + 1}: ${hobby.title}`
    }
    renderSlide={(hobby) => <HobbyCard {...hobby} animated={false} />}
  />
);
