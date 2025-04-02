import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { RevoltCarousel } from "@/projects/revolt/revolt-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
// CODIGO SUCIO - PASAR TODO A UN COMPONENTE NO HAY TIEMPO, SOLO ES UNA DEMOSTRACION
// QUIEN LEA ESTO ES UN METICHE MUEJEJEJE
export const RevoltWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <RevoltCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/revolt/revolt-logo.svg"
          alt="Logo de revolt"
          className="w-50"
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
              <h3 className="">December 2024 -</h3>
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
                href="https://github.com/Legrafica/solarfuel_front"
                target="_blank"
                className="flex justify-center rounded-lg bg-blue-800/70 py-1"
              >
                <span className="flex items-center gap-2 text-lg uppercase">
                  <FaGithub />
                  Github Repository
                </span>
              </a> */}
              <a
                href="https://revoltmx.com/"
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
              <strong>Revolt</strong> is a company focused on{" "}
              <strong>sustainable energy solutions</strong>, offering solar
              panel systems that help homes and businesses reduce electricity
              costs while minimizing their environmental impact. With a focus on
              innovation and efficiency, Revolt aims to provide clean and
              accessible technology to drive a more sustainable future.
            </p>
            <p>
              The <strong>Revolt</strong> landing page is designed to showcase
              the company, its values, and the benefits of adopting solar
              energy, while also making it easy for potential customers to get
              in touch.
            </p>
          </div>
          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li>
                <strong>Modern and attractive design</strong>: A visually
                engaging interface that reinforces the brand’s identity.
              </li>
              <li>
                <strong>Clear and structured information</strong>: Explains the
                advantages of solar energy and how Revolt can help clients
                transition.
              </li>
              <li>
                <strong>Conversion-optimized layout</strong>: Strategically
                designed sections to guide users toward requesting information
                or a quote.
              </li>
              <li>
                <strong>Responsive design</strong>: Ensuring smooth navigation
                on any device, including mobile, tablet, and desktop.
              </li>
              <li>
                <strong>Quick contact options</strong>: Integrated forms and
                direct links for seamless communication with the company.
              </li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span> How It Works?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Revolt</strong> landing page is developed using{" "}
              <strong>Vue.js</strong>, a JavaScript framework that enables fast
              and dynamic user interfaces. To handle smooth navigation between
              sections without page reloads, <strong>Vue Router</strong> is
              used, ensuring a seamless browsing experience.
            </p>
            <p>
              The interface design is built with{" "}
              <strong>pure HTML and CSS</strong>, maintaining a clean and
              professional look. Additionally, <strong>JavaScript</strong>{" "}
              enhances interactivity and optimizes the user experience, making
              information easily accessible and engaging.
            </p>
            <p>
              With this technology stack, the <strong>Revolt</strong> website
              effectively presents its solar energy solutions while making it
              easy for customers to reach out and start their transition to
              sustainable energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
