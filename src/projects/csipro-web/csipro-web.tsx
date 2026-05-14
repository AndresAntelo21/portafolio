import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CsiCarousel } from "@/projects/csipro-web/csipro-carousel";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiReactrouter } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

export const CsiproWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CsiCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/csipro.svg"
          alt="Logo del laboratorio CSI PRO"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-3xl font-normal">
          CSI PRO <span className="rounded-xl bg-violet-800 px-2">REBOOT</span>
        </h1>
      </div>

      {/* cuadro de tecnologías */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-blue-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Technologies
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 p-2">
            <ToolsText title="React" icons={[FaReact]} />
            <ToolsText title="TypeScript" icons={[BiLogoTypescript]} />
            <ToolsText title="React Router" icons={[SiReactrouter]} />
            <ToolsText title="Tailwind" icons={[RiTailwindCssFill]} />
            <ToolsText title="Vite" icons={[SiVite]} />
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Period
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3>November 2023 -</h3>
              <span className="italic">Presente</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Links
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://csipro.isi.unison.mx/"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-700/30 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaLink />
                  Link
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="font-poppins flex w-full flex-col gap-8 text-left lg:w-[60%]">
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Project Description</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>CSI PRO REBOOT</strong> is a platform created to give visibility to the <strong>CSI PRO lab</strong> at the <strong>University of Sonora</strong>. The site's main goal is to highlight the lab's work, projects, and impact on students and professionals.
            </p>
            <p>
              This site was developed to address the lack of awareness students have about the lab, providing them with valuable information and opportunities to get involved in its activities.
            </p>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Lab presentation</strong>: Detailed information on CSI PRO's mission and objectives.</li>
              <li><strong>Members section</strong>: Dedicated area to showcase lab members and their roles in different projects.</li>
              <li><strong>Active projects</strong>: Space to showcase ongoing technology developments.</li>
              <li><strong>Events and participation</strong>: Calendar of events where the lab participates inside and outside the university.</li>
              <li><strong>Activity registration</strong>: Functionality for students to register for events and projects.</li>
              <li><strong>Modern, responsive design</strong>: Optimized for smooth navigation on mobile and desktop.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>How does it work?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>CSI PRO REBOOT</strong> site is built with modern technologies that ensure fast performance, accessibility, and a smooth user experience.
            </p>
            <p>
              The <strong>frontend</strong> was developed with <strong>React and TypeScript</strong>, providing a scalable and robust structure. <strong>React Router</strong> is used to manage navigation between sections without reloading the page.
            </p>
            <p>
              For the interface and styles, <strong>Tailwind CSS</strong> is used, achieving a clean and adaptable design. The project runs with <strong>Vite</strong>, a powerful tool that improves performance and speeds up development.
            </p>
            <p>
              With this tech stack, <strong>CSI PRO REBOOT</strong> not only informs students about the lab but also encourages them to join its community and participate actively in its projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
