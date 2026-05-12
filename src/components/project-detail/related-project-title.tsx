import UmanaLogo from "@/assets/legrafica/umana/UmanaLogo";
import GngLogo from "@/assets/legrafica/gng/GngLogo";
import CbcLogo from "@/assets/legrafica/cbc/CbcLogo";
import RevoltLogo from "@/assets/legrafica/revolt/RevoltLogo";
import SenderoLogo from "@/assets/vadodevs/sendero/SenderoLogo";
import VadoDevsLogo from "@/assets/vadodevs/vadodevs/VadoLogo";
import EasySalesLogo from "@/assets/vadodevs/easysales/EasySalesLogo";
import MaggloreLogo from "@/assets/vadodevs/maggiore/MaggioreLogo";
import WashAutLogo from "@/assets/vadodevs/washaut/WashAutLogo";

type RelatedProjectTitleProps = {
  projectId: string;
};

export function RelatedProjectTitle({ projectId }: RelatedProjectTitleProps) {
  switch (projectId) {
    case "csipro":
      return (
        <img
          src="/projects/csipro/csipro-reboot/csiproreboot-logo.svg"
          alt="CSI PRO REBOOT"
          className="h-8 w-auto max-w-full"
        />
      );
    case "umana":
      return <UmanaLogo className="h-7 w-auto" title="Umana" />;
    case "gng":
      return <GngLogo white className="h-7 w-auto" title="Glam N Glow" />;
    case "cbc":
      return (
        <CbcLogo
          white
          className="h-7 w-auto"
          title="Colegio Bicultural Cananea"
        />
      );
    case "revolt":
      return <RevoltLogo className="h-7 w-auto" title="Revolt" />;
    case "vado-landing":
      return (
        <VadoDevsLogo variant="white" className="h-7 w-auto" title="Vado landing" />
      );
    case "sendero":
      return <SenderoLogo title="Sendero" className="h-7 w-auto" />;
    case "easysales":
      return <EasySalesLogo className="h-9 w-auto" />;
    case "maggiore":
      return <MaggloreLogo variant="white" className="h-7 w-auto" />;
    case "washaut":
      return (
        <WashAutLogo variant="white" className="h-7 w-auto" title="Washaut" />
      );
    case "movilidad":
      return (
        <span className="font-poppins flex items-center gap-2 text-xl font-bold tracking-tight">
          <img
            src="/projects/movilidad/movilidad-logo.svg"
            alt=""
            className="h-8 w-8"
          />
          Movilidad urbana
        </span>
      );
    default:
      return null;
  }
}
