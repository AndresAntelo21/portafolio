import EasySalesLogo from "@/assets/vadodevs/easysales/EasySalesLogo";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const EASYSALES_ACCENT = {
  accentTextClassName: "text-easysales",
  sidebarClassName: "border-[#FF8801]/25 bg-[#FF8801]/[0.08]",
  chipClassName: "border-[#FF8801]/35 bg-[#FF8801]/10",
  linkClassName:
    "border-[#FF8801]/30 bg-[#FF8801]/15 hover:border-[#FF8801]/50 hover:bg-[#FF8801]/25 focus-visible:ring-[#FF8801]/60",
} as const;

const EASYSALES_SLIDES = [
  {
    src: "/projects/vadodevs/easysales/easysales-cover.webp",
    alt: "Easysales platform cover",
  },
  {
    src: "/projects/vadodevs/easysales/easysales-slide1.webp",
    alt: "Easysales platform overview",
  },
  {
    src: "/projects/vadodevs/easysales/easysales-slide2.webp",
    alt: "Easysales platform product section",
  },
  {
    src: "/projects/vadodevs/easysales/easysales-slide3.webp",
    alt: "Easysales platform conversion section",
  },
] as const;

export const EasysalesWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="easysales"
      carousel={
        <ProjectImageCarousel
          slides={EASYSALES_SLIDES}
          className="border-[#FF8801]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <EasySalesLogo className="h-20 w-auto" />
          <p className="font-poppins text-easysales/80 text-sm tracking-[0.24em] uppercase">
            Sales-focused digital product
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("easysales")}
      period={
        <>
          August 2025 - <span className="text-easysales">October 2025</span>
        </>
      }
      links={[]}
      {...EASYSALES_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={EASYSALES_ACCENT.accentTextClassName}
      >
        <p>
          <strong>EasySales</strong> is a digital platform focused on helping
          businesses improve their sales operations, internal workflows, and
          commercial processes through technology.
        </p>
        <p>
          The project was developed to support a growing team that needed to
          move faster without spending months searching for and hiring
          developers. The main goal was to help the product continue evolving by
          integrating technical talent that could adapt to the team, contribute
          to the development process, and support the platform&apos;s growth.
        </p>
        <p>
          EasySales focuses on improving business efficiency by supporting
          sales-related operations, streamlining digital processes, and helping
          teams work with better structure and speed.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={EASYSALES_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-easysales ml-5 list-disc space-y-3">
          <li>
            <strong>Sales process support</strong>: Platform focused on
            improving commercial operations and sales-related workflows.
          </li>
          <li>
            <strong>Workflow optimization</strong>: Helps organize internal
            processes and reduce operational friction.
          </li>
          <li>
            <strong>Scalable product development</strong>: Built and improved
            with a technical approach that supports product growth.
          </li>
          <li>
            <strong>Team collaboration</strong>: Development support integrated
            into the existing team to maintain a smooth workflow.
          </li>
          <li>
            <strong>Digital operations management</strong>: Tools and structure
            designed to help businesses manage sales activity more efficiently.
          </li>
          <li>
            <strong>User-focused experience</strong>: Interface and
            functionality designed to make sales operations easier to manage.
          </li>
          <li>
            <strong>Growth-oriented architecture</strong>: Technical foundation
            created to support future improvements and product scalability.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={EASYSALES_ACCENT.accentTextClassName}
      >
        <p>
          EasySales works as a digital solution that helps businesses manage and
          improve their sales-related processes through a structured platform.
        </p>
        <p>
          The project involved supporting the product&apos;s development by
          integrating technical talent into the existing team, allowing the
          company to continue building features, improving workflows, and moving
          faster without slowing down its product roadmap.
        </p>
        <p>
          The platform is designed to organize commercial operations, improve
          efficiency, and provide a better digital experience for teams that
          need to manage sales activity in a more scalable way.
        </p>
        <p>
          By combining product development support with a focus on sales process
          optimization, EasySales helps businesses operate with more control,
          speed, and flexibility.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
