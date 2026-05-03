export const WORK_EXPERIENCE_OVERVIEW_PATH = "/work-experience";

export type WorkExperienceNavItem = {
  to: string;
  label: string;
};

export const WORK_EXPERIENCE_NAV_ITEMS: WorkExperienceNavItem[] = [
  { to: "/csipro", label: "CSI PRO" },
  { to: "/legrafica", label: "Legrafica" },
  { to: "/unison", label: "Universidad de Sonora" },
  { to: "/telsoluciones", label: "TelSoluciones" },
  { to: "/vincco", label: "Vincco" },
];
