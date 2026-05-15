import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const MOVILIDAD_ACCENT = {
  accentTextClassName: "text-movilidad",
  sidebarClassName: "border-[#5381B2]/25 bg-[#5381B2]/[0.08]",
  chipClassName: "border-[#5381B2]/35 bg-[#5381B2]/10",
  linkClassName:
    "border-[#5381B2]/30 bg-[#5381B2]/15 hover:border-[#5381B2]/50 hover:bg-[#5381B2]/25 focus-visible:ring-[#5381B2]/60",
} as const;

const MOVILIDAD_SLIDES = [
  {
    src: "/projects/unison/movilidad-urbana/movilidad-cover.webp",
    alt: "Urban Mobility platform cover",
  },
  {
    src: "/projects/unison/movilidad-urbana/movilidad-slide1.webp",
    alt: "Urban Mobility data overview",
  },
  {
    src: "/projects/unison/movilidad-urbana/movilidad-slide2.webp",
    alt: "Urban Mobility visualization",
  },
  {
    src: "/projects/unison/movilidad-urbana/movilidad-slide3.webp",
    alt: "Urban Mobility interface detail",
  },
] as const;

export const MovilidadWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="movilidad"
      carousel={
        <ProjectImageCarousel
          slides={MOVILIDAD_SLIDES}
          className="border-[#5381B2]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/projects/movilidad/movilidad-logo.svg"
              alt="Urban Mobility logo"
              className="h-10 w-10 shrink-0"
            />
            <span className="font-poppins text-movilidad text-2xl font-semibold tracking-wide uppercase sm:text-3xl">
              Urban mobility
            </span>
          </div>
          <p className="font-poppins text-movilidad/80 text-sm tracking-[0.24em] uppercase">
            Traffic analysis & visualization
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("movilidad")}
      period={
        <>
          February 2024 -{" "}
          <span className="text-movilidad">November 2024</span>
        </>
      }
      links={[
        { href: "https://movilidad.isi.unison.mx/", label: "Visit site" },
      ]}
      {...MOVILIDAD_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Urban Mobility</strong> is a project built to analyze,
          visualize, and support improvements to traffic and urban mobility. It
          uses data and tooling to surface insights that help with transport
          planning, route optimization, and easing congestion.
        </p>
        <p>
          The <strong>Urban Mobility</strong> website presents data, analysis,
          and visualizations of traffic patterns and movement in the city, so
          researchers, urban planners, and mobility authorities can access the
          information they need in one place.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-movilidad ml-5 list-disc space-y-3">
          <li>
            <strong>Data analysis</strong>: Surfaces relevant information on
            traffic and urban mobility trends.
          </li>
          <li>
            <strong>Interactive visualization</strong>: Charts and visuals that
            make patterns easier to understand.
          </li>
          <li>
            <strong>Accessible design</strong>: A clear interface optimized for
            finding information quickly.
          </li>
          <li>
            <strong>Research-oriented</strong>: Focused on exploring ways to
            improve urban mobility.
          </li>
          <li>
            <strong>Modern data pipeline</strong>: Uses solid tooling for
            collection, processing, and presentation of mobility data.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Urban Mobility</strong> site combines a lightweight
          front-end with Python-based analysis so data can be processed
          efficiently and shown clearly.
        </p>
        <p>
          The <strong>backend</strong> side relies on <strong>Python</strong>,
          well suited to analytics and modeling.{" "}
          <strong>Jupyter Notebook</strong> supports exploration, processing,
          and generating the visualizations that feed the public-facing views.
        </p>
        <p>
          The <strong>front-end</strong> uses <strong>HTML, CSS, and JavaScript</strong>{" "}
          for a straightforward, fast experience that puts maps and indicators
          within reach. Together, the stack keeps the platform practical for
          teams who need reliable urban mobility insight without unnecessary
          complexity.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
