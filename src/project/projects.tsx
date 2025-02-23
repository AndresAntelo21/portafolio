import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
const Projects = ({ reverse = false }) => {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-[657px] h-auto flex flex-row z-10 relative ${reverse ? 'pl-[215px]' : 'left-[70px]'}`}>
                <div className={`flex-col w-[372px] flex ${reverse ? 'items-end' : 'items-start'}`}>
                    <h2 className="font-[poppins] text-[16px] text-[#9857D3]">Featured Project</h2>
                    <h3 className="font-[poppins] text-[34px]">Example Project</h3>
                    <div className="w-[650px]  mt-7 rounded-[14px] bg-white/7">
                        <p className={`font-[poppins] text-[18px] p-3 ${reverse ? 'text-right' : 'text-left'}`}>
                            A web app for visualizing personalized Spotify data. View your top artists, top tracks,
                            recently played tracks, and detailed audio information about each track. Create and save
                            new playlists of recommended tracks based on your existing playlists and more.
                        </p>
                    </div>
                    <div className={`w-full pt-4 text-[25px] flex gap-4 items-end ${reverse ? 'justify-end' : 'justify-start'}`}>
                        <RiReactjsFill />
                        <RiTailwindCssFill />
                        <SiVite />
                    </div>
                </div>
            </div>
            <div className={`relative w-[489px] h-[301px] bg-[#1e012c] rounded-[10px] overflow-hidden z-0 ${reverse ? 'left-[140px]' : 'right-[67px]'} flex items-end`}>
                <img src="./projects/projectTest.png" className={`rounded-tl-[10px] absolute bottom-[-1px] ${reverse ? 'left-[-50px]' : 'right-[-50px]'} w-[500px] h-auto`} />
            </div>
        </div>
    );
};

export default Projects;
