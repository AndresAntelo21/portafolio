import type { ReactNode } from "react";
import { FaLink } from "react-icons/fa6";
import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { getProjectToolIconSrc } from "@/constants/project-tool-icons";
import {
  ProjectDetailSidebar,
  ProjectDetailSidebarBlock,
} from "@/components/project-detail/project-detail-sidebar";
import { cn } from "@/lib/utils";
import { RelatedProjects } from "@/components/project-detail/related-projects";

export type ProjectDetailLinkItem = {
  href: string;
  label: string;
};

export type ProjectDetailTechnology = {
  title: string;
  iconSrc?: string;
};

type ProjectDetailLayoutProps = {
  carousel: ReactNode;
  header: ReactNode;
  children: ReactNode;
  technologies: ProjectDetailTechnology[];
  period: ReactNode;
  links: ProjectDetailLinkItem[];
  accentTextClassName?: string;
  sidebarClassName?: string;
  chipClassName?: string;
  linkClassName?: string;
  projectId?: string;
};

export function ProjectDetailLayout({
  carousel,
  header,
  children,
  technologies,
  period,
  links,
  accentTextClassName = "text-csipro",
  sidebarClassName = "border-csipro/25 bg-csipro/[0.08]",
  chipClassName = "border-csipro/35 bg-csipro/10",
  linkClassName = "border-csipro/30 bg-csipro/15 hover:border-csipro/50 hover:bg-csipro/25 focus-visible:ring-csipro/60",
  projectId,
}: ProjectDetailLayoutProps) {
  return (
    <div className="flex flex-col gap-10 pb-8">
      {carousel}
      {header}

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start">
        <div className="flex flex-col gap-6">{children}</div>

        <ProjectDetailSidebar accentClassName={sidebarClassName}>
          <div className="space-y-8">
            <ProjectDetailSidebarBlock
              title="Technologies"
              accentClassName={accentTextClassName}
            >
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <ToolsText
                    key={technology.title}
                    title={technology.title}
                    iconSrc={
                      technology.iconSrc ?? getProjectToolIconSrc(technology.title)
                    }
                    chipClassName={chipClassName}
                  />
                ))}
              </div>
            </ProjectDetailSidebarBlock>

            <ProjectDetailSidebarBlock
              title="Period"
              accentClassName={accentTextClassName}
            >
              <div className="font-poppins text-lg text-white/90">{period}</div>
            </ProjectDetailSidebarBlock>

            {links.length > 0 ? (
              <ProjectDetailSidebarBlock
                title="Links"
                accentClassName={accentTextClassName}
              >
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "font-poppins inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2",
                        linkClassName,
                      )}
                    >
                      <FaLink aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </ProjectDetailSidebarBlock>
            ) : null}
          </div>
        </ProjectDetailSidebar>
      </div>

      {projectId ? (
        <RelatedProjects
          projectId={projectId}
          accentClassName={accentTextClassName}
        />
      ) : null}
    </div>
  );
}
