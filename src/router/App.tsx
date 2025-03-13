import { Routes, Route } from "react-router-dom";
import { Home } from "@/components/home/home";
import { Navigator } from "@/components/navigator/navigator";
// import { Hero } from "@/components/home/sections/hero/hero";
import { WorkExperience } from "@/components/home/sections/work-experience/work-experience";
import { Projects } from "@/components/home/sections/projects/projects";
import { Foooter } from "@/components/footer/footer";
import { CsiproWeb } from "@/projects/csipro-web/csipro-web";
import { MovilidadWeb } from "@/projects/movilidad/movilidad-web";
import { UmanaWeb } from "@/projects/umana/umana-web";
import { GnGWeb } from "@/projects/gng/gng-web";
import { CbCWeb } from "@/projects/cbc/cbc-web";
export default function App() {
  return (
    <>
      <Navigator />
      <main className="mx-auto px-4 py-4 md:w-150 md:px-0 lg:w-250">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          {/* Projects */}
          <Route path="/csipro-web" element={<CsiproWeb />} />
          <Route path="/movilidad-web" element={<MovilidadWeb />} />
          <Route path="/umana-web" element={<UmanaWeb />} />
          <Route path="/gng-web" element={<GnGWeb />} />
          <Route path="/cbc-web" element={<CbCWeb />} />
        </Routes>
      </main>
      <Foooter />
    </>
  );
}
