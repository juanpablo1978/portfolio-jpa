import { dataPortfolio } from "../../../public/Data/Data";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-r from-blue-950 to-black py-44
     flex justify-center items-center flex-col"
    >
      <h2 className="text-white text-2xl lg:text-[40px] font-bold text-center pb-9 lg:mb-14">
        PROYECTOS
      </h2>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
        {dataPortfolio.map((data) => (
          <article
            className="w-[345px] h-[510px] lg:w-[570px] lg:h-[610px] md:w-[350px] md:h-[440px] rounded-md
               bg-transparent border border-white/10 
               shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30 "
            key={data.id}
          >
            <article
              className="w-[343px] h-[260px] lg:w-[568px] lg:h-[350px] md:w-[335px] md:h-[300px]
               rounded-t-md pb-5 "
            >
              <img
                className="w-full h-full object-cover rounded-t-md"
                src={data.image}
                alt="proyecto imagen"
              />
            </article>

            <article className=" gap-3 px-3">
              <h3 className="text-white text-xl lg:text-3xl font-bold pb-2 px-3">
                {data.title}
              </h3>
              <p className="text-gray-500 lg:text-xl mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                dolores aliquam quasi dignissimos vel sapiente? Nostrum
                recusandae sit aliquid dolorum? Exercitationem reiciendis ullam
                distinctio. Ratione voluptas culpa adipisci odio quas.
              </p>
              <div className="flex gap-x-5 px-3">
                <a
                  href={data.urlGithub}
                  target="_blank"
                  className=" hover:text-teal-700 text-teal-500 transition-all duration-300"
                >
                  <FaGithub className="lg:text-[35px]" />
                </a>
                <a
                  href={data.urlDemo}
                  target="_blank"
                  className="text-slate-500  hover:text-slate-600  transition-all duration-300"
                >
                  <FaLink className="lg:text-[35px]" />
                </a>
              </div>
            </article>
          </article>
        ))}
      </article>
    </main>
  );
};

export default Portfolio;
