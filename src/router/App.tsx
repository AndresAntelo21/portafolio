import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { Home } from "@/components/home/home";
import { Navigator } from "@/components/navigator/navigator";
import { Foooter } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
// import Aurora from "@/components/ui/Aurora/Aurora";

// Lazy load all project pages
const WorkExperience = lazy(() =>
  import("@/components/home/sections/work-experience/work-experience").then(
    (m) => ({ default: m.WorkExperience }),
  ),
);
const Projects = lazy(() =>
  import("@/components/home/sections/projects/projects").then((m) => ({
    default: m.Projects,
  })),
);
const CsiproWeb = lazy(() =>
  import("@/projects/csipro-web/csipro-web").then((m) => ({
    default: m.CsiproWeb,
  })),
);
const MovilidadWeb = lazy(() =>
  import("@/projects/movilidad/movilidad-web").then((m) => ({
    default: m.MovilidadWeb,
  })),
);
const UmanaWeb = lazy(() =>
  import("@/projects/umana/umana-web").then((m) => ({ default: m.UmanaWeb })),
);
const GnGWeb = lazy(() =>
  import("@/projects/gng/gng-web").then((m) => ({ default: m.GnGWeb })),
);
const CbCWeb = lazy(() =>
  import("@/projects/cbc/cbc-web").then((m) => ({ default: m.CbCWeb })),
);
const RevoltWeb = lazy(() =>
  import("@/projects/revolt/revolt-web").then((m) => ({
    default: m.RevoltWeb,
  })),
);
const VadoWeb = lazy(() =>
  import("@/projects/vado-landing/vado-web").then((m) => ({
    default: m.VadoWeb,
  })),
);
const SenderoWeb = lazy(() =>
  import("@/projects/sendero/sendero-web").then((m) => ({
    default: m.SenderoWeb,
  })),
);
const EasysalesWeb = lazy(() =>
  import("@/projects/easysales/easysales-web").then((m) => ({
    default: m.EasysalesWeb,
  })),
);
const MaggioreWeb = lazy(() =>
  import("@/projects/maggiore/maggiore-web").then((m) => ({
    default: m.MaggioreWeb,
  })),
);
const WashautWeb = lazy(() =>
  import("@/projects/washaut/washaut-web").then((m) => ({
    default: m.WashautWeb,
  })),
);
const Csipro = lazy(() =>
  import("@/projects/work-experience-page/csipro/csipro").then((m) => ({
    default: m.Csipro,
  })),
);
const Legrafica = lazy(() =>
  import("@/projects/work-experience-page/legrafica/legrafica").then((m) => ({
    default: m.Legrafica,
  })),
);
const Unison = lazy(() =>
  import("@/projects/work-experience-page/unison/unison").then((m) => ({
    default: m.Unison,
  })),
);
const Telsoluciones = lazy(() =>
  import("@/projects/work-experience-page/telsoluciones/telsoluciones").then(
    (m) => ({ default: m.Telsoluciones }),
  ),
);
const Vincco = lazy(() =>
  import("@/projects/work-experience-page/vincco/vincco").then((m) => ({
    default: m.Vincco,
  })),
);
const Vado = lazy(() =>
  import("@/projects/work-experience-page/vado/vado").then((m) => ({
    default: m.Vado,
  })),
);
const Certificados = lazy(() =>
  import("@/components/home/sections/certificados/certificados").then((m) => ({
    default: m.Certificados,
  })),
);
// const Hobbies = lazy(() =>
//   import("@/components/home/sections/hobbies/hobbies").then((m) => ({
//     default: m.Hobbies,
//   })),
// );
// const HobbyDetailPage = lazy(() =>
//   import("@/components/hobby-detail/hobby-detail-page").then((m) => ({
//     default: m.HobbyDetailPage,
//   })),
// );
const Error404 = lazy(() =>
  import("@/components/page-not-found/error404").then((m) => ({
    default: m.Error404,
  })),
);

const BASE_URL =
  typeof import.meta.env.VITE_SITE_URL === "string"
    ? import.meta.env.VITE_SITE_URL.replace(/\/$/, "")
    : typeof window !== "undefined"
      ? window.location.origin
      : "";

