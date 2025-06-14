import { dataAboutPage } from "/public/Data/Data.jsx";
import { RiProgress8Line } from "react-icons/ri";

const AboutMe = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-950 to-black pt-52 md:py-40 lg:py-40 flex flex-col text-slate-200">
      <h2 className="text-center pb-16 px-2 text-2xl lg:text-[40px] font-semibold text-slate-200">
        Trayectoria académica y experiencia laboral
      </h2>
      <section className="flex justify-center px-14 gap-5 md:relative lg:relative ">
        <section>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[295px] md:h-[200px] border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[295px] md:h-[200px]  border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[295px] md:h-[200px]  border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
        </section>

        <section className="grid grid-rows-4 lg:w-[650px]">
          {dataAboutPage.map((data) => (
            <div key={data.id}>
              <span
                className="text-teal-300 h-6 w-16 bg-white/15 background-blur-sm rounded-lg font-bold
        flex justify-center items-center lg:absolute lg:left-[410px] lg:h-[35px] lg:w-[80px] lg:text-[25px]
         mb-2 lg:mb-0"
              >
                {data.date}
              </span>
              <h3 className="font-bold pb-1 lg:text-[28px] text-slate-200">{data.title}</h3>
              <div>
                <div className="font-bold text-slate-500 pb-1 lg:text-[24px]">
                  {data.subtitle}
                </div>
              </div>
              <div
                className="text-slate-500 text-md pb-8 lg:text-[22px] lg:p-5 lg:my-4
                bg-transparent border border-white/10 lg:w-[655px] lg:h-[189px]
           shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30"
              >
                {data.description}
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default AboutMe;
