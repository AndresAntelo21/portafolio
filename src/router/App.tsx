import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import { Certificaciones } from "@/components/home/sections/certificaciones/certificaciones";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      "/": "Inicio | Andres Portafolio",
      "/work-experience": "Experiencia | Andres Portafolio",
      "/projects": "Proyectos | Andres Portafolio",
      "/csipro-web": "CSI PRO REBOOT | Andres Portafolio",
      "/movilidad-web": "Movilidad Urbana | Andres Portafolio",
      "/umana-web": "Umana | Andres Portafolio",
      "/gng-web": "Glam N Glow | Andres Portafolio",
      "/cbc-web": "Colegio Bicultural Cananea | Andres Portafolio",
      "/revolt-web": "Revolt | Andres Portafolio",
      "/csipro": "CSI PRO | Andres Portafolio",
      "/legrafica": "Legrafica | Andres Portafolio",
      "/unison": "Universidad de Sonora | Andres Portafolio",
      "/certificados": "Certificados | Andres Portafolio",
      "*": "Error 404 | Andres Portafolio",
    };

    const title = routeTitles[location.pathname] || "Andres Portafolio";
    document.title = title;
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Navigator />
      <main className="m-auto px-4 py-4 md:w-150 md:px-0 lg:w-250 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificados" element={<Certificaciones />} />
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
