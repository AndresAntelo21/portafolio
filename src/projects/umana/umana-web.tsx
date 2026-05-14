import { ProjectDetailLayout } from "@/components/project-detail/project-detail-layout";
import { ProjectDetailSection } from "@/components/project-detail/project-detail-section";
import { getProjectDetailTechnologies } from "@/constants/project-technology-stacks";
import { UmanaCarousel } from "@/projects/umana/umana-carousel";

const UMANA_ACCENT = {
  accentTextClassName: "text-umana-gradient",
  sidebarClassName: "border-[#6A2BE4]/25 bg-[#6A2BE4]/[0.08]",
  chipClassName: "border-[#6A2BE4]/35 bg-[#6A2BE4]/10",
  linkClassName:
    "border-[#6A2BE4]/30 bg-[#6A2BE4]/15 hover:border-[#FF00B7]/40 hover:bg-[#6A2BE4]/25 focus-visible:ring-[#FF00B7]/50",
} as const;

const UMANA_TECHNOLOGIES = getProjectDetailTechnologies("umana");

export const UmanaWeb = () => {
  return (
    <ProjectDetailLayout
      projectId="umana"
      carousel={
        <div className="overflow-hidden rounded-2xl border border-[#6A2BE4]/20 bg-black/40 shadow-2xl shadow-black/50 ring-1 ring-white/[0.06]">
          <UmanaCarousel />
        </div>
      }
      header={
        <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <img
            src="/projects/umana/umana-logo-text.svg"
            alt="Umana page logo"
            className="w-full max-w-xs"
          />
          <p className="font-poppins text-sm tracking-[0.24em] text-umana-gradient uppercase">
            Wellness platform
          </p>
        </header>
      }
      technologies={UMANA_TECHNOLOGIES}
      period={
        <>
          November 2024 - <span className="text-umana-gradient">Enero 2025</span>
        </>
      }
      links={[
        { href: "https://umana.com.mx/", label: "Visit site" },
        {
          href: "https://apps.apple.com/us/app/umana/id1550976756",
          label: "App Store",
          iconSrc: "/icons/apple.svg",
        },
        {
          href: "https://play.google.com/store/apps/details?id=com.umana.umanaapp2&pcampaignid=web_share",
          label: "Play Store",
          iconSrc: "/icons/playstore.svg",
        },
      ]}
      {...UMANA_ACCENT}
    >
      <ProjectDetailSection
        title="Project Description"
        accentClassName={UMANA_ACCENT.accentTextClassName}
      >
        <p>
          <strong>Umana</strong> is an online platform designed to improve
          people&apos;s health and wellness through <strong>virtual workouts</strong>,{" "}
          <strong>personalized nutrition</strong>, and an{" "}
          <strong>active community</strong>. It offers access to{" "}
          <strong>live and on-demand exercise classes</strong>, along with a wide
          selection of <strong>healthy recipes</strong> and{" "}
          <strong>meal plans</strong> to maintain a balanced lifestyle.
        </p>
        <p>
          It also features a membership system that unlocks exclusive content,
          providing a more complete and personalized experience. In addition, its
          community allows users to share their progress, receive support, and stay
          motivated on their journey to a healthier life.
        </p>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="Features"
        accentClassName={UMANA_ACCENT.accentTextClassName}
      >
        <ul className="ml-5 list-disc space-y-3 marker:text-[#FF00B7]">
          <li>
            <strong>Online workouts</strong>: Recorded sessions available anytime.
          </li>
          <li>
            <strong>Live classes</strong>: Real-time sessions with expert
            trainers.
          </li>
          <li>
            <strong>Healthy recipes</strong>: Nutritious and delicious food
            options to improve nutrition.
          </li>
          <li>
            <strong>Personalized meal plans</strong>: Designed to complement
            workouts and dietary needs.
          </li>
          <li>
            <strong>Membership system</strong>: Access to exclusive content and
            additional benefits.
          </li>
          <li>
            <strong>Community</strong>: Space to share experiences and stay
            motivated.
          </li>
        </ul>
      </ProjectDetailSection>

      <ProjectDetailSection
        title="How does it work?"
        accentClassName={UMANA_ACCENT.accentTextClassName}
      >
        <p>
          The <strong>Umana</strong> platform is built with a modern and dynamic
          approach. The <strong>frontend</strong> is developed with{" "}
          <strong>Vue.js</strong>, a JavaScript framework that provides a smooth
          and interactive user experience. <strong>Vue Router</strong> is used to
          handle navigation between sections, ensuring fast, seamless transitions.
        </p>
        <p>
          <strong>Axios</strong> is used for backend communication and real-time
          data updates, making it easy to access workout, recipe, and meal plan
          information. The user interface is designed with{" "}
          <strong>plain HTML and CSS</strong>, ensuring a clean, responsive, and
          device-friendly structure.
        </p>
        <p>
          With these technologies, Umana offers an intuitive and accessible
          environment where users can focus on their wellness without
          complications.
        </p>
      </ProjectDetailSection>
    </ProjectDetailLayout>
  );
};
