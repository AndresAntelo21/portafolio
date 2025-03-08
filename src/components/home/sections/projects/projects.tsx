import { ProjectsCard } from "./projects-card";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
export const Projects = () => {
  return (
    <div className="font-poppins flex flex-col gap-15 py-10">
      <ProjectsCard
        imageSrc="/public/projects/gokussj1.png"
        title="Movilidad"
        date="21/12/2002"
        description="In a world that is constantly evolving, understanding the dynamics of urban mobility becomes essential for building more efficient, sustainable, and citizen-centered cities."
        icons={[FaReact, RiTailwindCssFill, SiVite]}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj2.png"
        title="Prueba numero 2"
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[FaReact, RiTailwindCssFill]}
        reverse={true}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj3.png"
        title="Prueba numero 3"
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[RiTailwindCssFill, SiVite]}
      />
      <ProjectsCard
        imageSrc="/public/projects/gokussj4.png"
        title="Prueba numero 4"
        date="21/12/2002"
        description="Aqui mero va la descripcion"
        icons={[FaReact, SiVite]}
        reverse={true}
      />
    </div>
  );
};
