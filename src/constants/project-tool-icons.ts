const FAVICON_PATTERN = /favicon/i;

export const PROJECT_TOOL_ICON_BY_TITLE: Record<string, string> = {
  React: "/tools/react.svg",
  TypeScript: "/tools/typescript.svg",
  "Tailwind CSS": "/tools/tailwind.svg",
  "Tailwind": "/tools/tailwind.svg",
  Vite: "/tools/vite.svg",
  Vue: "/tools/vue.svg",
  "Vue.js": "/tools/vue.svg",
  JavaScript: "/tools/js.svg",
  Python: "/tools/python.svg",
  "Jupyter Notebook": "/tools/jupyter.svg",
  HTML: "/tools/html.svg",
  CSS: "/tools/css.svg",
  Docker: "/tools/docker.svg",
  Figma: "/tools/figma.svg",
  Git: "/tools/git.svg",
  Node: "/tools/node.svg",
  "Node.js": "/tools/node-js.svg",
  "Nest.js": "/tools/Nest.js.svg",
  "React Router": "/tools/react-router.svg",
  "Payload CMS": "/tools/payload.svg",
  "Next.js": "/tools/nextjs.svg",
  Flutter: "/tools/flutter.svg",
  Dart: "/tools/dart.svg",
  MySQL: "/tools/mysql.svg",
  SQLite: "/tools/sqlite.svg",
  PostgreSQL: "/tools/postgresql.svg",
  Swift: "/tools/swift.svg",
  Vercel: "/tools/vercel.svg",
  OpenAI: "/tools/openai.svg",
  "OpenAI API": "/tools/openai.svg",
  "Android Studio": "/tools/android-studio.svg",
  "Digital Ocean": "/tools/digital-ocean.svg",
};

export function getProjectToolIconSrc(title: string) {
  const iconSrc = PROJECT_TOOL_ICON_BY_TITLE[title];

  if (!iconSrc || FAVICON_PATTERN.test(iconSrc)) {
    return undefined;
  }

  return iconSrc;
}
