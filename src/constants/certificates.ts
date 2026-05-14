export type CertificatePlatform = "UDEMY" | "GOOGLE";

export type CertificateItem = {
  id: string;
  title: string;
  platform: CertificatePlatform;
  url: string;
  logo: string;
  imageSrc?: string;
  imageAlt?: string;
  badges: string[];
};

export const CERTIFICATE_ITEMS: CertificateItem[] = [
  {
    id: "udemy-ux-design",
    title: "UX Design: User Experience UX/UI + Figma 2025",
    platform: "UDEMY",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-b9453ad2-328e-4c48-bfc4-38db7ac1dc9f.pdf",
    logo: "/certificados/certificados-company/Udemy.svg",
    imageSrc: "/cursos/figma/curso_ux.webp",
    imageAlt: "UX Design course certificate preview",
    badges: ["UX Design", "UI Design", "Figma"],
  },
  {
    id: "udemy-ui-design",
    title: "UI Design: Visual design and interface design with Figma 2025",
    platform: "UDEMY",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e9a6f2f9-7f11-4b1f-b2bd-e7b520ce1029.pdf",
    logo: "/certificados/certificados-company/Udemy.svg",
    imageSrc: "/cursos/figma/curso_ui.webp",
    imageAlt: "UI Design course certificate preview",
    badges: ["UI Design", "Visual Design", "Figma"],
  },
  {
    id: "udemy-ux-writing",
    title: "UX Writing: Content Design and User Experience",
    platform: "UDEMY",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a6ca9509-6d66-435f-a475-59300866a0ef.pdf",
    logo: "/certificados/certificados-company/Udemy.svg",
    imageSrc: "/cursos/figma/curso_uxwriting.webp",
    imageAlt: "UX Writing course certificate preview",
    badges: ["UX Writing", "Content Design", "User Experience"],
  },
  {
    id: "google-data-basics",
    title: "Basic concepts: Data, data everywhere.",
    platform: "GOOGLE",
    url: "https://www.coursera.org/account/accomplishments/verify/6LKLH47ESP8Z",
    logo: "/certificados/certificados-company/google.svg",
    badges: ["SQL", "Data Analytics", "Data Visualization"],
  },
  {
    id: "google-cybersecurity",
    title: "Foundations of Cybersecurity",
    platform: "GOOGLE",
    url: "https://www.coursera.org/account/accomplishments/verify/HLK69M355WRH",
    logo: "/certificados/certificados-company/google.svg",
    badges: ["Cybersecurity", "Cyber Attacks", "Threat Management"],
  },
];
