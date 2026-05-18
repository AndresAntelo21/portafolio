import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const DESKTOP_SLIDES_PER_PAGE = 3;
const MOBILE_SLIDE_BASIS = "basis-[80%]";
const MOBILE_PREVIOUS_PEEK_RATIO = 0.07;
const SCROLL_DURATION_MS = 32;

const desktopNavClassName =
  "top-1/2 z-20 hidden size-10 -translate-y-1/2 rounded-full border-white/15 bg-zinc-950/90 text-white shadow-lg shadow-black/40 backdrop-blur-sm hover:bg-zinc-900 hover:text-white disabled:pointer-events-none disabled:opacity-30 lg:inline-flex";

function getMobileSlideAlign(
  viewSize: number,
  snapSize: number,
  index: number,
  lastIndex: number,
) {
  if (index === 0) {
    return 0;
  }

  if (index === lastIndex) {
    return viewSize - snapSize;
  }

  return Math.round(viewSize * MOBILE_PREVIOUS_PEEK_RATIO);
}

function subscribeLgViewport(onStoreChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getLgViewportSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getLgViewportServerSnapshot() {
  return false;
}

function useIsLgViewport() {
  return useSyncExternalStore(
    subscribeLgViewport,
    getLgViewportSnapshot,
    getLgViewportServerSnapshot,
  );
}

export type HomeSectionCarouselProps<TItem extends { id: string }> = {
  items: TItem[];
  ariaLabel: string;
  getSlideAriaLabel: (item: TItem, index: number) => string;
  renderSlide: (item: TItem) => ReactNode;
};

export function HomeSectionCarousel<TItem extends { id: string }>({
  items,
  ariaLabel,
  getSlideAriaLabel,
  renderSlide,
}: HomeSectionCarouselProps<TItem>) {
  const isLg = useIsLgViewport();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lastSlideIndex = items.length - 1;

  const onSelect = useCallback((carouselApi: CarouselApi | undefined) => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, []);

  const carouselOpts = useMemo(
    () => ({
      align: isLg
        ? ("start" as const)
        : (viewSize: number, snapSize: number, index: number) =>
            getMobileSlideAlign(viewSize, snapSize, index, lastSlideIndex),
      loop: false,
      containScroll: isLg ? ("trimSnaps" as const) : ("keepSnaps" as const),
      dragFree: false,
      duration: SCROLL_DURATION_MS,
      slidesToScroll: isLg ? DESKTOP_SLIDES_PER_PAGE : 1,
    }),
    [isLg, lastSlideIndex],
  );

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    api?.reInit();
  }, [api, isLg]);

  if (items.length === 0) {
    return null;
  }

  return (
    <Carousel
      setApi={setApi}
      opts={carouselOpts}
      viewportClassName={isLg ? undefined : "box-border px-4"}
      className="w-full"
      aria-label={ariaLabel}
    >
      <div className="flex flex-col gap-6">
        <div className="relative">
          <div
            className={cn(
              "min-w-0",
              !isLg && "-mx-4 w-[calc(100%+2rem)]",
            )}
          >
            <CarouselContent className={cn(isLg ? "-ml-4" : "!-ml-0")}>
              {items.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className={cn(
                    isLg && "basis-1/3 pl-4",
                    !isLg && MOBILE_SLIDE_BASIS,
                    !isLg && index === 0 && "!pl-0",
                    !isLg && index > 0 && "pl-4",
                  )}
                >
                  {renderSlide(item)}
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <CarouselPrevious
            variant="outline"
            size="icon"
            aria-label={`Previous ${ariaLabel}`}
            className={cn(desktopNavClassName, "!left-3")}
          >
            <ChevronLeft className="size-5" />
          </CarouselPrevious>

          <CarouselNext
            variant="outline"
            size="icon"
            aria-label={`Next ${ariaLabel}`}
            className={cn(desktopNavClassName, "!right-3")}
          >
            <ChevronRight className="size-5" />
          </CarouselNext>
        </div>

        {items.length > 1 ? (
          <div
            className="flex items-center justify-center gap-2 lg:hidden"
            role="tablist"
            aria-label={`${ariaLabel} slides`}
          >
            {items.map((item, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-label={getSlideAriaLabel(item, index)}
                  aria-selected={isActive}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    isActive
                      ? "w-6 bg-blue-primary"
                      : "w-2 bg-white/30 hover:bg-white/50",
                  )}
                  onClick={() => api?.scrollTo(index)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </Carousel>
  );
}
