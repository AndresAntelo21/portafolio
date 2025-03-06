import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  return (
    <div className={`font-poppins flex ${className}`}>
      <Button asChild variant="outline" className="rounded-l-full border-r-0">
        <a href="mailto:andresantelo12@gmail.com">Contact Me</a>
      </Button>
      <Button
        asChild
        variant="outline"
        className="rounded-l-none rounded-r-none border-r-0 border-l-0"
      >
        <a
          href="https://github.com/AndresAntelo21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        className="rounded-l-none rounded-r-none border-r-0 border-l-0"
      >
        <a
          href="https://linkedin.com/in/andresantel0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </Button>
      <Button asChild variant="outline" className="rounded-r-full border-l-0">
        <a href="mailto:andresantelo12@gmail.com">
          <FaEnvelope />
        </a>
      </Button>
    </div>
  );
};
