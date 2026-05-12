import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProjectDetailSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accentClassName?: string;
};

export function ProjectDetailSection({
  title,
  children,
  className,
  accentClassName = "text-csipro",
}: ProjectDetailSectionProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-zinc-950/90 p-6 shadow-xl shadow-black/25 ring-1 ring-white/[0.05] md:p-8",
        className,
      )}
    >
      <h2
        className={cn(
          "font-poppins mb-5 text-sm font-semibold tracking-[0.24em] uppercase",
          accentClassName,
        )}
      >
        {title}
      </h2>
      <div className="font-poppins space-y-4 text-base leading-relaxed text-white/88">
        {children}
      </div>
    </section>
  );
}
