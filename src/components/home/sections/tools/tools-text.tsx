import { IconType } from "react-icons";
interface ToolsTextProps {
  title: string;
  icons: IconType[];
  className?: string;
}

export const ToolsText: React.FC<ToolsTextProps> = ({
  title,
  icons,
  className,
}) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="rounded-full border-1 border-violet-600 bg-violet-950">
        <div className="flex items-center justify-center gap-2 py-1 pr-4 pl-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl">
            {icons.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
          <span className="font-poppins text-base">{title}</span>
        </div>
      </div>
    </div>
  );
};
