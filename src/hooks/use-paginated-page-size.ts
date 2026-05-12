import { useSyncExternalStore } from "react";

const PAGE_SIZE_DESKTOP = 6;
const PAGE_SIZE_MOBILE = 3;

function subscribeMinWidthLg(onStoreChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getMinWidthLgSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getMinWidthLgServerSnapshot() {
  return false;
}

function useIsDesktopGrid() {
  return useSyncExternalStore(
    subscribeMinWidthLg,
    getMinWidthLgSnapshot,
    getMinWidthLgServerSnapshot,
  );
}

export function usePaginatedPageSize() {
  const isDesktop = useIsDesktopGrid();
  return isDesktop ? PAGE_SIZE_DESKTOP : PAGE_SIZE_MOBILE;
}
