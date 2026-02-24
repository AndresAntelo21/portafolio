import { useNavigate } from "react-router-dom";
import StarBorder from "../ui/StarBorder/StarBorder";
export const Error404 = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="font-montserrat flex h-[100svh] w-full items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-4 text-center md:flex-row md:pb-17">
        <div>
          <img
            src="/page-not-found/page-not-found.webp"
            alt="Page not found"
            className="w-150 rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center gap-2 md:justify-center">
          <p className="text-2xl font-semibold">
            <span className="text-blue-primary">Oops</span>... something went wrong
          </p>
          <span>This page decided to take a break.</span>
          <StarBorder
            as="button"
            className="bg-blue-primary font-montserrat pointer mt-4 w-50 rounded-lg px-6 py-2 text-lg font-semibold text-white"
            color="blue"
            speed="4s"
            thickness={2}
            onClick={handleRedirect}
          >
            Back to Home
          </StarBorder>
        </div>
      </div>
    </div>
  );
};
