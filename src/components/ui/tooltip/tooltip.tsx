import React, {
  useCallback,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

type TooltipPosition = {
  top: number;
  left: number;
  transform: string;
};

const TOOLTIP_OFFSET = 8;
const VIEWPORT_PADDING = 8;

export default function Tooltip({
  content,
  side = "top",
  children,
}: TooltipProps) {
  const tooltipId = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<TooltipPosition | null>(null);

  const updatePosition = useCallback(() => {
    const trigger = triggerRef.current;

    if (!trigger) {
      return;
    }

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    let top = triggerRect.top;
    let left = triggerRect.left;
    let transform = "";

    if (side === "top" || side === "bottom") {
      top =
        side === "top"
          ? triggerRect.top - TOOLTIP_OFFSET
          : triggerRect.bottom + TOOLTIP_OFFSET;
      left = triggerRect.left + triggerRect.width / 2;
      transform = side === "top" ? "translate(-50%, -100%)" : "translate(-50%, 0)";

      if (tooltipRect) {
        const halfWidth = tooltipRect.width / 2;
        left = Math.min(
          Math.max(left, VIEWPORT_PADDING + halfWidth),
          window.innerWidth - VIEWPORT_PADDING - halfWidth,
        );
      }
    } else {
      top = triggerRect.top + triggerRect.height / 2;
      left =
        side === "left"
          ? triggerRect.left - TOOLTIP_OFFSET
          : triggerRect.right + TOOLTIP_OFFSET;
      transform =
        side === "left" ? "translate(-100%, -50%)" : "translate(0, -50%)";

      if (tooltipRect) {
        const halfHeight = tooltipRect.height / 2;
        top = Math.min(
          Math.max(top, VIEWPORT_PADDING + halfHeight),
          window.innerHeight - VIEWPORT_PADDING - halfHeight,
        );
      }
    }

    setPosition({ top, left, transform });
  }, [side]);

  useLayoutEffect(() => {
    if (!visible) {
      setPosition(null);
      return;
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [updatePosition, visible]);

  return (
    <span
      ref={triggerRef}
      aria-describedby={visible ? tooltipId : undefined}
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible
        ? createPortal(
            <span
              ref={tooltipRef}
              id={tooltipId}
              role="tooltip"
              style={{
                top: position?.top ?? 0,
                left: position?.left ?? 0,
                transform: position?.transform,
              }}
              className={`pointer-events-none fixed z-[9999] max-w-[min(18rem,calc(100vw-1rem))] rounded-md bg-zinc-900/95 px-2 py-1 text-center text-xs font-medium whitespace-normal text-white shadow-lg transition-opacity duration-150 ${
                position ? "opacity-100" : "opacity-0"
              }`}
            >
              {content}
            </span>,
            document.body,
          )
        : null}
    </span>
  );
}
