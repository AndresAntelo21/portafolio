import { Routes, Route } from "react-router-dom";
import { Home } from "@/components/home/home";
import { Navigator } from "@/components/navigator/navigator";
import { WorkExperience } from "@/components/home/sections/work-experience/work-experience";
import { Projects } from "@/components/home/sections/projects/projects";
import { Foooter } from "@/components/footer/footer";
import { CsiproWeb } from "@/projects/csipro-web/csipro-web";
import { MovilidadWeb } from "@/projects/movilidad/movilidad-web";
import { UmanaWeb } from "@/projects/umana/umana-web";
import { GnGWeb } from "@/projects/gng/gng-web";
import { CbCWeb } from "@/projects/cbc/cbc-web";
import { Csipro } from "@/projects/work-experience-page/csipro/csipro";
import { Legrafica } from "@/projects/work-experience-page/legrafica/legrafica";
import { Unison } from "@/projects/work-experience-page/unison/unison";
import { Error404 } from "@/components/page-not-found/error404";
import { RevoltWeb } from "@/projects/revolt/revolt-web";
import { ScrollToTop } from "@/components/scroll-to-top";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navigator />
      <main className="m-auto px-4 py-4 md:w-150 md:px-0 lg:w-250">
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
          <Route path="/revolt-web" element={<RevoltWeb />} />
          {/* Work Experience */}
          <Route path="/csipro" element={<Csipro />} />
          <Route path="/legrafica" element={<Legrafica />} />
          <Route path="/unison" element={<Unison />} />
          {/* Page not found */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Foooter />
    </>
  );
}
