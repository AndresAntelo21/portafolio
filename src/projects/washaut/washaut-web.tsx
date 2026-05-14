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
          <WashAutLogo
            variant="white"
            className="h-10 w-auto"
            title="Washaut"
          />
          <p className="font-poppins text-washaut/80 text-sm tracking-[0.24em] uppercase">
            Mobile car wash platform
          </p>
        </header>
      }
      technologies={getProjectDetailTechnologies("washaut")}
      period={
        <>
          September 2025 - <span className="text-washaut">May 2026</span>
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
          <strong>WashAut</strong> is a mobile application designed to make car
          wash services easier, faster, and more accessible for customers.
        </p>
        <p>
          The project was developed to help users request car wash services
          directly from their device, simplifying the process of finding,
          scheduling, and managing vehicle cleaning services. Its main goal is
          to improve the customer experience by offering a digital solution that
          connects users with car wash services in a more convenient and
          organized way.
        </p>
        <p>
          WashAut focuses on bringing efficiency to the car wash industry by
          reducing manual coordination, improving service visibility, and
          providing users with a simple platform to request vehicle cleaning
          whenever they need it.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={WASHAUT_ACCENT.accentTextClassName}
      >
        <ul className="marker:text-washaut ml-5 list-disc space-y-3">
          <li>
            <strong>Car wash service request</strong>: Allows users to request
            vehicle cleaning services directly from the application.
          </li>
          <li>
            <strong>Service scheduling</strong>: Functionality to help customers
            choose when they want their car wash service.
          </li>
          <li>
            <strong>User-friendly interface</strong>: Simple and intuitive
            design focused on making the booking process easy.
          </li>
          <li>
            <strong>Service management</strong>: Tools to organize requests,
            track service details, and manage customer needs.
          </li>
          <li>
            <strong>Mobile-first experience</strong>: Designed for users who
            want to access car wash services quickly from their phone.
          </li>
          <li>
            <strong>Customer convenience</strong>: Reduces the need for manual
            communication by centralizing the request process.
          </li>
          <li>
            <strong>Modern digital solution</strong>: Brings a more professional
            and scalable experience to traditional car wash services.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={WASHAUT_ACCENT.accentTextClassName}
      >
        <p>
          WashAut works as a digital platform where users can request and manage
          car wash services from their mobile device.
        </p>
        <p>
          The application simplifies the customer journey by allowing users to
          select the service they need, schedule it, and manage the request
          through a clear and organized interface.
        </p>
        <p>
          Instead of relying on manual messages or phone calls, WashAut
          centralizes the car wash process into a mobile experience, helping
          users save time while giving service providers a better way to receive
          and manage requests.
        </p>
        <p>
          The platform was built with a focus on usability, convenience, and
          operational efficiency, making car wash services easier to access for
          customers and easier to manage for businesses.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
