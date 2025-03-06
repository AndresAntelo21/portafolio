import { Hero } from "@/components/home/sections/hero";
import { WorkExperience } from "./sections/work-experience";
export const Home = () => {
  return (
    <div className="flex flex-col gap-10 px-10 py-4">
      <Hero />
      <main>
        <WorkExperience />
      </main>
    </div>
  );
};
