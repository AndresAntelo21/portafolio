import React from "react";

type LinkedinIconVariant = "default" | "white" | "darkness";

type LinkedinIconProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  variant?: LinkedinIconVariant;
};

export default function LinkedinIcon({
  className,
  width = 85,
  height = 86,
  title,
  variant = "default",
}: LinkedinIconProps) {
  const clipPathId = React.useId();

  const blueColor = "#006699";
  const whiteColor = "#ffffff";
  const darkColor = "#19314C";

  const backgroundColor = variant === "default" ? blueColor : "transparent";

  const iconColor =
    variant === "default"
      ? whiteColor
      : variant === "white"
        ? whiteColor
        : darkColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 85 86"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}

      <g clipPath={`url(#${clipPathId})`}>
        <path
          d="M0 6.3079C0 2.92114 2.81363 0.172119 6.28203 0.172119H78.718C82.1877 0.172119 85 2.92114 85 6.3079V79.6933C85 83.0811 82.1877 85.8281 78.718 85.8281H6.28203C2.81396 85.8281 0 83.0814 0 79.6943V6.3069V6.3079Z"
          fill={backgroundColor}
        />
        <path
          d="M25.8305 71.8548V33.2922H13.1111V71.8548H25.8318H25.8305ZM19.4734 28.0281C23.908 28.0281 26.6689 25.0669 26.6689 21.3663C26.5859 17.5814 23.908 14.7029 19.5578 14.7029C15.2045 14.7029 12.3613 17.5814 12.3613 21.366C12.3613 25.0666 15.1212 28.0277 19.3901 28.0277H19.4724L19.4734 28.0281ZM32.8709 71.8548H45.5894V50.3221C45.5894 49.1711 45.6724 48.017 46.0084 47.1949C46.9274 44.8913 49.0202 42.5066 52.5348 42.5066C57.1361 42.5066 58.9779 46.0426 58.9779 51.2271V71.8548H71.696V49.7442C71.696 37.8999 65.4219 32.3882 57.0537 32.3882C50.193 32.3882 47.1798 36.2524 45.5057 38.8843H45.5903V33.2936H32.8716C33.0376 36.9112 32.8706 71.8562 32.8706 71.8562L32.8709 71.8548Z"
          fill={iconColor}
        />
      </g>

      <defs>
        <clipPath id={clipPathId}>
          <rect width="85" height="86" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
