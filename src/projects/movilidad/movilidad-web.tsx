import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { MovilidadCarousel } from "@/projects/movilidad/movilidad-carousel";

const MOVILIDAD_ACCENT = {
  accentTextClassName: "text-movilidad",
  sidebarClassName: "border-[#5381B2]/25 bg-[#5381B2]/[0.08]",
  chipClassName: "border-[#5381B2]/35 bg-[#5381B2]/10",
  linkClassName:
    "border-[#5381B2]/30 bg-[#5381B2]/15 hover:border-[#5381B2]/50 hover:bg-[#5381B2]/25 focus-visible:ring-[#5381B2]/60",
} as const;

const MOVILIDAD_TECHNOLOGIES = getProjectDetailTechnologies("movilidad");

export const MovilidadWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="movilidad"
      carousel={
        <div className="overflow-hidden rounded-2xl border border-[#5381B2]/20 bg-black/40 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06]">
          <MovilidadCarousel />
        </div>
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/projects/movilidad/movilidad-logo.svg"
              alt="Urban Mobility logo"
              className="h-10 w-10"
            />
            <h1 className="font-poppins text-3xl">MOVILIDAD URBANA</h1>
          </div>
          <p className="font-poppins text-sm tracking-[0.24em] text-movilidad/80 uppercase">
            Urban mobility research
          </p>
        </header>
      }
      technologies={MOVILIDAD_TECHNOLOGIES}
      period={
        <>
          February 2024 - <span className="text-movilidad">November 2024</span>
        </>
      }
      links={[
        { href: "https://movilidad.isi.unison.mx/", label: "Ver Proyecto" },
      ]}
      {...MOVILIDAD_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Movilidad Urbana</strong> es un proyecto diseñado para
          analizar, visualizar y optimizar el tráfico y la movilidad urbana.
          Mediante el uso de tecnología avanzada, proporciona información valiosa
          para ayudar en la planificación del transporte, optimización de rutas y
          reducción de la congestión vehicular.
        </p>
        <p>
          El sitio web de <strong>Movilidad Urbana</strong> presenta datos,
          análisis y visualizaciones sobre patrones de tráfico y movimiento
          urbano, haciendo que la información clave sea accesible para
          investigadores, planificadores urbanos y autoridades de movilidad.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-movilidad">
          <li>
            <strong>Data analysis</strong>: Displays relevant information on
            traffic and urban mobility trends.
          </li>
          <li>
            <strong>Interactive visualization</strong>: Charts and visual
            representations to improve data understanding.
          </li>
          <li>
            <strong>Accessible design</strong>: A clear, optimized interface for
            easy access to information.
          </li>
          <li>
            <strong>Research-oriented</strong>: A project focused on exploring
            solutions to improve urban mobility.
          </li>
          <li>
            <strong>Advanced technology implementation</strong>: Uses
            cutting-edge tools for data collection and processing.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={MOVILIDAD_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Urban Mobility</strong> website development integrates
          various technologies to ensure efficient data processing and clear
          presentation of information.
        </p>
        <p>
          The <strong>backend</strong> is built with <strong>Python</strong>, a
          widely used programming language for data analysis and machine
          learning. <strong>Jupyter Notebook</strong> is used for data processing,
          modeling, and generating interactive visualizations.
        </p>
        <p>
          The <strong>frontend</strong> is developed with{" "}
          <strong>plain HTML and CSS</strong>, providing a simple yet functional
          design that makes data easy to access. This technology stack ensures
          the <strong>Urban Mobility</strong> project offers an efficient and
          user-friendly platform to analyze and improve urban mobility.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
