import type { HobbyTechnologyStackId } from "@/constants/hobby-technology-stacks";

const MINECRAFT_COVER = "/minecraft-skin/background-skin.png";

export type HobbyItem = {
  id: HobbyTechnologyStackId;
  title: string;
  category: string;
  cardDescription: string;
  detailDescription: string;
  features: string[];
  coverSrc: string;
  coverAlt: string;
  technologyStackId: HobbyTechnologyStackId;
  period: string;
  links?: { href: string; label: string }[];
};

export const HOBBY_ITEMS: HobbyItem[] = [
  {
    id: "minecraft-hero",
    title: "Minecraft Hero Skin",
    category: "Creative coding",
    cardDescription:
      "Interactive portfolio hero that turns a Minecraft-style skin into a playful first impression.",
    detailDescription:
      "This personal experiment explores how a portfolio hero can feel more memorable by borrowing the visual language of Minecraft skins. The goal was to blend playful identity with a polished landing experience.",
    features: [
      "Custom hero presentation with a Minecraft-inspired skin layout.",
      "Responsive composition that keeps the character readable on mobile and desktop.",
      "Lightweight interaction focused on personality instead of heavy 3D tooling.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "minecraft-hero",
    period: "Personal project",
  },
  {
    id: "design-lab",
    title: "Design Lab",
    category: "Visual exploration",
    cardDescription:
      "Side explorations in interface design, layout systems, and visual identity outside client work.",
    detailDescription:
      "Design Lab is a space for testing typography, spacing, color, and interface patterns before they move into production work. It keeps visual exploration intentional and separate from delivery deadlines.",
    features: [
      "Rapid UI explorations in Figma with reusable layout patterns.",
      "Typography and color studies for future portfolio and product work.",
      "Component sketches that test hierarchy, contrast, and rhythm.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "design-lab",
    period: "Ongoing",
  },
  {
    id: "automation-scripts",
    title: "Automation Scripts",
    category: "Productivity",
    cardDescription:
      "Small personal tools and scripts that automate repetitive tasks and speed up everyday workflows.",
    detailDescription:
      "These scripts are built to remove friction from repetitive work: file cleanup, formatting helpers, and small utilities that save time during development and content updates.",
    features: [
      "Task-specific scripts for repetitive local workflows.",
      "Simple command-line helpers focused on speed and clarity.",
      "Experiments that later inform production tooling decisions.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "automation-scripts",
    period: "Ongoing",
  },
  {
    id: "frontend-experiments",
    title: "Frontend Experiments",
    category: "Interaction design",
    cardDescription:
      "Prototype-driven personal projects focused on motion, interaction, and component behavior.",
    detailDescription:
      "Frontend Experiments is where motion, hover states, and component APIs are tested without client constraints. The emphasis is on interaction quality and maintainable React patterns.",
    features: [
      "Component prototypes for animation and state transitions.",
      "Layout experiments that stress-test responsive behavior.",
      "Reusable patterns that can migrate into portfolio or product work.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "frontend-experiments",
    period: "Ongoing",
  },
  {
    id: "learning-sandbox",
    title: "Learning Sandbox",
    category: "Research",
    cardDescription:
      "A space for testing new frameworks, libraries, and ideas before applying them to production projects.",
    detailDescription:
      "The sandbox exists to evaluate new tools with low risk: small spikes, API comparisons, and quick proofs of concept that answer whether a library is worth adopting.",
    features: [
      "Short spikes for evaluating libraries and framework updates.",
      "Notes and comparisons captured while testing new workflows.",
      "Low-scope builds that keep experimentation fast and reversible.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "learning-sandbox",
    period: "Ongoing",
  },
  {
    id: "open-source",
    title: "Open Source Contributions",
    category: "Community",
    cardDescription:
      "Personal contributions and experiments shared through repositories, fixes, and small utilities.",
    detailDescription:
      "Open source work here focuses on small, useful contributions: documentation fixes, issue reproductions, and utilities that are easy to share and maintain.",
    features: [
      "Repository contributions focused on clarity and maintainability.",
      "Small utilities and fixes shared for reuse.",
      "Experiments that stay public when they can help other developers.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "open-source",
    period: "Ongoing",
  },
  {
    id: "game-dev-sketches",
    title: "Game Dev Sketches",
    category: "Playful builds",
    cardDescription:
      "Lightweight game and interaction sketches built for fun, curiosity, and creative experimentation.",
    detailDescription:
      "These sketches explore playful mechanics, simple loops, and interaction design without the scope of a full game. They are useful for testing timing, feedback, and player affordances.",
    features: [
      "Small interaction loops built around movement and feedback.",
      "Prototype scenes that test pacing, controls, and visual clarity.",
      "Creative coding exercises that stay intentionally lightweight.",
    ],
    coverSrc: MINECRAFT_COVER,
    coverAlt: "Minecraft-style portfolio hero preview",
    technologyStackId: "game-dev-sketches",
    period: "Ongoing",
  },
];

export function getHobbyById(hobbyId: string | undefined) {
  return HOBBY_ITEMS.find((hobby) => hobby.id === hobbyId);
}