interface RouteMeta {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Andrés Antelo | Full Stack Developer Portfolio",
    description:
      "Portfolio of Andrés Antelo — Full Stack Developer. Work experience, projects (React, Vue, TypeScript), and certificates.",
  },
  "/work-experience": {
    title: "Work Experience | Andrés Antelo Portfolio",
    description:
      "Professional experience: CSI PRO, Legrafica, University of Sonora, TelSoluciones, Vincco, and more.",
  },
  "/projects": {
    title: "Projects | Andrés Antelo Portfolio",
    description:
      "Web projects: CSI PRO REBOOT, Legrafica clients, Vado Devs (Maggiore, Washaut, Easysales, etc.), Urban Mobility. React, Vue, Python.",
  },
  "/certificados": {
    title: "Certificates | Andrés Antelo Portfolio",
    description:
      "Certifications in UX/UI design, data analytics, and cybersecurity from Udemy and Google.",
  },
  "/hobbies": {
    title: "Hobbies | Andrés Antelo Portfolio",
    description:
      "Personal projects and side experiments outside client work, from creative coding to prototyping.",
  },
  "/csipro-web": {
    title: "CSI PRO REBOOT | Andrés Antelo Portfolio",
    description:
      "Platform showcasing the CSI PRO lab at University of Sonora — work, projects, and impact.",
  },
  "/movilidad-web": {
    title: "Urban Mobility | Andrés Antelo Portfolio",
    description:
      "Traffic analysis and urban mobility visualization project. Python, Jupyter, data visualization.",
  },
  "/umana-web": {
    title: "Umana | Andrés Antelo Portfolio",
    description:
      "Online health and wellness platform with workouts, recipes, and personalized meal plans. Vue.js.",
  },
  "/gng-web": {
    title: "Glam N Glow | Andrés Antelo Portfolio",
    description:
      "Beauty studio website by Ale Murillo. Services, booking, Vue.js frontend.",
  },
  "/cbc-web": {
    title: "Colegio Bicultural Cananea | Andrés Antelo Portfolio",
    description:
      "Bilingual school website. React, TypeScript, Tailwind. Programs, values, admissions.",
  },
  "/revolt-web": {
    title: "Revolt | Andrés Antelo Portfolio",
    description:
      "Solar energy company landing page. Vue.js. Sustainable solutions for homes and businesses.",
  },
  "/vado-web": {
    title: "Vado Devs Landing | Andrés Antelo Portfolio",
    description:
      "Conversion-focused landing page for Vado Devs custom software development.",
  },
  "/sendero-web": {
    title: "Sendero | Andrés Antelo Portfolio",
    description:
      "Sendero web platform focused on brand storytelling, navigation, and accessible content.",
  },
  "/easysales-web": {
    title: "Easysales | Andrés Antelo Portfolio",
    description:
      "Easysales digital product concept for communicating benefits and supporting the sales funnel.",
  },
  "/maggiore-web": {
    title: "Maggiore | Andrés Antelo Portfolio",
    description:
      "Maggiore web platform with a clear interface, performance, and client-aligned identity.",
  },
  "/washaut-web": {
    title: "Washaut | Andrés Antelo Portfolio",
    description:
      "Washaut website and digital presence focused on service communication and trust.",
  },
  "/csipro": {
    title: "CSI PRO | Andrés Antelo Portfolio",
    description:
      "Work experience at CSI PRO lab, University of Sonora. Software projects and CSI PRO REBOOT.",
  },
  "/legrafica": {
    title: "Legrafica | Andrés Antelo Portfolio",
    description:
      "Work at Legrafica — Umana, Glam N Glow, CBC, Revolt. Marketing and digital development agency.",
  },
  "/unison": {
    title: "University of Sonora | Andrés Antelo Portfolio",
    description:
      "Experience at University of Sonora. Urban Mobility project — traffic and mobility analysis.",
  },
  "/telsoluciones": {
    title: "TelSoluciones | Andrés Antelo Portfolio",
    description:
      "Technical support and contact center experience. Telcel support, IT maintenance.",
  },
  "/vincco": {
    title: "Vincco | Andrés Antelo Portfolio",
    description:
      "Contact center experience. Multi-client technical support, site administration, 200+ devices.",
  },
  "/vado": {
    title: "Vado | Andrés Antelo Portfolio",
    description:
      "Vado — custom software development. Tailored digital solutions for each client.",
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

  let descEl = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (!descEl) {
    descEl = document.createElement("meta");
    descEl.setAttribute("name", "description");
    document.head.appendChild(descEl);
  }
  descEl.setAttribute("content", description);

  if (url) {
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }

  const setOg = (property: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`,
    );
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
        {/* <Aurora
          colorStops={["#050a48", "#32012b", "#2d0bb1"]}
          blend={0.5}
          amplitude={1}
          speed={1}
        /> */}
      </div>
      <Navigator />
      <main className="m-auto min-h-screen px-4 py-4 md:w-150 md:px-0 lg:w-250">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificados" element={<Certificados />} />
            {/* <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/hobbies/:hobbyId" element={<HobbyDetailPage />} /> */}
            {/* Projects */}
            <Route path="/csipro-web" element={<CsiproWeb />} />
            <Route path="/movilidad-web" element={<MovilidadWeb />} />
            <Route path="/umana-web" element={<UmanaWeb />} />
            <Route path="/gng-web" element={<GnGWeb />} />
            <Route path="/cbc-web" element={<CbCWeb />} />
            <Route path="/revolt-web" element={<RevoltWeb />} />
            <Route path="/vado-web" element={<VadoWeb />} />
            <Route path="/sendero-web" element={<SenderoWeb />} />
            <Route path="/easysales-web" element={<EasysalesWeb />} />
            <Route path="/maggiore-web" element={<MaggioreWeb />} />
            <Route path="/washaut-web" element={<WashautWeb />} />
            {/* Work Experience */}
            <Route path="/csipro" element={<Csipro />} />
            <Route path="/legrafica" element={<Legrafica />} />
            <Route path="/unison" element={<Unison />} />
            <Route path="/telsoluciones" element={<Telsoluciones />} />
            <Route path="/vincco" element={<Vincco />} />
            <Route path="/vado" element={<Vado />} />

            {/* Page not found */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </main>
      <Foooter />
    </>
  );
}
