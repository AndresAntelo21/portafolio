import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  return (
    <div className={`font-montserrat flex flex-col ${className}`}>
      <h1 className="font-normal text-xl">Contactame</h1>
      <div className="flex gap-8 mt-2 ">
        <a href="mailto:andresantelo12@gmail.com">
          <FaEnvelope className="text-3xl text-white/70 hover:text-blue-primary/70 transition-colors ease-in-out duration-300" />
        </a>
        <a href="https://github.com/AndresAntelo21"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub className="text-3xl text-white/70 hover:text-blue-primary/70 transition-colors ease-in-out duration-300" />
        </a>
        <a href="https://linkedin.com/in/andresantel0"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-white/70 hover:text-blue-primary/70 transition-colors ease-in-out duration-300" />
        </a>
      </div>
    </div>
  );
};
