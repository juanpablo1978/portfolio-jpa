import { dataAboutPage } from "/public/Data/Data.jsx";
import { RiProgress8Line } from "react-icons/ri";

const AboutMe = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-52 md:py-40 lg:py-40 flex flex-col ">
      <h2 className="text-center pb-16 px-2 text-2xl lg:text-4xl font-semibold">
        Trayectoria académica y experiencia laboral
      </h2>
      <section className="flex justify-center px-14 gap-5 md:relative lg:relative ">
        <section>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[150px] md:h-[150px] border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[140px] md:h-[150px]  border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
          <div className="h-[350px] lg:h-[140px] md:h-[150px]  border-l-2 border-gray-500 ml-2"></div>
          <RiProgress8Line />
        </section>

        <section className="grid grid-rows-4 lg:w-[650px]">
          {dataAboutPage.map((data) => (
            <div key={data.id}>
              <span
                className="text-slate-500 h-6 w-16 bg-white/15 background-blur-sm rounded-lg font-bold
        flex justify-center items-center lg:absolute lg:left-[410px]
         mb-2 lg:mb-0"
              >
                {data.date}
              </span>
              <h3 className="font-bold pb-1">{data.title}</h3>
              <div>
                <div className="font-bold text-slate-500 pb-1">
                  {data.subtitle}
                </div>
              </div>
              <div className="text-slate-500 text-md pb-8">
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
