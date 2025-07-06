import { Card } from "@/components/home/sections/work-experience/experience";

export const Legrafica = () => {
  return (
    <div className="flex flex-col justify-center md:items-start gap-10">
      <div className="w-full h-50 overflow-hidden rounded-lg relative lg:h-75">
        <img src="/work-experience/legrafica/bg-legrafica.png" alt="imagen del CSI" className="object-cover w-full h-full object-center" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-2 bottom-1 flex items-center gap-2  text-white">
          <img
            src="/projects/legrafica.svg"
            alt="logo del legrafica"
            className="w-40"
          />
        </div>
      </div>
      <div className="">
        <p>
          Legrafica es una agencia de <span className="text-blue-primary">marketing</span> y{" "}
          <span className="text-blue-primary">desarrollo digital</span> especializada en
          crear experiencias integrales para marcas y sus consumidores. Combinan{" "}
          <span className="text-blue-primary">creatividad</span> y{" "}
          <span className="text-blue-primary">tecnología</span> para impulsar el{" "}
          <span className="text-blue-primary">crecimiento</span> y generar conexiones
          auténticas con la audiencia.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 ">
        <h1 className="relative z-10 text-left text-3xl font-bold">
          MIS <span className="text-blue-primary">PROYECTOS</span> DE
        </h1>
        <img src="/projects/legrafica.svg" alt="logo de legrafica" className="w-35" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          backgroundImage="/projects/umana/umana-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del laboratorio CSI PRO"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Noviembre 2024 - <span className="">Febrero 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/umana/umana-logo-text.svg"
                alt="Logo de legrafica"
                className="w-50"
              />
            </div>
          }
          description="Umana es una plataforma en línea que ofrece rutinas, recetas y planes personalizados para mejorar la salud."
          linkUrl="/umana-web"
        />
        <Card
          backgroundImage="/projects/gng/gng-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/gng/gng-logo.svg"
                alt="Logo de legrafica"
                className="w-50"
              />
            </div>
          }
          description="Glam N Glow by Ale Murillo es un estudio de belleza que ofrece maquillaje, peinados y tratamientos para resaltar la belleza natural con estilo y calidad."
          linkUrl="/gng-web"
        />
        <Card
          backgroundImage="/projects/cbc/cbc-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/cbc/cbc-logo.svg"
                alt="Logo de legrafica"
                className="w-15"
              />
              <div className="font-alegreya font-normal">
                <span>Colegio Bicultural Cananea</span>
              </div>
            </div>
          }
          description="El Colegio Bicultural Cananea ofrece educación bilingüe y formación integral. Su sitio web informa sobre programas, valores y proceso de admisión."
          linkUrl="/cbc-web"
        />
        <Card
          backgroundImage="/projects/revolt/revolt-slide1.webp"
          avatarSrc="/work-experience/legrafica/legrafica-logo.png"
          authorName={
            <div className="flex items-center gap-2">
              <img
                src="/projects/legrafica.svg"
                alt="Logo del legrafica"
                className="w-25"
              />
            </div>
          }
          readTime={
            <p className=" text-gray-400">Febrero 2025 - <span className="">Marzo 2025</span></p>
          }
          title={
            <div className="flex items-center gap-2">
              <img
                src="/projects/revolt/revolt-logo.svg"
                alt="Logo de legrafica"
                className="w-40"
              />
            </div>
          }
          description="Revolt ofrece soluciones de energía solar para reducir costos y cuidar el medio ambiente. Su página presenta la empresa, sus valores y facilita el contacto con clientes."
          linkUrl="/revolt-web"
        />
      </div>
    </div>
  );
};
