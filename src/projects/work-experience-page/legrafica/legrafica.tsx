import { Card } from "@/components/home/sections/work-experience/experience";

export const Legrafica = () => {
  return (
    <div className="flex flex-col justify-center md:items-start gap-10">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/legrafica/bg-legrafica.png" alt="Legrafica image" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-2 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/legrafica.svg"
            alt="Legrafica logo"
            className="w-40"
          />
        </div>
      </div>
      <div className="">
        <p>
          Legrafica is a <span className="text-blue-primary">marketing</span> and{" "}
          <span className="text-blue-primary">digital development</span> agency specialized in
          creating integrated experiences for brands and their consumers. They combine{" "}
          <span className="text-blue-primary">creativity</span> and{" "}
          <span className="text-blue-primary">technology</span> to drive{" "}
          <span className="text-blue-primary">growth</span> and create authentic
          connections with the audience.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MY <span className="text-blue-primary">PROJECTS</span> AT
        </h1>
        <img src="/projects/legrafica.svg" alt="Legrafica logo" className="w-35" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          backgroundImage="/projects/umana/umana-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">November 2024 - <span className="">February 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/umana/umana-logo-text.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Umana is an online platform that offers routines, recipes, and personalized plans to improve health."
          linkUrl="/umana-web"
        />
        <Card
          backgroundImage="/projects/gng/gng-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/gng/gng-logo.svg"
                alt="Legrafica logo"
                className="w-50"
              />
            </div>
          }
          description="Glam N Glow by Ale Murillo is a beauty studio offering makeup, hairstyling, and treatments to enhance natural beauty with style and quality."
          linkUrl="/gng-web"
        />
        <Card
          backgroundImage="/projects/cbc/cbc-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/cbc/cbc-logo.svg"
                alt="Legrafica logo"
                className="w-15"
              />
              <div className="font-alegreya font-normal">
                <span>Colegio Bicultural Cananea</span>
              </div>
            </div>
          }
          description="Colegio Bicultural Cananea offers bilingual education and holistic development. Its website provides information on programs, values, and the admissions process."
          linkUrl="/cbc-web"
        />
        <Card
          backgroundImage="/projects/revolt/revolt-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Legrafica logo"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">February 2025 - <span className="">March 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/revolt/revolt-logo.svg"
                alt="Legrafica logo"
                className="w-40"
              />
            </div>
          }
          description="Revolt offers solar energy solutions to reduce costs and protect the environment. Their page presents the company, its values, and makes it easy for customers to get in touch."
          linkUrl="/revolt-web"
        />
      </div>
    </div>
  );
};
