
function App() {

  return (
    <div className="w-full h-full mx-auto flex ">
      <div className="pt-50 pl-50  flex flex-row gap-4">
        <div className="absolute top-40 left-40 w-65 h-65 rounded-full
  bg-gradient-to-r from-[#763CAC]/40 to-[#320F85]/40 blur-lg opacity-90 -z-10">
        </div>
        <div className="w-50 h-auto relative">
          <img src="src/assets/hero/meTest.png" className="relative" />
        </div>
        <div className="w-max flex flex-col">
          <span className="font-[Preahvihear] text-[20px]">A front end programmer who</span>
          <div className="flex w-160">
            <h1 className="text-[50px] font-[Preahvihear]">With great power comes great <span className="text-[#7127BA]">responsibility</span>...</h1>
          </div>
          <span className="font-[Preahvihear] text-[20px]">I really like Spiderman</span>
        </div>
      </div>
    </div>

  )
}

export default App
