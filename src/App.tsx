import CardExperience from './cards/cardExperience';
export default function App() {
  return (
    <div className="w-full h-screen mx-auto flex flex-col items-center">
      <div className="pt-50   flex flex-row gap-4 ">
        <div className="absolute top-40 left-55 w-65 h-65 rounded-full
            bg-gradient-to-r from-[#763CAC]/40 to-[#320F85]/40 blur-lg opacity-90 -z-10">
        </div>
        <div className="w-50 h-auto relative">
          <img src="./public/hero/meTest.png" className="relative" />
        </div>
        <div className="absolute top-25 left-90">
          <img src="./public/hero/Arrow.png" className="w-30 h-auto" />
        </div>
        <div className="absolute top-30 left-117">
          <h2 className="font-[Preahvihear] text-[20px]">Hello! I Am <span className="text-[#7127BA]">Andres Antelo</span></h2>
        </div>
        <div className="w-max flex flex-col">
          <span className="font-[Preahvihear] text-[20px]">A front end programmer who</span>
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
      <div className="flex justify-start pt-50 flex-col">
        <h2 className="font-[Preahvihear] text-[40px]">Work Experience</h2>
        <div className='pt-[40px] grid grid-cols-1 md:grid-cols-2 gap-4'>
          <CardExperience />
          <CardExperience />
          <CardExperience />
          <CardExperience />
        </div>
      </div>
    </div>
  )
}

