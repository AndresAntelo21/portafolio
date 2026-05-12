import React from "react";

type GmailIconVariant = "default" | "white" | "darkness";

type GmailIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  variant?: GmailIconVariant;
};

export default function GmailIcon({
  className,
  width = 88,
  height = 66,
  title,
  variant = "default",
}: GmailIconProps) {
  const clipPathId = React.useId();

  const darkColor = "#19314C";

  const whiteModePalette = {
    left: "#F1F5F9",
    right: "#F8FAFC",
    topRight: "#CBD5E1",
    center: "#FFFFFF",
    topLeft: "#E2E8F0",
  };

  const getFillColor = (
    part: "left" | "right" | "topRight" | "center" | "topLeft",
    defaultColor: string,
  ) => {
    if (variant === "darkness") return darkColor;
    if (variant === "white") return whiteModePalette[part];

    return defaultColor;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 88 66"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}

      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M6 66H20V32L0 17V60C0 63.32 2.69 66 6 66Z"
          fill={getFillColor("left", "#4285F4")}
        />
        <path
          d="M68 66H82C85.32 66 88 63.31 88 60V17L68 32"
          fill={getFillColor("right", "#34A853")}
        />
        <path
          d="M68 5.99993V31.9999L88 16.9999V8.99993C88 1.57993 79.53 -2.65007 73.6 1.79993"
          fill={getFillColor("topRight", "#FBBC04")}
        />
        <path
          d="M20 32V6L44 24L68 6V32L44 50"
          fill={getFillColor("center", "#EA4335")}
        />
        <path
          d="M0 8.99993V16.9999L20 31.9999V5.99993L14.4 1.79993C8.46 -2.65007 0 1.57993 0 8.99993Z"
          fill={getFillColor("topLeft", "#C5221F")}
        />
      </g>

      <defs>
        <clipPath id={clipPathId}>
          <rect width="88" height="66" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
