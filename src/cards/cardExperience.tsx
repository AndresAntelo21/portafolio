const cardExperience = () => {
    return (
        <div className="w-[500px] h-[192.68px] rounded-[15px] bg-gradient-to-br from-[#130428] via-[#130428] to-[#38126D] flex items-center justify-center p-10">
            <div className="flex flex-row gap-4">
                <div className="w-[250px] h-auto flex items-center justify-center">
                    <img src="./public/hero/test-image.png" />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="font-[poppins] text-[26px]">MOVILIDAD</h1>
                    <p className="font-[poppins] text-[10px]">Take your client onboard seamlessly by our amazing
                        tool of digital onboard process.
                    </p>
                    <div className=" flex w-full items-center justify-start">
                        <button className="flex items-center justify-center w-[140px] h-[35px] bg-[#2C1250] rounded-[10px] border border-[#693B93] cursor-pointer">
                            <span className="font-[poppins] text-[12px]">LEARN MORE</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardExperience;