import { Routes, Route } from "react-router-dom";
import { Home } from "@/components/home/home";
import { Navigator } from "@/components/navigator/navigator";
// import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "@/components/home/sections/work-experience/work-experience";
export default function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
      </Routes>
    </>
  );
}
