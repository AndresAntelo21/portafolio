import VadoDevsLogo from "@/assets/vadodevs/vadodevs/VadoLogo";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const VADO_ACCENT = {
  accentTextClassName: "text-vado",
  sidebarClassName: "border-[#3390FF]/25 bg-[#3390FF]/[0.08]",
  chipClassName: "border-[#3390FF]/35 bg-[#3390FF]/10",
  linkClassName:
    "border-[#3390FF]/30 bg-[#3390FF]/15 hover:border-[#3390FF]/50 hover:bg-[#3390FF]/25 focus-visible:ring-[#3390FF]/60",
} as const;

const VADO_SLIDES = [
  {
    src: "/projects/vadodevs/vado-landing/vado-cover.webp",
    alt: "Vado Devs landing page cover",
  },
  {
    src: "/projects/vadodevs/vado-landing/vado-slide1.webp",
    alt: "Vado Devs landing page hero section",
  },
  {
    src: "/projects/vadodevs/vado-landing/vado-slide2.webp",
    alt: "Vado Devs landing page services section",
  },
  {
    src: "/projects/vadodevs/vado-landing/vado-slide3.webp",
    alt: "Vado Devs landing page contact section",
  },
] as const;

export const VadoWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="vado-landing"
      carousel={
        <ProjectImageCarousel
          slides={VADO_SLIDES}
          className="border-[#3390FF]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <VadoDevsLogo variant="white" className="h-7 w-auto" title="Vado" />
          <p className="font-poppins text-vado/80 text-sm tracking-[0.24em] uppercase">
            Conversion-focused landing page
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("vado")}
      period={
        <>
          December 2025 - <span className="text-vado">January 2026</span>
        </>
      }
      links={[{ href: "https://vadodevs.com/en", label: "Visit site" }]}
      {...VADO_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={VADO_ACCENT.accentTextClassName}
      >
        <p>
          This landing page was designed to present the{" "}
          <strong>Vado Devs</strong> value proposition with clear messaging,
          strong visual hierarchy, and calls to action that guide visitors
          toward contact and conversion.
        </p>
        <p>
          The experience highlights the company&apos;s custom software
          development services while keeping navigation simple and the content
          easy to scan on desktop and mobile.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={VADO_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-vado ml-5 list-disc space-y-3">
          <li>
            <strong>Conversion-oriented layout</strong>: Sections structured to
            explain the offer and move users toward contact.
          </li>
          <li>
            <strong>Clear service positioning</strong>: Messaging focused on
            custom software, design, and business outcomes.
          </li>
          <li>
            <strong>Responsive presentation</strong>: Layout adapted for mobile,
            tablet, and desktop breakpoints.
          </li>
          <li>
            <strong>Brand-aligned UI</strong>: Visual system aligned with Vado
            Devs identity and product tone.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={VADO_ACCENT.accentTextClassName}
      >
        <p>
          The frontend was built with <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, using{" "}
          <strong>Vite</strong> for fast development and{" "}
          <strong>React Router</strong> for client-side navigation.
        </p>
        <p>
          The stack also includes <strong>Node.js</strong>,{" "}
          <strong>Nest.js</strong>, and <strong>PostgreSQL</strong> to support
          dynamic content and backend integration when needed.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
