import CardExperience from './cards/cardExperience';
import Projects from './project/projects';
export default function App() {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center">
      <div className="pt-50   flex flex-row gap-4 ">
        <div className="absolute top-43 left-50 w-65 h-65 rounded-full
            bg-gradient-to-r from-[#763CAC]/40 to-[#320F85]/40 blur-lg opacity-90 -z-10">
        </div>
        <div className="w-50 h-auto relative">
          <img src="./public/hero/meTest.png" className="relative" />
        </div>
        <div className="absolute top-25 left-90 flex items-center justify-center">
          <img src="./public/hero/Arrow.png" className="w-30 h-auto" />
        </div>
        <div className="absolute top-30 left-117">
          <h2 className="font-[Preahvihear] text-[20px]">Hello! I Am <span className="text-[#7127BA]">Andres Antelo</span></h2>
        </div>
        <div className="w-max flex flex-col">
          <span className="font-[Preahvihear] text-[20px] underline">A front end programmer who</span>
          <div className="flex w-160">
            <h1 className="text-[50px] font-[Preahvihear]">With great power comes great <span className="text-[#7127BA]">responsibility</span>...</h1>
          </div>
          <span className="font-[Preahvihear] text-[20px]">I really like Spiderman</span>
        </div>
      </div>
      <div className="flex pt-30 flex-col">
        <span className="font-[Preahvihear] text-[50px]">I'm a Software Engineer.|</span>
        <h2 className="font-[Preahvihear] text-[20px]">I am currently looking for a <span className="text-[#7127BA]">job</span></h2>
        <p className="font-[Preahvihear] text-[22px] pt-20 w-250">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.</p>
      </div>
      <div className="relative flex justify-start pt-30 flex-col">
        <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-130 h-130 rounded-full bg-gradient-to-r from-[#763CAC]/40 to-[#320F85]/40 blur-lg opacity-90 -z-10"></div>
        <h2 className="font-[Preahvihear] text-[40px]">Work Experience</h2>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <CardExperience />
          <CardExperience />
          <CardExperience />
          <CardExperience />
        </div>
      </div>
      <div className='pt-20 w-[895px] text-center'>
        <h2 className='font-[Preahvihear] text-[24px]'>I'm currently looking to join a <span className='text-[#7127BA]'>cross-functional</span> team
          that values improving people's lives through accessible design </h2>
        <div className='flex flex-col justify-center gap-2 p-5 select-none' >
          <div className='flex flex-row items-center justify-center gap-2 '>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/react.svg" />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/vue.svg" className='' />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/tailwind.svg" />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/vite.svg" className='' />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/html.svg" />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/css.svg" className='' />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center p-1'>
              <img src="./public/tools/js.svg" className='w-[30px] h-auto' />
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-2'>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center '>
              <img src="./public/tools/typescript.svg" className='w-[34px] h-auto' />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center '>
              <img src="./public/tools/git.svg" />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center '>
              <img src="./public/tools/python.svg" className='w-[33px] h-auto' />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center '>
              <img src="./public/tools/node.svg" />
            </div>
            <div className='w-[44px] h-[44px] bg-[#251c31] rounded-full flex items-center justify-center '>
              <img src="./public/tools/figma.svg" />
            </div>
          </div>
        </div>
      </div >
      <div className='flex flex-col pt-10 gap-10'>
        <Projects />
        <Projects reverse={true} />
        <Projects />
        <Projects reverse={true} />
      </div>
    </div >
  )
}

