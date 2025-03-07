import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "./sections/work-experience/work-experience";
import { Tools } from "./sections/tools/tools";
import { Projects } from "./sections/projects/projects";
export const Home = () => {
  return (
    <div className="flex flex-col gap-10 py-4">
      <Hero />
      <main className="flex flex-col gap-10 md:gap-10">
        <WorkExperience />
        <Tools />
        <Projects />
      </main>
    </div>
  );
};
