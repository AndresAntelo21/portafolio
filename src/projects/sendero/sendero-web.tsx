import SenderoLogo from "@/assets/vadodevs/sendero/SenderoLogo";
import { ProjectImageCarousel } from "@/components/project-detail/project-image-carousel";
import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";

const SENDERO_ACCENT = {
  accentTextClassName: "text-sendero",
  sidebarClassName: "border-[#32C2B1]/25 bg-[#32C2B1]/[0.08]",
  chipClassName: "border-[#32C2B1]/35 bg-[#32C2B1]/10",
  linkClassName:
    "border-[#32C2B1]/30 bg-[#32C2B1]/15 hover:border-[#32C2B1]/50 hover:bg-[#32C2B1]/25 focus-visible:ring-[#32C2B1]/60",
} as const;

const SENDERO_SLIDES = [
  {
    src: "/projects/vadodevs/sendero/sendero-cover.webp",
    alt: "Sendero platform cover",
  },
  {
    src: "/projects/vadodevs/sendero/sendero-slide1.webp",
    alt: "Sendero platform home section",
  },
  {
    src: "/projects/vadodevs/sendero/sendero-slide2.webp",
    alt: "Sendero platform content section",
  },
  {
    src: "/projects/vadodevs/sendero/sendero-slide3.webp",
    alt: "Sendero platform detail section",
  },
] as const;

export const SenderoWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="sendero"
      carousel={
        <ProjectImageCarousel
          slides={SENDERO_SLIDES}
          className="border-[#32C2B1]/20"
        />
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <SenderoLogo title="Sendero" className="h-12 w-auto" />
          <p className="font-poppins text-sendero/80 text-sm tracking-[0.24em] uppercase">
            AI-powered CRM platform
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("sendero")}
      period={
        <>
          August 2025 - <span className="text-sendero">Present</span>
        </>
      }
      links={[{ href: "https://sendero-crm.com", label: "Visit site" }]}
      {...SENDERO_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Sendero</strong> is an AI-powered CRM platform designed to
          help businesses manage their commercial operations and customer
          conversations across multiple channels from one centralized system.
        </p>
        <p>
          The project was developed to improve the way companies handle leads,
          client communication, follow-ups, and sales processes. Its main goal
          is to provide a smarter and more organized workflow for sales teams,
          allowing them to respond faster, automate repetitive tasks, and keep
          better control of their customer pipeline.
        </p>
        <p>
          Sendero focuses on combining CRM tools with artificial intelligence to
          support commercial teams in their daily operations, helping businesses
          save time, improve customer attention, and manage their sales
          opportunities more efficiently.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-sendero ml-5 list-disc space-y-3">
          <li>
            <strong>Multichannel conversation management</strong>: Centralized
            system to manage customer interactions from different communication
            channels.
          </li>
          <li>
            <strong>AI-powered assistance</strong>: Artificial intelligence
            support to improve response handling, automate workflows, and assist
            with customer communication.
          </li>
          <li>
            <strong>Lead management</strong>: Tools to organize potential
            customers and track their progress through the sales process.
          </li>
          <li>
            <strong>Customer follow-up</strong>: Functionality to monitor
            conversations, pending actions, and commercial opportunities.
          </li>
          <li>
            <strong>Sales pipeline organization</strong>: Structured workflow to
            help teams manage clients, prospects, and business opportunities.
          </li>
          <li>
            <strong>CRM dashboard</strong>: Interface designed to give teams
            visibility over their operations, conversations, and customer
            activity.
          </li>
          <li>
            <strong>Modern and responsive design</strong>: Optimized experience
            for users working from desktop or mobile devices.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <p>
          Sendero works as a centralized CRM platform where businesses can
          manage their sales communication and customer relationships in one
          place.
        </p>
        <p>
          The system connects different communication channels into a single
          workflow, allowing users to track conversations, organize leads, and
          manage follow-ups without switching between multiple tools.
        </p>
        <p>
          Artificial intelligence is integrated into the platform to support
          commercial processes, helping users automate certain tasks, improve
          response times, and maintain better control over customer
          interactions.
        </p>
        <p>
          The platform was built with a modern digital product approach,
          focusing on usability, scalability, and efficiency for teams that need
          a complete solution to manage sales and client communication.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
