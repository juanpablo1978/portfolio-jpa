import { dataPortfolio } from "../../../public/Data/Data";
import { dataAiko } from "../../../public/Data/Data";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-r from-blue-950 to-black py-44
     flex justify-center items-center flex-col"
    >
      <h3 className="text-slate-200 text-[22px] lg:text-[40px] font-bold text-center lg:pb-9 lg:mb-14
      my-14 md:my-20 md:text-[30px]">
        Experiencia laboral - Aikodev
      </h3>

       <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
        {dataAiko.map((data) => (
          <article
            className="w-[325px] h-[600px] lg:w-[570px] lg:h-[640px] md:w-[350px] md:h-[650px] rounded-md
               bg-transparent border border-white/10 
               shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30 "
            key={data.id}
          >
            <article
              className="w-[323px] h-[250px] lg:w-[568px] lg:h-[360px] md:w-[348px] md:h-[300px]
               rounded-t-md pb-5 "
            >
              <img
                className="w-full h-full object-cover rounded-t-md"
                src={data.image}
                alt="proyecto imagen"
              />
            </article>

            <article className=" gap-3 px-3">
              <h3 className="text-slate-200 text-[18px] lg:text-3xl font-normal pb-2 px-3 lg:my-2">
                {data.title}
              </h3>
              <p className="text-gray-500 text-xl mb-5">
                {data.description}
              </p>
               <article className="flex lg:gap-x-8 mt-[26px]">
              <div className="flex gap-x-5 px-3">
                <a
                  href={data.urlGithub}
                  target="_blank"
                  className=" hover:text-teal-700 text-teal-500 transition-all duration-300"
                >
                  <FaGithub className="lg:text-[35px] text-[19px]" />
                </a>
                <a
                  href={data.urlDemo}
                  target="_blank"
                  className="text-slate-500  hover:text-slate-600  transition-all duration-300"
                >
                  <FaLink className="lg:text-[35px] text-[19px]" />
                </a>
              </div>
                 {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 lg:px-3">
          {data.tecnologias?.map((tec, i) => (
            <span
              key={i}
              className=" px-3 py-1 rounded-full border border-white/10  shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30 text-teal-200 text-[10px] lg:text-[15px]"
            >
              {tec}
            </span>
          ))}
        </div>
            </article>
            </article>
          </article>
        ))}
      </article>

      
      <h3 className="text-slate-200 text-2xl lg:text-[40px] md:text-[30px] font-bold text-center my-20 lg:mb-14">
        Proyectos Personales
      </h3>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
        {dataPortfolio.map((data) => (
          <article
            className="w-[325px] h-[600px] lg:w-[570px] lg:h-[640px] md:w-[350px] md:h-[640px] rounded-md
               bg-transparent border border-white/10 
               shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30 "
            key={data.id}
          >
            <article
              className="w-[323px] h-[250px] lg:w-[568px] lg:h-[340px] md:w-[348px] md:h-[300px]
               rounded-t-md pb-5 "
            >
              <img
                className="w-full h-full object-cover rounded-t-md"
                src={data.image}
                alt="proyecto imagen"
              />
            </article>

            <article className=" gap-3 px-3">
              <h3 className="text-slate-200 text-xl lg:text-3xl font-normal pb-2 px-3 lg:my-2">
                {data.title}
              </h3>
              <p className="text-gray-500 text-xl mb-5">
                {data.description}
              </p>
              <article className="flex lg:gap-x-12 mt-[26px] items-center">
              <div className="flex gap-x-5 px-3">
                <a
                  href={data.urlGithub}
                  target="_blank"
                  className=" hover:text-teal-700 text-teal-500 transition-all duration-300"
                >
                  <FaGithub className="lg:text-[35px] text-[19px]" />
                </a>
                <a
                  href={data.urlDemo}
                  target="_blank"
                  className="text-slate-500  hover:text-slate-600  transition-all duration-300"
                >
                  <FaLink className="lg:text-[35px] text-[19px]" />
                </a>
              </div>
                 {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 px-3 lg:mb-5">
          {data.tecnologias?.map((tec, i) => (
            <span
              key={i}
              className=" px-3 py-1 rounded-full border border-white/10  shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30 text-teal-200 text-[10px] lg:text-[15px]"
            >
              {tec}
            </span>
          ))}
        </div>
            </article>
          </article>
          </article>
        ))}
      </article>
    </main>
  );
};

export default Portfolio;
