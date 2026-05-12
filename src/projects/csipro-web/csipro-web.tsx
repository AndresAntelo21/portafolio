import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { CsiCarousel } from "@/projects/csipro-web/csipro-carousel";

const CSI_ACCENT = {
  accentTextClassName: "text-csipro",
  sidebarClassName: "border-csipro/25 bg-csipro/[0.08]",
  chipClassName: "border-csipro/35 bg-csipro/10",
  linkClassName:
    "border-csipro/30 bg-csipro/15 hover:border-csipro/50 hover:bg-csipro/25 focus-visible:ring-csipro/60",
} as const;

const CSI_TECHNOLOGIES = getProjectDetailTechnologies("csipro");

export const CsiproWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="csipro"
      carousel={<CsiCarousel />}
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <img
            src="/projects/csipro/csipro-reboot/csiproreboot-logo.svg"
            alt="CSI PRO REBOOT logo"
            className="h-11 w-auto max-w-full md:h-12"
          />
          <p className="font-poppins text-sm tracking-[0.24em] text-csipro/80 uppercase">
            University web platform
          </p>
        </header>
      }
      technologies={CSI_TECHNOLOGIES}
      period={
        <>
          November 2023 - <span className="text-csipro italic">Presente</span>
        </>
      }
      links={[{ href: "https://csipro.isi.unison.mx/", label: "Visit site" }]}
      {...CSI_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={CSI_ACCENT.accentTextClassName}
      >
        <p>
          <strong>CSI PRO REBOOT</strong> is a platform created to give visibility
          to the <strong>CSI PRO lab</strong> at the{" "}
          <strong>University of Sonora</strong>. The site&apos;s main goal is to
          highlight the lab&apos;s work, projects, and impact on students and
          professionals.
        </p>
        <p>
          This site was developed to address the lack of awareness students have
          about the lab, providing them with valuable information and
          opportunities to get involved in its activities.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={CSI_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-csipro">
          <li>
            <strong>Lab presentation</strong>: Detailed information on CSI
            PRO&apos;s mission and objectives.
          </li>
          <li>
            <strong>Members section</strong>: Dedicated area to showcase lab
            members and their roles in different projects.
          </li>
          <li>
            <strong>Active projects</strong>: Space to showcase ongoing
            technology developments.
          </li>
          <li>
            <strong>Events and participation</strong>: Calendar of events where
            the lab participates inside and outside the university.
          </li>
          <li>
            <strong>Activity registration</strong>: Functionality for students
            to register for events and projects.
          </li>
          <li>
            <strong>Modern, responsive design</strong>: Optimized for smooth
            navigation on mobile and desktop.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={CSI_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>CSI PRO REBOOT</strong> site is built with modern
          technologies that ensure fast performance, accessibility, and a smooth
          user experience.
        </p>
        <p>
          The <strong>frontend</strong> was developed with{" "}
          <strong>React and TypeScript</strong>, providing a scalable and robust
          structure. <strong>React Router</strong> is used to manage navigation
          between sections without reloading the page.
        </p>
        <p>
          For the interface and styles, <strong>Tailwind CSS</strong> is used,
          achieving a clean and adaptable design. The project runs with{" "}
          <strong>Vite</strong>, a powerful tool that improves performance and
          speeds up development.
        </p>
        <p>
          With this tech stack, <strong>CSI PRO REBOOT</strong> not only informs
          students about the lab but also encourages them to join its community
          and participate actively in its projects.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
