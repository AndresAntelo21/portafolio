import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { RevoltCarousel } from "@/projects/revolt/revolt-carousel";

const REVOLT_ACCENT = {
  accentTextClassName: "text-revolt",
  sidebarClassName: "border-[#11CCC1]/25 bg-[#11CCC1]/[0.08]",
  chipClassName: "border-[#11CCC1]/35 bg-[#11CCC1]/10",
  linkClassName:
    "border-[#11CCC1]/30 bg-[#11CCC1]/15 hover:border-[#11CCC1]/50 hover:bg-[#11CCC1]/25 focus-visible:ring-[#11CCC1]/60",
} as const;

const REVOLT_TECHNOLOGIES = getProjectDetailTechnologies("revolt");

export const RevoltWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="revolt"
      carousel={
        <div className="overflow-hidden rounded-2xl border border-[#11CCC1]/20 bg-black/40 ring-1 shadow-2xl shadow-black/50 ring-white/[0.06]">
          <RevoltCarousel />
        </div>
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <img
            src="/projects/revolt/revolt-logo.svg"
            alt="Logo de Revolt"
            className="w-50"
          />
          <p className="font-poppins text-revolt/80 text-sm tracking-[0.24em] uppercase">
            Sustainable energy landing page
          </p>
        </header>
      }
      technologies={REVOLT_TECHNOLOGIES}
      period={
        <>
          Diciembre 2024 - <span className="text-revolt">February 2025</span>
        </>
      }
      links={[{ href: "https://revoltmx.com/", label: "Visit site" }]}
      {...REVOLT_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={REVOLT_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Revolt</strong> is a company focused on{" "}
          <strong>sustainable energy solutions</strong>, offering solar panel
          systems to help homes and businesses reduce electricity costs while
          minimizing their environmental impact. With a focus on innovation and
          efficiency, Revolt aims to provide clean, accessible technology to
          drive a more sustainable future.
        </p>
        <p>
          The <strong>Revolt</strong> landing page is designed to showcase the
          company, its values, and the benefits of adopting solar energy, while
          making it easy for potential customers to get in touch.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={REVOLT_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-revolt ml-5 list-disc space-y-3">
          <li>
            <strong>Modern, attractive design</strong>: A visually appealing
            interface that reinforces the brand identity.
          </li>
          <li>
            <strong>Clear, structured information</strong>: Explains the
            advantages of solar energy and how Revolt can help customers make
            the transition.
          </li>
          <li>
            <strong>Conversion-optimized design</strong>: Strategically designed
            sections to guide users to request information or a quote.
          </li>
          <li>
            <strong>Responsive design</strong>: Ensures smooth navigation on any
            device, including mobile, tablet, and desktop.
          </li>
          <li>
            <strong>Quick contact options</strong>: Integrated forms and direct
            links for easy communication with the company.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={REVOLT_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Revolt</strong> page is built with <strong>Vue.js</strong>
          , a JavaScript framework that enables fast, dynamic interfaces.{" "}
          <strong>Vue Router</strong> is used for smooth navigation between
          sections without reloading the page, ensuring a continuous browsing
          experience.
        </p>
        <p>
          The interface is built with <strong>plain HTML and CSS</strong>,
          keeping a clean and professional look. In addition,{" "}
          <strong>JavaScript</strong> enhances interactivity and optimizes the
          user experience, making information easily accessible and engaging.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
