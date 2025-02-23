const projects = () => {
    return (
        <div className="flex">
            <div className="w-[657px] h-auto flex flex-row justify-start z-10 relative left-[135px]">
                <div className="flex-col w-[372px]">
                    <h2 className="font-[poppins] text-[16px] text-[#9857D3]">Featured  Project</h2>
                    <h3 className="font-[poppins] text-[34px]">Example Project</h3>
                    <div className=" w-[650px] p-3 rounded-[14px] bg-white/7">
                        <p className="font-[poppins] text-[18px]">A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.</p>
                    </div>
                </div>
            </div>
            <div className="relative w-[489px] h-[301px] bg-[#1e012c] rounded-[10px] overflow-hidden z-0 right-[67px] flex items-end">
                <img src="./projects/projectTest.png" className="rounded-tl-[10px] absolute bottom-[-1px] right-[-50px] w-[500px] h-auto" />
            </div>
        </div>
    );
};

export default projects;