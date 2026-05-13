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
          <SenderoLogo title="Sendero" className="h-7 w-auto" />
          <p className="font-poppins text-sendero/80 text-sm tracking-[0.24em] uppercase">
            Brand storytelling platform
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("sendero")}
      period={
        <>
          Delivered at <span className="text-sendero">Vado Devs</span>
        </>
      }
      links={[]}
      {...SENDERO_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Sendero</strong> is a web experience focused on brand
          storytelling, smooth navigation, and accessible presentation of
          content for users exploring the product narrative.
        </p>
        <p>
          The interface was designed to communicate value clearly while keeping
          reading friction low and supporting a polished, product-led feel.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-sendero ml-5 list-disc space-y-3">
          <li>
            <strong>Story-driven sections</strong>: Content blocks arranged to
            guide users through the product story.
          </li>
          <li>
            <strong>Accessible content layout</strong>: Typography and spacing
            tuned for readability across devices.
          </li>
          <li>
            <strong>Smooth navigation</strong>: Clear structure between key
            sections without unnecessary page reloads.
          </li>
          <li>
            <strong>AI-assisted capabilities</strong>: Integration points for
            OpenAI-powered experiences where relevant.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={SENDERO_ACCENT.accentTextClassName}
      >
        <p>
          The platform uses <strong>React</strong>, <strong>TypeScript</strong>,
          <strong> Tailwind CSS</strong>, and <strong>Vite</strong>, with{" "}
          <strong>React Router</strong> handling in-app navigation.
        </p>
        <p>
          Backend services are supported by <strong>Node.js</strong>,{" "}
          <strong>Nest.js</strong>, and <strong>PostgreSQL</strong>, with{" "}
          <strong>OpenAI API</strong> integration for intelligent features.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
