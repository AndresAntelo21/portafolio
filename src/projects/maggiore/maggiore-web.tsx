import MaggloreLogo from "@/assets/vadodevs/maggiore/MaggioreLogo";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const MAGGIORE_ACCENT = {
  accentTextClassName: "text-maggiore",
  sidebarClassName: "border-[#2B647D]/25 bg-[#2B647D]/[0.08]",
  chipClassName: "border-[#2B647D]/35 bg-[#2B647D]/10",
  linkClassName:
    "border-[#2B647D]/30 bg-[#2B647D]/15 hover:border-[#2B647D]/50 hover:bg-[#2B647D]/25 focus-visible:ring-[#2B647D]/60",
} as const;

const MAGGIORE_SLIDES = [
  {
    src: "/projects/vadodevs/maggiore/maggiore-cover.webp",
    alt: "Maggiore platform cover",
  },
  {
    src: "/projects/vadodevs/maggiore/maggiore-slide1.webp",
    alt: "Maggiore platform home section",
  },
  {
    src: "/projects/vadodevs/maggiore/maggiore-slide2.webp",
    alt: "Maggiore platform services section",
  },
  {
    src: "/projects/vadodevs/maggiore/maggiore-slide3.webp",
    alt: "Maggiore platform detail section",
  },
] as const;

export const MaggioreWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="maggiore"
      carousel={
        <ProjectImageCarousel
          slides={MAGGIORE_SLIDES}
          className="border-[#2B647D]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <MaggloreLogo variant="white" className="h-7 w-auto" />
          <p className="font-poppins text-maggiore/80 text-sm tracking-[0.24em] uppercase">
            Client web platform
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("maggiore")}
      period={
        <>
          Delivered at <span className="text-maggiore">Vado Devs</span>
        </>
      }
      links={[]}
      {...MAGGIORE_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Maggiore</strong> is a web development project focused on a
          clear interface, solid performance, and a presentation aligned with
          the client&apos;s identity and business goals.
        </p>
        <p>
          The experience was structured to communicate services and brand value
          while keeping navigation intuitive and the interface consistent across
          devices.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-maggiore ml-5 list-disc space-y-3">
          <li>
            <strong>Brand-aligned interface</strong>: Visual design aligned with
            the client&apos;s identity and tone.
          </li>
          <li>
            <strong>Performance-focused frontend</strong>: Fast-loading
            structure with a modern React stack.
          </li>
          <li>
            <strong>Responsive layout</strong>: Adapted for desktop, tablet, and
            mobile use.
          </li>
          <li>
            <strong>Scalable architecture</strong>: Backend-ready foundation
            with Node.js, Nest.js, and PostgreSQL.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <p>
          The frontend uses <strong>React</strong>, <strong>TypeScript</strong>,{" "}
          <strong>Tailwind CSS</strong>, <strong>Vite</strong>, and{" "}
          <strong>React Router</strong> to deliver a fast and maintainable user
          interface.
        </p>
        <p>
          Data and service layers are supported by <strong>Node.js</strong>,{" "}
          <strong>Nest.js</strong>, and <strong>PostgreSQL</strong>.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
