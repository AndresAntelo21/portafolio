import WashAutLogo from "@/assets/vadodevs/washaut/WashAutLogo";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const WASHAUT_ACCENT = {
  accentTextClassName: "text-washaut",
  sidebarClassName: "border-[#1F3D7C]/25 bg-[#1F3D7C]/[0.08]",
  chipClassName: "border-[#1F3D7C]/35 bg-[#1F3D7C]/10",
  linkClassName:
    "border-[#1F3D7C]/30 bg-[#1F3D7C]/15 hover:border-[#1F3D7C]/50 hover:bg-[#1F3D7C]/25 focus-visible:ring-[#1F3D7C]/60",
} as const;

const WASHAUT_SLIDES = [
  {
    src: "/projects/vadodevs/washaut/washaut-cover.webp",
    alt: "Washaut digital presence cover",
  },
  {
    src: "/projects/vadodevs/washaut/washaut-slide1.webp",
    alt: "Washaut website overview",
  },
  {
    src: "/projects/vadodevs/washaut/washaut-slide2.webp",
    alt: "Washaut website services section",
  },
  {
    src: "/projects/vadodevs/washaut/washaut-slide3.webp",
    alt: "Washaut website contact section",
  },
] as const;

export const WashautWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="washaut"
      carousel={
        <ProjectImageCarousel
          slides={WASHAUT_SLIDES}
          className="border-[#1F3D7C]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <WashAutLogo variant="white" className="h-7 w-auto" title="Washaut" />
          <p className="font-poppins text-washaut/80 text-sm tracking-[0.24em] uppercase">
            Website and mobile presence
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("washaut")}
      period={
        <>
          Delivered at <span className="text-washaut">Vado Devs</span>
        </>
      }
      links={[]}
      {...WASHAUT_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={WASHAUT_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Washaut</strong> combines a website and digital presence
          focused on clear service communication and building trust at first
          glance.
        </p>
        <p>
          The project also reflects a mobile-oriented stack, with native tooling
          for iOS and Android alongside the web experience.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={WASHAUT_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-washaut ml-5 list-disc space-y-3">
          <li>
            <strong>Service-first messaging</strong>: Content structured to
            explain offerings clearly and build confidence.
          </li>
          <li>
            <strong>Cross-platform stack</strong>: Web, mobile, and backend
            technologies working together.
          </li>
          <li>
            <strong>Responsive website</strong>: Consistent presentation across
            devices.
          </li>
          <li>
            <strong>Backend integration</strong>: Node.js, Nest.js, and
            PostgreSQL for product data and services.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={WASHAUT_ACCENT.accentTextClassName}
      >
        <p>
          The web layer uses <strong>Vue.js</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>TypeScript</strong>, while
          mobile development involves <strong>Swift</strong> and{" "}
          <strong>Android Studio</strong>.
        </p>
        <p>
          Backend services are handled with <strong>Node.js</strong>,{" "}
          <strong>Nest.js</strong>, and <strong>PostgreSQL</strong> to support
          the broader product ecosystem.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
