import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { CbCCarousel } from "@/projects/cbc/cbc-carousel";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiVite } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";

export const CbCWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <CbCCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <h1 className="font-alegreya text-3xl font-normal">
          Colegio Bicultural Cananea
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
                  Periodo
                </span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 pl-2 text-xl">
              <h3>February 2025 -</h3>
              <span className="">March 2025</span>
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
                href="https://colegiobc.xyz/"
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
            <span>Descripción del Proyecto</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>Colegio Bicultural Cananea (CBC)</strong> is an educational institution committed to the holistic development of its students, offering a <strong>bilingual learning model</strong> that fosters academic, cultural, and personal growth. With an innovative approach, CBC provides a dynamic, high-quality learning environment, preparing students for future challenges.
            </p>
            <p>
              The school's website has been designed to provide <strong>clear and accessible</strong> information about its educational programs, institutional values, and admissions process, keeping the school community connected.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Institutional Information</strong>: Presentation of the school's mission, vision, and core values.
              </li>
              <li>
                <strong>Educational Programs</strong>: Details on academic levels and programs offered.
              </li>
              <li>
                <strong>Intuitive Navigation</strong>: Design optimized for a smooth user experience.
              </li>
              <li>
                <strong>Modern and Responsive Design</strong>: Ensuring a seamless experience across all devices.
              </li>
              <li>
                <strong>Contact System</strong>: Facilitating direct communication with the institution for inquiries or enrollment.
              </li>
            </ul>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>¿Cómo funciona?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Colegio Bicultural Cananea</strong> website was developed using modern technologies to ensure optimal performance and efficient navigation.
            </p>
            <p>
              The <strong>frontend</strong> is built with <strong>React</strong>, one of the most popular JavaScript libraries, providing a fast and interactive interface. <strong>TypeScript</strong> was used to improve code scalability and safety, ensuring a stable experience for users.
            </p>
            <p>
              For smooth navigation between sections, the site implements <strong>React Router</strong>, enabling smooth transitions without reloading the page. The interface design is built with <strong>Tailwind CSS</strong>, a modern framework that improves design flexibility while maintaining a clean, professional look.
            </p>
            <p>
              Finally, the site was built with <strong>Vite</strong>, a powerful development tool that improves performance and reduces load times, ensuring a fast and smooth experience on any device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
