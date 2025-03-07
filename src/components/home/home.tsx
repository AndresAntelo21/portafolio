import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "./sections/work-experience/work-experience";
export const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-5 py-4">
      <Hero />
      <main>
        <WorkExperience />
      </main>
    </div>
  );
};
