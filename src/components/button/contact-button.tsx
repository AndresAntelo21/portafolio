// import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  return (
    <div
      className={`font-montserrat flex flex-col gap-2 text-center text-3xl text-white/70 ${className}`}
    >
      <h1 className="text-center text-xl font-medium">Contactame</h1>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/AndresAntelo21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/andresantel0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:andresantelo12@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};
