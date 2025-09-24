import { dataPortfolio, dataAiko } from "../../../public/Data/Data";
import AikoCard from "./AikoCard";
import GhibliCard from "./GhibliCard";
import MyProjctsCard from "./MyProjctsCard";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-950 to-black py-44 flex justify-center items-center flex-col">
      <h3 className="text-slate-200 text-[22px] lg:text-[40px] font-bold text-center lg:pb-9 lg:mb-14 my-14 md:my-20 md:text-[30px]">
        Experiencia laboral - Aikodev
      </h3>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
      <AikoCard data={dataAiko[0]} />
  <GhibliCard data={dataAiko[1]} />
      </article>

      <h3 className="text-slate-200 text-2xl lg:text-[40px] md:text-[30px] font-bold text-center my-20 lg:mb-14">
        Proyectos Personales
      </h3>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
        {dataPortfolio.map((data) => (
          <MyProjctsCard key={data.id} data={data} />
        ))}
      </article>
    </main>
  );
};

export default Portfolio;
