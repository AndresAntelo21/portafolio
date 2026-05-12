import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ToolsTextProps {
  title: string;
  iconSrc?: string;
  icons?: IconType[];
  className?: string;
  chipClassName?: string;
}

export const ToolsText: React.FC<ToolsTextProps> = ({
  title,
  iconSrc,
  icons = [],
  className,
  chipClassName = "border-blue-600 bg-blue-950",
}) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <div className={cn("rounded-full border-1", chipClassName)}>
        <div className="flex items-center justify-center gap-2 py-1 pr-4 pl-2">
          {(iconSrc || icons.length > 0) && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
              {iconSrc ? (
                <img
                  src={iconSrc}
                  alt=""
                  aria-hidden
                  className="h-6 w-6 object-contain"
                />
              ) : (
                icons.map((Icon, index) => (
                  <Icon key={index} className="text-2xl" />
                ))
              )}
            </div>
          )}
          <span className="font-poppins text-base">{title}</span>
        </div>
      </div>
    </div>
  );
};
