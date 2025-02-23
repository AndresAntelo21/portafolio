import { IconType } from "react-icons";

interface ProjectsProps {
    reverse?: boolean;
    title: string;
    description: string;
    imageSrc: string;
    featuredText: string;
    icons: IconType[];
}

const Projects: React.FC<ProjectsProps> = ({ reverse = false, title, description, imageSrc, featuredText, icons }) => {
    return (
        <div className="relative flex">
            <div className={`absolute top-[-40px] ${reverse ? 'left-[-40px]' : 'right-[-100px]'} w-80 h-95 rounded-full bg-gradient-to-r from-[#763CAC]/40 to-[#320F85]/40 blur-lg opacity-90 -z-10`}></div>
            <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-[657px] h-auto flex flex-row z-10 relative ${reverse ? 'pl-[215px]' : 'left-[70px]'}`}>
                    <div className={`flex-col w-[372px] flex ${reverse ? 'items-end' : 'items-start'}`}>
                        <h2 className="font-[poppins] text-[16px] text-[#9857D3]">{featuredText}</h2>
                        <h3 className="font-[poppins] text-[34px]">{title}</h3>
                        <div className="w-[650px] mt-7 rounded-[14px] bg-white/7">
                            <p className={`font-[poppins] text-[18px] p-3 ${reverse ? 'text-right' : 'text-left'}`}>
                                {description}
                            </p>
                        </div>
                        <div className={`w-full pt-4 text-[25px] flex gap-4 items-end ${reverse ? 'justify-end' : 'justify-start'} ${reverse ? 'pr-5' : 'pl-5'}`}>
                            {icons.map((Icon, index) => (
                                <Icon key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`relative w-[400px] h-[250px] bg-[#1e012c] rounded-[10px] overflow-hidden z-0 flex items-end pt-[10px] ${reverse ? 'pr-[20px]' : 'pl-[20px]'}`}>
                    <div className={`relative pt-4 w-full h-full overflow-hidden ${reverse ? 'pr-4' : 'pl-4'}`}>
                        <img src={imageSrc} className={`w-[400px] h-[250px] object-cover ${reverse ? 'rounded-tr-[16px]' : 'rounded-tl-[16px]'}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;