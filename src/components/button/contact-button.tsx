import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ShinyText from "@/components/ui/ShinyText/ShinyText";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  return (
    <div
      className={`font-montserrat flex flex-col gap-2 text-center text-3xl text-white/70 ${className}`}
    >
      <ShinyText
        text="Contact me"
        disabled={false}
        speed={3}
        className="custom-class"
      />
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/AndresAntelo21"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125 hover:text-white"
          aria-label="GitHub profile of Andrés Antelo"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/andresantel0"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125 hover:text-white"
          aria-label="LinkedIn profile of Andrés Antelo"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a
          href="mailto:andresantelo12@gmail.com"
          className="transition-transform duration-300 hover:scale-125 hover:text-white"
          aria-label="Send email to Andrés Antelo"
        >
          <FaEnvelope aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};