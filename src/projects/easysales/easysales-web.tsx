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
          <EasySalesLogo className="h-10 w-auto" />
          <p className="font-poppins text-easysales/80 text-sm tracking-[0.24em] uppercase">
            Sales-focused digital product
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("easysales")}
      period={
        <>
          Delivered at <span className="text-easysales">Vado Devs</span>
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
          <strong>Easysales</strong> is a digital concept built to communicate
          product benefits clearly, reduce reading friction, and support the
          sales funnel with a focused, persuasive interface.
        </p>
        <p>
          The experience prioritizes clarity around the offer, trust-building
          content, and a structure that helps users move toward conversion.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={EASYSALES_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-easysales ml-5 list-disc space-y-3">
          <li>
            <strong>Benefit-led messaging</strong>: Sections designed to explain
            value quickly and reduce cognitive load.
          </li>
          <li>
            <strong>Sales funnel support</strong>: Layout and CTAs aligned with
            lead generation and product discovery.
          </li>
          <li>
            <strong>Responsive UI</strong>: Consistent presentation across
            screen sizes.
          </li>
          <li>
            <strong>Backend-ready architecture</strong>: Stack prepared for
            product data and service integration.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={EASYSALES_ACCENT.accentTextClassName}
      >
        <p>
          The frontend is built with <strong>Vue.js</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>TypeScript</strong>, while
          the backend uses <strong>Node.js</strong>, <strong>Nest.js</strong>,
          and <strong>PostgreSQL</strong>.
        </p>
        <p>
          This combination supports a dynamic interface with reliable data
          handling and room to extend the product experience over time.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
