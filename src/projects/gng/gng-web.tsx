import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { GnGCarousel } from "@/projects/gng/gng-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
// CODIGO SUCIO - PASAR TODO A UN COMPONENTE NO HAY TIEMPO, SOLO ES UNA DEMOSTRACION
// QUIEN LEA ESTO ES UN METICHE MUEJEJEJE
export const GnGWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <GnGCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/gng/gng-logo.svg"
          alt="Logo del laboratorio CSI PRO"
          className="w-70"
        />
      </div>
      {/* cuadro de tecnologias */}
      <div className="flex w-full flex-col gap-5 lg:flex-row-reverse">
        <div className="flex h-max w-full flex-col rounded-md border-1 border-blue-800 py-4 pr-4 lg:w-[40%]">
          <div className="w-full">
            <div className="flex w-max items-center justify-center rounded-r-md bg-blue-800 px-4 py-2">
              <span className="font-poppins text-xl font-medium tracking-widest">
                Technologies
              </span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 p-2">
            <ToolsText title="Vue.js" icons={[FaVuejs]} />
            <ToolsText title="JavaScript" icons={[FaJs]} />
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
              <h3 className="">February 2025 -</h3>
              <span className="italic">Present</span>
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
              {/* <a
                href="https://github.com/Legrafica/glamnglow_front"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Github Repository
                </span>
              </a> */}
              <a
                href="https://glamnglow.mx/"
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
              <strong>Glam N Glow by Ale Murillo</strong> is an exclusive{" "}
              <strong>beauty studio</strong> dedicated to enhancing the essence
              and uniqueness of every individual through personalized services.
              With a focus on <strong>professionalism</strong>,{" "}
              <strong>innovation</strong>, <strong>and quality</strong>, the
              studio delivers a unique experience that highlights natural
              beauty, allowing each client to showcase their style and
              confidence.
            </p>
            <p>
              From professional makeup and facial treatments to hairstyling and
              hair care, <strong>Glam N Glow</strong> is the perfect destination
              for those seeking top-tier beauty services.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Modern and functional landing page</strong>: Designed
                for an attractive and easy-to-navigate user experience.
              </li>
              <li>
                <strong>Service showcase</strong>: An interactive menu with
                pagination displaying all available treatments and beauty
                services.
              </li>
              <li>
                <strong>Optimized appointment booking system</strong>: A smooth
                process for quick and easy scheduling.
              </li>
              <li>
                <strong>Responsive design</strong>: Ensuring seamless navigation
                on any device, whether mobile, tablet, or desktop.
              </li>
              <li>
                <strong>Direct client connection</strong>: Quick contact options
                for inquiries and reservations.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span> How It Works?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Glam N Glow landing page</strong> is built with modern
              technologies to ensure a smooth browsing experience and intuitive
              user interaction.
            </p>
            <p>
              The <strong>frontend</strong> is developed using{" "}
              <strong>Vue.js</strong>, a JavaScript framework that enables a
              highly interactive and dynamic interface. To handle navigation and
              service catalog pagination efficiently, we use{" "}
              <strong>Vue Router</strong>, allowing users to explore services
              without unnecessary page reloads.
            </p>
            <p>
              To enhance the user experience and streamline appointment booking,
              the website is designed with <strong>pure HTML and CSS</strong>,
              ensuring a sleek and professional aesthetic. Additionally,{" "}
              <strong>Axios</strong> is integrated for efficient backend
              communication, keeping service information and availability up to
              date at all times.
            </p>
            <p>
              With this combination of technologies, the{" "}
              <strong>Glam N Glow</strong> website offers a{" "}
              <strong>modern</strong>, <strong>fast</strong>,{" "}
              <strong>and accessible platform</strong> where clients can easily
              explore services and book appointments hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
