import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProjectDetailSidebarProps = {
  children: ReactNode;
  className?: string;
  accentClassName?: string;
};

export function ProjectDetailSidebar({
  children,
  className,
  accentClassName = "border-csipro/25 bg-csipro/[0.08]",
}: ProjectDetailSidebarProps) {
  return (
    <aside
      className={cn(
        "h-max rounded-2xl border p-6 shadow-xl shadow-black/25 ring-1 ring-white/[0.05] lg:sticky lg:top-24",
        accentClassName,
        className,
      )}
    >
      {children}
    </aside>
  );
}

type ProjectDetailSidebarBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
  accentClassName?: string;
};

export function ProjectDetailSidebarBlock({
  title,
  children,
  className,
  accentClassName = "text-csipro",
}: ProjectDetailSidebarBlockProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h2
        className={cn(
          "font-poppins text-sm font-semibold tracking-[0.24em] uppercase",
          accentClassName,
        )}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
