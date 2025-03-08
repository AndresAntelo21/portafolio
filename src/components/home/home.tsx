import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "./sections/work-experience/work-experience";
import { Tools } from "./sections/tools/tools";
import { Projects } from "./sections/projects/projects";
export const Home = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 px-4 py-4 md:w-150 md:px-0 lg:w-250">
      <Hero />
      <main className="flex flex-col gap-10">
        <WorkExperience />
        <Tools />
        <Projects />
      </main>
    </div>
  );
};
