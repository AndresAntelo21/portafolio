import { CircleGrid } from "./frameworks-icons";

export const Tools = () => {
  const images = [
    "/public/tools/react.svg",
    "/public/tools/vue.svg",
    "/public/tools/html.svg",
    "/public/tools/python.svg",
    "/public/tools/nodejs-white.svg",
    "/public/tools/typescript.svg",
    "/public/tools/js.svg",
    "/public/tools/git.svg",
    "/public/tools/css.svg",
    "/public/tools/tailwind.svg",
    "/public/tools/vite.svg",
    "/public/tools/figma.svg",
  ];
  return (
    <div className="font-poppins flex flex-col gap-5 text-center text-2xl lg:px-10 lg:text-center">
      <h1>
        Frameworks <span className="text-violet-600">&</span> Tools
      </h1>

      <div className="flex flex-col gap-1">
        <CircleGrid images={images} />
      </div>
    </div>
  );
};
