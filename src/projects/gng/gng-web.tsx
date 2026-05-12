import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { GnGCarousel } from "@/projects/gng/gng-carousel";

const GNG_ACCENT = {
  accentTextClassName: "text-gng",
  sidebarClassName: "border-[#E9E8E4]/20 bg-[#E9E8E4]/[0.06]",
  chipClassName: "border-[#E9E8E4]/25 bg-[#E9E8E4]/10",
  linkClassName:
    "border-[#E9E8E4]/30 bg-[#E9E8E4]/10 hover:border-[#E9E8E4]/45 hover:bg-[#E9E8E4]/15 focus-visible:ring-[#E9E8E4]/50",
} as const;

const GNG_TECHNOLOGIES = getProjectDetailTechnologies("gng");

export const GnGWeb = () => {
  return (
    <ProjectDetailLayout
      carousel={
        <div className="overflow-hidden rounded-2xl border border-[#E9E8E4]/20 bg-black/40 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06]">
          <GnGCarousel />
        </div>
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <img
            src="/projects/gng/gng-logo.svg"
            alt="Logo de Glam N Glow by Ale Murillo"
            className="w-full max-w-md"
          />
          <p className="font-poppins text-sm tracking-[0.24em] text-gng/80 uppercase">
            Beauty studio landing page
          </p>
        </header>
      }
      technologies={GNG_TECHNOLOGIES}
      period={
        <>
          February 2025 - <span className="text-gng">March 2025</span>
        </>
      }
      links={[{ href: "https://glamnglow.mx/", label: "Visit site" }]}
      {...GNG_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={GNG_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Glam N Glow by Ale Murillo</strong> es un exclusivo{" "}
          <strong>estudio de belleza</strong> dedicado a realzar la esencia y
          unicidad de cada persona mediante servicios personalizados. Con un
          enfoque en <strong>profesionalismo</strong>, <strong>innovación</strong>{" "}
          y <strong>calidad</strong>, el estudio ofrece una experiencia única que
          resalta la belleza natural, permitiendo a cada cliente mostrar su
          estilo y confianza.
        </p>
        <p>
          Desde maquillaje profesional y tratamientos faciales hasta peinados y
          cuidado capilar, <strong>Glam N Glow</strong> es el destino ideal para
          quienes buscan servicios de belleza de primera categoría.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={GNG_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-gng">
          <li>
            <strong>Modern, functional landing page</strong>: Designed for an
            attractive and easy-to-navigate experience.
          </li>
          <li>
            <strong>Service showcase</strong>: Interactive menu with pagination
            showing all available treatments and services.
          </li>
          <li>
            <strong>Optimized booking system</strong>: Streamlined process to
            schedule appointments quickly and easily.
          </li>
          <li>
            <strong>Responsive design</strong>: Smooth navigation on any device,
            whether mobile, tablet, or desktop.
          </li>
          <li>
            <strong>Direct client connection</strong>: Quick contact options for
            inquiries and reservations.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={GNG_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Glam N Glow</strong> landing page is built with modern
          technologies to ensure smooth navigation and intuitive user
          interaction.
        </p>
        <p>
          The <strong>frontend</strong> is developed with <strong>Vue.js</strong>,
          a JavaScript framework that enables a highly interactive and dynamic
          interface. <strong>Vue Router</strong> is used to handle navigation and
          service catalog pagination efficiently, allowing users to explore
          services without unnecessary page reloads.
        </p>
        <p>
          To improve the user experience and simplify appointment booking, the
          site is designed with <strong>plain HTML and CSS</strong>, ensuring an
          elegant and professional look. In addition, <strong>Axios</strong> is
          integrated for efficient backend communication, keeping service
          information and availability always up to date.
        </p>
        <p>
          With this technology stack, the <strong>Glam N Glow</strong> website
          offers a <strong>modern</strong>, <strong>fast</strong>, and{" "}
          <strong>accessible</strong> platform where clients can explore services
          and book appointments easily and without hassle.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
