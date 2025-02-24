const Navigator = () => {
    return (
        <nav className=" absolute w-full h-[113px] bg-[#1A0B2E] flex items-center pl-40 pr-35">
            <h1 className="font-[Preahvihear] text-[22px] w-full"><a href="">Andres | Portafolio</a></h1>
            <menu className="w-full justify-end flex gap-15 font-[Preahvihear] text-4">
                <a
                    href=""
                    className="relative text-white hover:after:w-full after:content-[''] after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300"
                >
                    Home
                </a>
                <a
                    href=""
                    className="relative text-white hover:after:w-full after:content-[''] after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300"
                >
                    Work Experience
                </a>
                <a
                    href=""
                    className="relative text-white hover:after:w-full after:content-[''] after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300"
                >
                    Project
                </a>
                <a target="_blank" rel="noreferrer"
                    href="https://drive.google.com/file/d/185dgOBLNU1kapKmNW3OEcANvZMnRmch5/view?usp=sharing"
                    className="relative text-white hover:after:w-full after:content-[''] after:absolute after:block after:w-0 after:h-[2px] after:bg-white after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300"
                >
                    Resume
                </a>
            </menu>
        </nav>
    );
};

export default Navigator;