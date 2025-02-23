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
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-[657px] h-auto flex flex-row z-10 relative ${reverse ? 'pl-[215px]' : 'left-[70px]'}`}>
                <div className={`flex-col w-[372px] flex ${reverse ? 'items-end' : 'items-start'}`}>
                    <h2 className="font-[poppins] text-[16px] text-[#9857D3]">{featuredText}</h2>
                    <h3 className="font-[poppins] text-[34px]">{title}</h3>
                    <div className="w-[650px]  mt-7 rounded-[14px] bg-white/7">
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
            <div className={`relative w-[489px] h-[301px] bg-[#1e012c] rounded-[10px] overflow-hidden z-0 ${reverse ? 'left-[70px]' : 'right-[67px]'} flex items-end`}>
                <img src={imageSrc} className={`rounded-tl-[10px] absolute bottom-[-1px] ${reverse ? 'left-[-50px]' : 'right-[-50px]'} w-[500px] h-auto`} />
            </div>
        </div>
    );
};

export default Projects;
