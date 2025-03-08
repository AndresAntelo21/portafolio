import { Link } from "react-router-dom";
import { ContactButton } from "../button/contact-button";

export const Foooter = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-black p-10 pt-10 text-center md:flex-row md:items-start md:justify-between md:p-5 md:pt-10 xl:px-55 2xl:px-200">
      <div className="flex flex-col gap-5 md:text-left">
        <div className="font-poppins w-full text-2xl">
          <h1 className="mb-2 inline-block border-b-2 border-violet-900">
            Andres Portafolio
          </h1>
        </div>
        <div className="font-poppins flex flex-col gap-5 text-lg">
          <span className="text-xl text-zinc-400">Navigation</span>
          <Link
            to="/"
            onClick={handleLinkClick}
            className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-violet-500 focus:text-violet-500 focus:outline-none"
          >
            Home
          </Link>
          <Link
            to="/work-experience"
            onClick={handleLinkClick}
            className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-violet-500 focus:text-violet-500 focus:outline-none"
          >
            Work Experience
          </Link>
          <Link
            to="/projects"
            onClick={handleLinkClick}
            className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-violet-500 focus:text-violet-500 focus:outline-none"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/185dgOBLNU1kapKmNW3OEcANvZMnRmch5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-normal transition-all duration-300 hover:tracking-widest hover:text-violet-500 focus:text-violet-500 focus:outline-none"
          >
            Resume
          </a>
        </div>
      </div>
      <ContactButton />
    </footer>
  );
};
