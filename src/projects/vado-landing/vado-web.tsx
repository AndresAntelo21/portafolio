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
          <VadoDevsLogo variant="white" className="h-12 w-auto" title="Vado" />
          <p className="font-poppins text-vado/80 text-sm tracking-[0.24em] uppercase">
            Corporate website
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
          <strong>Vado Devs Website</strong> is the main corporate website
          created to present the company&apos;s identity, services, projects,
          and contact channels in one centralized digital platform.
        </p>
        <p>
          The project was developed to give Vado Devs a professional online
          presence where visitors can learn about the company, explore the
          solutions it offers, and review the projects it has worked on. The
          site also helps potential clients contact the company to start a
          project and allows people interested in joining the team to apply for
          work opportunities.
        </p>
        <p>
          Its main goal is to communicate who Vado Devs is, what it does, and
          how it can help businesses build custom software and digital
          solutions.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={VADO_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-vado ml-5 list-disc space-y-3">
          <li>
            <strong>Company presentation</strong>: Section focused on explaining
            who Vado Devs is, its mission, and the value it provides as a
            software development company.
          </li>
          <li>
            <strong>Services overview</strong>: Dedicated areas to present the
            digital solutions and development services offered by the company.
          </li>
          <li>
            <strong>Projects showcase</strong>: Portfolio section where visitors
            can explore the projects Vado Devs has worked on.
          </li>
          <li>
            <strong>Client contact system</strong>: Contact flow designed for
            potential clients who want to reach out and start a project with the
            company.
          </li>
          <li>
            <strong>Job application system</strong>: Functionality that allows
            people to apply or get in touch with the company for work
            opportunities.
          </li>
          <li>
            <strong>Professional brand presence</strong>: Clean and modern
            design created to strengthen the company&apos;s digital identity.
          </li>
          <li>
            <strong>Responsive design</strong>: Optimized experience for users
            visiting the website from desktop, tablet, or mobile devices.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={VADO_ACCENT.accentTextClassName}
      >
        <p>
          The Vado Devs Website works as the main digital entry point for the
          company.
        </p>
        <p>
          Visitors can navigate through the site to learn about Vado Devs,
          understand the services it provides, and explore real projects
          developed by the team. The website organizes the company&apos;s
          information in a clear structure, making it easy for users to
          understand its experience, capabilities, and work process.
        </p>
        <p>
          The platform also includes contact flows for different types of users.
          Potential clients can use the website to reach out and request
          information about a project, while people interested in working with
          the company can use it as a channel to apply or connect with the team.
        </p>
        <p>
          The website was built with a modern, responsive approach, focused on
          usability, brand presentation, and clear communication. It helps Vado
          Devs present itself professionally while connecting with both future
          clients and potential collaborators.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
