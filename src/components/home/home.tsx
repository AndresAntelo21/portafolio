import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "./sections/work-experience/work-experience";
import { Tools } from "./sections/tools/tools";
import { Projects } from "./sections/projects/projects";
import { About } from "@/components/home/sections/about/about";

// interface ProjectsProps {
//   className?: string;
// }

export const Home = () => {
  return (
    <>
      <main className="flex w-full flex-col gap-10">
        <Hero />
        <About />
        <WorkExperience />
        <Tools />
        <Projects />
      </main>
    </>
  );
};
