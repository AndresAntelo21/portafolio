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
          <MaggloreLogo variant="white" className="h-15 w-auto" />
          <p className="font-poppins text-maggiore/80 text-sm tracking-[0.24em] uppercase">
            Token-based management system
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("maggiore")}
      period={
        <>
          October 2025 - <span className="text-maggiore">February 2026</span>
        </>
      }
      links={[{ href: "https://maggiore.app", label: "Visit site" }]}
      {...MAGGIORE_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Maggiore</strong> is a token-based creative management system
          designed to help teams manage digital transactions, creative
          workflows, and internal operations with greater visibility and
          control.
        </p>
        <p>
          The project was developed to provide a structured platform where users
          can organize token-based processes, track activity, and manage
          transactions through a clear and efficient interface. Its main goal is
          to simplify digital management by giving teams a centralized system
          that supports transparency, organization, and operational control.
        </p>
        <p>
          Maggiore focuses on combining usability with a robust architecture,
          allowing businesses to manage their creative or transactional
          workflows in a more scalable and reliable way.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-maggiore ml-5 list-disc space-y-3">
          <li>
            <strong>Token-based management</strong>: System designed to manage
            processes and transactions using a token-based structure.
          </li>
          <li>
            <strong>Digital transaction control</strong>: Tools to track and
            manage activity with better visibility and organization.
          </li>
          <li>
            <strong>Creative workflow management</strong>: Platform created to
            support creative operations and internal management processes.
          </li>
          <li>
            <strong>Clear user interface</strong>: Simple and organized
            interface focused on usability and efficiency.
          </li>
          <li>
            <strong>Centralized platform</strong>: All key information and
            operations are managed from one digital system.
          </li>
          <li>
            <strong>Operational visibility</strong>: Allows teams to monitor
            activity, transactions, and workflow status in a structured way.
          </li>
          <li>
            <strong>Robust architecture</strong>: Built with a scalable
            foundation to support secure and reliable digital operations.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={MAGGIORE_ACCENT.accentTextClassName}
      >
        <p>
          Maggiore works as a centralized digital management platform where
          users can manage token-based transactions and creative workflows from
          a single system.
        </p>
        <p>
          The platform organizes key operations into a clear interface, allowing
          teams to track activity, control transactions, and maintain visibility
          over their internal processes.
        </p>
        <p>
          Its architecture was designed to support reliability, scalability, and
          control, making it suitable for teams that need a structured system to
          manage digital operations efficiently.
        </p>
        <p>
          By combining a token-based model with an intuitive management
          interface, Maggiore helps simplify complex workflows and provides
          better control over creative and transactional processes.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
