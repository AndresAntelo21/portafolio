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
import { Certificados } from "@/components/home/sections/certificados/certificados";
import { Telsoluciones } from "@/projects/work-experience-page/telsoluciones/telsoluciones";
import { Vincco } from "@/projects/work-experience-page/vincco/vincco";
import Aurora from "@/components/ui/Aurora/Aurora";

const BASE_URL = typeof import.meta.env.VITE_SITE_URL === "string"
  ? import.meta.env.VITE_SITE_URL.replace(/\/$/, "")
  : (typeof window !== "undefined" ? window.location.origin : "");

interface RouteMeta {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Andrés Antelo | Full Stack Developer Portfolio",
    description: "Portfolio of Andrés Antelo — Full Stack Developer. Work experience, projects (React, Vue, TypeScript), and certificates.",
  },
  "/work-experience": {
    title: "Work Experience | Andrés Antelo Portfolio",
    description: "Professional experience: CSI PRO, Legrafica, University of Sonora, TelSoluciones, Vincco, and more.",
  },
  "/projects": {
    title: "Projects | Andrés Antelo Portfolio",
    description: "Web projects: CSI PRO REBOOT, Umana, Glam N Glow, CBC, Revolt, Urban Mobility. React, Vue, TypeScript.",
  },
  "/certificados": {
    title: "Certificates | Andrés Antelo Portfolio",
    description: "Certifications in UX/UI design, data analytics, and cybersecurity from Udemy and Google.",
  },
  "/csipro-web": {
    title: "CSI PRO REBOOT | Andrés Antelo Portfolio",
    description: "Platform showcasing the CSI PRO lab at University of Sonora — work, projects, and impact.",
  },
  "/movilidad-web": {
    title: "Urban Mobility | Andrés Antelo Portfolio",
    description: "Traffic analysis and urban mobility visualization project. Python, Jupyter, data visualization.",
  },
  "/umana-web": {
    title: "Umana | Andrés Antelo Portfolio",
    description: "Online health and wellness platform with workouts, recipes, and personalized meal plans. Vue.js.",
  },
  "/gng-web": {
    title: "Glam N Glow | Andrés Antelo Portfolio",
    description: "Beauty studio website by Ale Murillo. Services, booking, Vue.js frontend.",
  },
  "/cbc-web": {
    title: "Colegio Bicultural Cananea | Andrés Antelo Portfolio",
    description: "Bilingual school website. React, TypeScript, Tailwind. Programs, values, admissions.",
  },
  "/revolt-web": {
    title: "Revolt | Andrés Antelo Portfolio",
    description: "Solar energy company landing page. Vue.js. Sustainable solutions for homes and businesses.",
  },
  "/csipro": {
    title: "CSI PRO | Andrés Antelo Portfolio",
    description: "Work experience at CSI PRO lab, University of Sonora. Software projects and CSI PRO REBOOT.",
  },
  "/legrafica": {
    title: "Legrafica | Andrés Antelo Portfolio",
    description: "Work at Legrafica — Umana, Glam N Glow, CBC, Revolt. Marketing and digital development agency.",
  },
  "/unison": {
    title: "University of Sonora | Andrés Antelo Portfolio",
    description: "Experience at University of Sonora. Urban Mobility project — traffic and mobility analysis.",
  },
  "/telsoluciones": {
    title: "TelSoluciones | Andrés Antelo Portfolio",
    description: "Technical support and contact center experience. Telcel support, IT maintenance.",
  },
  "/vincco": {
    title: "Vincco | Andrés Antelo Portfolio",
    description: "Contact center experience. Multi-client technical support, site administration, 200+ devices.",
  },
  "*": {
    title: "Page not found | Andrés Antelo Portfolio",
    description: "The requested page could not be found.",
  },
};

function setMetaTags(pathname: string) {
  const meta = ROUTE_META[pathname] ?? ROUTE_META["*"];
  const title = meta.title;
  const description = meta.description;
  const url = BASE_URL ? `${BASE_URL}${pathname === "/" ? "" : pathname}` : "";

  document.title = title;

  let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!descEl) {
    descEl = document.createElement("meta");
    descEl.setAttribute("name", "description");
    document.head.appendChild(descEl);
  }
  descEl.setAttribute("content", description);

  if (url) {
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }

  const setOg = (property: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", property);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  if (url) {
    setOg("og:url", url);
    setOg("og:title", title);
    setOg("og:description", description);
  }

  const setTw = (name: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };
  setTw("twitter:title", title);
  setTw("twitter:description", description);
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    setMetaTags(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <div className="fixed top-0 left-0 w-full">
        <Aurora
          colorStops={["#050a48", "#32012b", "#2d0bb1"]}
          blend={0.5}
          amplitude={1}
          speed={1}
        />
      </div>
      <Navigator />
      <main className="m-auto px-4 py-4 md:w-150 md:px-0 lg:w-250 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificados" element={<Certificados />} />
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
          <Route path="/telsoluciones" element={<Telsoluciones />} />
          <Route path="/vincco" element={<Vincco />} />

          {/* Page not found */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Foooter />
    </>
  );
}
