import { dataPortfolio } from "../../../public/Data/Data";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-black py-44">
      <section className="flex flex-col justify-center">
        <article>
          <h2 className="text-white text-2xl lg:text-4xl font-bold text-center pb-9 flex-wrap">
            PROYECTOS
          </h2>
        </article>

        <article className="flex justify-center flex-wrap md:px-96 lg:px-96 gap-5 lg:gap-8">
          {dataPortfolio.map((data) => (
            <article
              className="w-[250px] h-[340px] lg:w-[400px] lg:h-[440px] md:w-[350px] md:h-[440px] rounded-md
               border-slate-500  border-[2px] px-2 py-3  hover:bg-zinc-900
                transition-all duration-300 hover:cursor-pointer "
              key={data.id}
            >
              <h3 className="text-white text-xl font-semibold pb-2 px-3">
                {data.title}
              </h3>

              <article
                className="w-[235px] h-[240px] lg:w-[380px] lg:h-[300px] md:w-[335px] md:h-[300px]
               rounded-md pb-5 "
              >
                <img
                  className="w-full h-full object-cover rounded-md border-slate-500 border-[1px]"
                  src={data.image}
                  alt="proyecto imagen"
                />
              </article>

              <article className="flex gap-3 px-3">
                <button
                  className="border-teal-700 border-2  text-teal-700 w-16 h-8
               rounded-md hover:text-teal-900 hover:border-teal-900 transition-all duration-300"
                >
                  Github
                </button>
                <button
                  className="text-slate-500 border-[2px] border-slate-500 w-16 h-8 rounded-md
              hover:text-slate-600 hover:border-gray-600 transition-all duration-300"
                >
                  Demo
                </button>
              </article>
            </article>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Portfolio;
