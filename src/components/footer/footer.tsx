import { Link } from "react-router-dom";
import { ContactButton } from "../button/contact-button";

export const Foooter = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="flex w-full flex-col items-center bg-black pb-8">
      <div className="mx-auto flex flex-col gap-10 pt-10 text-center md:w-150 md:flex-row md:items-start md:justify-between md:pt-10 lg:w-250">
        <div className="flex flex-col gap-5 md:text-left">
          <div className="font-montserrat w-full text-2xl">
            <h1 className="">ANDRES PORTAFOLIO</h1>
          </div>
          <div className="font-montserrat flex flex-col gap-5 text-lg">
            <span className="text-xl text-zinc-400">Navegación</span>
            <Link
              to="/"
              onClick={handleLinkClick}
              className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              Inicio
            </Link>
            <Link
              to="/work-experience"
              onClick={handleLinkClick}
              className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              Experiencia de Trabajo
            </Link>
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              Proyectos
            </Link>
            <a
              href="https://drive.google.com/file/d/185dgOBLNU1kapKmNW3OEcANvZMnRmch5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              CV
            </a>
          </div>
        </div>
        <ContactButton />
      </div>
    </footer>
  );
};
