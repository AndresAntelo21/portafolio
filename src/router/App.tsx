import { Routes, Route } from "react-router-dom";
import { Home } from "@/components/home/home";
import { Navigator } from "@/components/navigator/navigator";
// import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "@/components/home/sections/work-experience/work-experience";
import { Projects } from "@/components/home/sections/projects/projects";
import { Foooter } from "@/components/footer/footer";
export default function App() {
  return (
    <>
      <Navigator />
      <main className="mx-auto px-4 py-4 md:w-150 md:px-0 lg:w-250">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Foooter />
    </>
  );
}
