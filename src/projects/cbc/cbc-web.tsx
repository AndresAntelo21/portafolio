import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CbCCarousel } from "@/projects/cbc/cbc-carousel";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
// CODIGO SUCIO - PASAR TODO A UN COMPONENTE NO HAY TIEMPO, SOLO ES UNA DEMOSTRACION
// QUIEN LEA ESTO ES UN METICHE MUEJEJEJE
export const CbCWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CbCCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <h1 className="font-alegreya text-3xl font-normal">
          Colegio Bicultural Cananea
        </h1>
      </div>
      {/* cuadro de tecnologias */}
      <div className="flex flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-violet-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
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
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Period
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3 className="">February 2025 -</h3>
              <span className="italic">Present</span>
            </div>
          </div>
          <div>
            <div className="w-full pt-10">
              <div className="flex w-max items-center justify-center rounded-r-md bg-violet-800 px-4 py-2">
                <span className="font-poppins text-xl font-medium tracking-widest">
                  Links
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 pt-4 pl-4 font-medium">
              <a
                href="https://github.com/Legrafica/cbc_front"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Github Repository
                </span>
              </a>
              <a
                href="https://colegiobc.xyz/"
                target="_blank"
                className="flex justify-center rounded-lg bg-violet-700/30 py-1"
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
          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span>Project Description</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Colegio Bicultural Cananea (CBC)</strong> is an
              educational institution committed to the comprehensive development
              of its students, offering a{" "}
              <strong> bilingual learning model</strong> that fosters academic,
              cultural, and personal growth. With an innovative approach, CBC
              provides a dynamic and high-quality learning environment,
              preparing students for future challenges.
            </p>
            <p>
              The school’s website has been designed to offer{" "}
              <strong> clear and accessible information</strong> about its
              educational programs, institutional values, and admissions
              process, making it easier for the school community to stay
              connected.
            </p>
          </div>
          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Institutional Information</strong>: Showcasing the
                school's mission, vision, and core values.
              </li>
              <li>
                <strong>Educational Programs</strong>: Details about the
                academic levels and programs offered.
              </li>
              <li>
                <strong>Intuitive Navigation</strong>: Optimized design for a
                smooth user experience.
              </li>
              <li>
                <strong>Modern and Responsive Design</strong>: Ensuring a
                seamless experience across all devices.
              </li>
              <li>
                <strong>Contact System</strong>: Facilitating direct
                communication with the institution for inquiries or enrollment
                processes.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-violet-800 py-2 text-center text-2xl tracking-widest">
            <span> How It Works?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Colegio Bicultural Cananea</strong> website was
              developed using modern technologies to ensure optimal performance
              and efficient navigation.
            </p>
            <p>
              The <strong>frontend</strong> is built with <strong>React</strong>
              , one of the most popular JavaScript libraries, providing a fast
              and interactive user interface. <strong>TypeScript</strong> was
              used to enhance code scalability and security, ensuring a stable
              experience for users.
            </p>
            <p>
              For seamless navigation between sections, the site implements{" "}
              <strong> React Router</strong>, allowing smooth transitions
              without page reloads. The interface design is crafted with{" "}
              <strong>Tailwind CSS</strong>, a modern framework that enhances
              layout flexibility while maintaining a clean and professional
              aesthetic.
            </p>
            <p>
              Finally, the website was built using <strong> Vite</strong>, a
              powerful development tool that improves performance and reduces
              loading times, ensuring a fast and smooth browsing experience on
              any device.
            </p>
            <p>
              With this technology stack, the{" "}
              <strong>Colegio Bicultural Cananea</strong> website provides an{" "}
              <strong>informative</strong>, <strong>accessible</strong>,{" "}
              <strong>and modern platform</strong>, making it easy for the
              school community to stay informed and connected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
