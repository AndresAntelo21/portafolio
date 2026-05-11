import React, { useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

export default function Tooltip({
  content,
  side = "top",
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const posClass = {
    top: "-translate-y-2 bottom-full left-1/2 -translate-x-1/2",
    bottom: "translate-y-2 top-full left-1/2 -translate-x-1/2",
    left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
    right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
  }[side];

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      <span
        role="tooltip"
        aria-hidden={!visible}
        className={`pointer-events-none absolute z-50 transform rounded-md bg-zinc-900/95 px-2 py-1 text-xs font-medium whitespace-nowrap text-white shadow-lg transition-all duration-150 ${posClass} ${
          visible ? "visible translate-y-0 opacity-100" : "invisible opacity-0"
        }`}
      >
        {content}
      </span>
    </span>
  );
}
