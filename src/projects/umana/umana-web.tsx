import { ToolsText } from "@/components/home/sections/tools/tools-text";
import { UmanaCarousel } from "@/projects/umana/umana-carousel";
import { FaVuejs, FaJs } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export const UmanaWeb = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <UmanaCarousel />
      <div className="flex items-center justify-center gap-2 md:w-full md:justify-start">
        <img
          src="/projects/umana/umana-logo-text.svg"
          alt="Umana page logo"
          className="w-50"
        />
      </div>

      {/* cuadro de tecnologías */}
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
            <ToolsText title="Vue" icons={[FaVuejs]} />
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
              <h3>November 2024 -</h3>
              <span className="">Enero 2025</span>
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
                href="https://umana.com.mx/"
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
          <p>
            <strong>Umana</strong> is an online platform designed to improve people's health and wellness through <strong>virtual workouts</strong>, <strong>personalized nutrition</strong>, and an <strong>active community</strong>. It offers access to <strong>live and on-demand exercise classes</strong>, along with a wide selection of <strong>healthy recipes</strong> and <strong>meal plans</strong> to maintain a balanced lifestyle.
            It also features a membership system that unlocks exclusive content, providing a more complete and personalized experience. In addition, its community allows users to share their progress, receive support, and stay motivated on their journey to a healthier life.
          </p>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>Features</span>
          </div>
          <div>
            <ul className="ml-5 flex list-disc flex-col gap-2">
              <li><strong>Online workouts</strong>: Recorded sessions available anytime.</li>
              <li><strong>Live classes</strong>: Real-time sessions with expert trainers.</li>
              <li><strong>Healthy recipes</strong>: Nutritious and delicious food options to improve nutrition.</li>
              <li><strong>Personalized meal plans</strong>: Designed to complement workouts and dietary needs.</li>
              <li><strong>Membership system</strong>: Access to exclusive content and additional benefits.</li>
              <li><strong>Community</strong>: Space to share experiences and stay motivated.</li>
            </ul>
          </div>

          <div className="w-full rounded-md bg-blue-800 py-2 text-center text-2xl tracking-widest">
            <span>How does it work?</span>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              The <strong>Umana</strong> platform is built with a modern and dynamic approach. The <strong>frontend</strong> is developed with <strong>Vue.js</strong>, a JavaScript framework that provides a smooth and interactive user experience. <strong>Vue Router</strong> is used to handle navigation between sections, ensuring fast, seamless transitions.
            </p>
            <p>
              <strong>Axios</strong> is used for backend communication and real-time data updates, making it easy to access workout, recipe, and meal plan information. The user interface is designed with <strong>plain HTML and CSS</strong>, ensuring a clean, responsive, and device-friendly structure.
            </p>
            <p>
              With these technologies, Umana offers an intuitive and accessible environment where users can focus on their wellness without complications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
