import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { CertificatePlatform } from "@/constants/certificates";

type CertificadoCardProps = {
  title: string;
  platform: CertificatePlatform;
  url: string;
  logo?: string;
  imageSrc?: string;
  imageAlt?: string;
  badges?: string[];
  animationIndex?: number;
};

const platformStyles: Record<
  CertificatePlatform,
  { label: string; categoryClassName: string; headerClassName: string }
> = {
  UDEMY: {
    label: "Udemy certificate",
    categoryClassName: "text-[#A435F0]",
    headerClassName:
      "from-[#A435F0]/20 via-[#7c1fd6]/10 to-zinc-950/80 border-[#A435F0]/20",
  },
  GOOGLE: {
    label: "Google certificate",
    categoryClassName: "text-[#4285F4]",
    headerClassName:
      "from-[#4285F4]/20 via-[#34A853]/10 to-zinc-950/80 border-[#4285F4]/20",
  },
};

export const CertificadoCard = ({
  title,
  platform,
  url,
  logo,
  imageSrc,
  imageAlt,
  badges = [],
  animationIndex = 0,
}: CertificadoCardProps) => {
  const platformStyle = platformStyles[platform];

  return (
    <motion.article
      className="h-full w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: animationIndex * 0.06,
        ease: "easeOut",
      }}
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-zinc-950/90 shadow-xl shadow-black/40 ring-1 ring-white/[0.05] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-2xl hover:shadow-black/55">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open certificate: ${title}`}
          className="group/preview relative isolate block aspect-[16/10] min-h-[200px] w-full shrink-0 overflow-hidden rounded-t-2xl outline-none ring-inset focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {imageSrc ? (
            <>
              <img
                src={imageSrc}
                alt={imageAlt ?? title}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-black/10"
                aria-hidden
              />
              {logo ? (
                <div className="pointer-events-none absolute right-3 bottom-3 z-10 rounded-xl border border-white/15 bg-zinc-950/80 px-3 py-2 shadow-lg backdrop-blur-md">
                  <img
                    src={logo}
                    alt={platform}
                    className="h-5 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </>
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center border-b bg-gradient-to-br px-8",
                platformStyle.headerClassName,
              )}
            >
              {logo ? (
                <img
                  src={logo}
                  alt={platform}
                  className="h-12 w-auto object-contain opacity-95 transition-transform duration-500 group-hover/preview:scale-105 md:h-14"
                  loading="lazy"
                />
              ) : (
                <span className="font-poppins text-sm font-semibold tracking-[0.24em] text-white/80 uppercase">
                  {platform}
                </span>
              )}
            </div>
          )}
          <div
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover/preview:opacity-100 group-focus-visible/preview:opacity-100"
            aria-hidden
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm">
              View credential
              <ExternalLink className="size-4" />
            </span>
          </div>
        </a>

        <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
          <header className="flex min-w-0 flex-col gap-1.5">
            <p
              className={cn(
                "text-sm font-medium",
                platformStyle.categoryClassName,
              )}
            >
              {platformStyle.label}
            </p>
            <h3 className="font-poppins text-lg leading-tight font-bold text-white md:text-xl">
              {title}
            </h3>
          </header>

          {badges.length > 0 ? (
            <ul
              className="mt-auto flex flex-wrap gap-2 pt-1"
              aria-label="Skills covered by this certificate"
            >
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80"
                >
                  {badge}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};
