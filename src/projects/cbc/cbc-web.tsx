import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { CbCCarousel } from "@/projects/cbc/cbc-carousel";

const CBC_ACCENT = {
  accentTextClassName: "text-cbc",
  sidebarClassName: "border-[#014D9C]/25 bg-[#014D9C]/[0.08]",
  chipClassName: "border-[#014D9C]/35 bg-[#014D9C]/10",
  linkClassName:
    "border-[#014D9C]/30 bg-[#014D9C]/15 hover:border-[#014D9C]/50 hover:bg-[#014D9C]/25 focus-visible:ring-[#014D9C]/60",
} as const;

const CBC_TECHNOLOGIES = getProjectDetailTechnologies("cbc");

export const CbCWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="cbc"
      carousel={
        <div className="overflow-hidden rounded-2xl border border-[#014D9C]/20 bg-black/40 ring-1 shadow-2xl shadow-black/50 ring-white/[0.06]">
          <CbCCarousel />
        </div>
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h1 className="font-alegreya text-3xl font-normal">
            Colegio Bicultural Cananea
          </h1>
          <p className="font-poppins text-cbc/80 text-sm tracking-[0.24em] uppercase">
            Institutional website
          </p>
        </header>
      }
      technologies={CBC_TECHNOLOGIES}
      period={
        <>
          February 2025 - <span className="text-cbc">March 2025</span>
        </>
      }
      links={[
        {
          href: "https://www.colegiobiculturalcananea.com",
          label: "Visit site",
        },
      ]}
      {...CBC_ACCENT}
    >
      <ProjectDetailSection
        title="Descripción del Proyecto"
        accentClassName={CBC_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Colegio Bicultural Cananea (CBC)</strong> is an educational
          institution committed to the holistic development of its students,
          offering a <strong>bilingual learning model</strong> that fosters
          academic, cultural, and personal growth. With an innovative approach,
          CBC provides a dynamic, high-quality learning environment, preparing
          students for future challenges.
        </p>
        <p>
          The school&apos;s website has been designed to provide{" "}
          <strong>clear and accessible</strong> information about its
          educational programs, institutional values, and admissions process,
          keeping the school community connected.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={CBC_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-cbc ml-5 list-disc space-y-3">
          <li>
            <strong>Institutional Information</strong>: Presentation of the
            school&apos;s mission, vision, and core values.
          </li>
          <li>
            <strong>Educational Programs</strong>: Details on academic levels
            and programs offered.
          </li>
          <li>
            <strong>Intuitive Navigation</strong>: Design optimized for a smooth
            user experience.
          </li>
          <li>
            <strong>Modern and Responsive Design</strong>: Ensuring a seamless
            experience across all devices.
          </li>
          <li>
            <strong>Contact System</strong>: Facilitating direct communication
            with the institution for inquiries or enrollment.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="¿Cómo funciona?"
        accentClassName={CBC_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Colegio Bicultural Cananea</strong> website was developed
          using modern technologies to ensure optimal performance and efficient
          navigation.
        </p>
        <p>
          The <strong>frontend</strong> is built with <strong>React</strong>,
          one of the most popular JavaScript libraries, providing a fast and
          interactive interface. <strong>TypeScript</strong> was used to improve
          code scalability and safety, ensuring a stable experience for users.
        </p>
        <p>
          For smooth navigation between sections, the site implements{" "}
          <strong>React Router</strong>, enabling smooth transitions without
          reloading the page. The interface design is built with{" "}
          <strong>Tailwind CSS</strong>, a modern framework that improves design
          flexibility while maintaining a clean, professional look.
        </p>
        <p>
          Finally, the site was built with <strong>Vite</strong>, a powerful
          development tool that improves performance and reduces load times,
          ensuring a fast and smooth experience on any device.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
