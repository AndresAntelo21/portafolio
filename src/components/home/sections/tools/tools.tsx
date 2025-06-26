import { CircleGrid } from "./frameworks-icons";

export const Tools = () => {
  const images = [
    "/tools/react.svg",
    "/tools/vue.svg",
    "/tools/html.svg",
    "/tools/python.svg",
    "/tools/nodejs-white.svg",
    "/tools/typescript.svg",
    "/tools/js.svg",
    "/tools/git.svg",
    "/tools/css.svg",
    "/tools/tailwind.svg",
    "/tools/vite.svg",
    "/tools/figma.svg",
  ];
  return (
    <div className="font-poppins relative z-10 flex flex-col gap-5 text-center text-2xl lg:text-center">
      <h1 className="relative z-10 text-left text-3xl font-bold">
        FRAMEWORKS & <span className="text-blue-primary">HERRAMIENTAS</span>
      </h1>

      <div className="flex flex-col gap-1">
        <CircleGrid images={images} />
      </div>
    </div>
  );
};
