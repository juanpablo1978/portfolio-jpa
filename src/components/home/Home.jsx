import { useNavigate } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const texto = [
  "FRONTEND",
  "DEVELOPER |",
  "React.js |",
  "CSS ",
  "HTML5",
  "|",
  "Next.js",
  "|",
  "JAVASCRIPT ",
  "Typescript",
  "|",
  "TAILWIND",
];


const Home = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-r from-blue-950 to-black z-20
    flex flex-col lg:flex-row justify-center items-center px-3 py-9 lg:px-16"
    >
      <article className="mt-[200px] lg:mt-0 pb-7 text-teal-200 text-2xl lg:text-[42px] px-10
     font-semibold leading-[50px] lg:leading-[65px] text-center lg:pr-20 lg:mb-16">
        {texto.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            style={{ marginRight: "0.5rem", display: "inline-block" }}
          >
            {word}
          </motion.span>
        ))}
      </article>

      <article className="lg:flex lg:flex-col md:flex md:flex-col">
        <div
          className=" md:w-[800px] lg:px-0 text-[22px] lg:text-[24px] pb-11 text-slate-300 lg:w-[700px]
           px-14 text-left lg:pt-16 md:flex md:gap-x-8 lg:flex-col"
        >
          <p>
            Desarrollo y mantenimiento de aplicaciones <span className="text-cyan-700 font-semibold">web eficientes y escalables, </span>
            priorizando la experiencia del usuario y el rendimiento. Me
            especializo en implementar buenas prácticas y estar al tanto de las
            <span className="text-cyan-700 font-semibold"> últimas tendencias y tecnologías</span> del ecosistema web.
          </p>
          <br />
          <p>
            Apasionado por la maquetación, enfocado en crear y mantener la parte
            visual e interactiva de las aplicaciones web utilizando <span className="text-cyan-700 font-semibold">React.js</span>,
            mis principales responsabilidades son el desarrollo de interfaces de
            usuario - implementación de <span  className="text-cyan-700 font-semibold">diseño responsivo</span> - <span className="text-cyan-700 font-semibold" >integración APIs</span> -
            en colaboración con otros equipos de trabajo.
          </p>
        </div>
        <div className="flex text-lg justify-start md:justify-center px-11 gap-3 lg:pt-8 pb-20 lg:pb-0">
          <button
            onClick={goToPortfolio}
            className="text-slate-400 hover:text-slate-500 p-2 rounded-[55px] lg:text-2xl font-normal
          transition-all duration-300 w-[300px]shadow-2xl bg-transparent border border-white/10
           hover:bg-blue-900/10 hover:border-blue-500/30 lg:w-[358px] lg:h-[67px] flex
           items-center justify-center gap-x-2"
          >
            <span>EXPERIENCIA / PROYECTOS</span>
            <span className="text-[23px]">
              <CiLocationArrow1 />
            </span>
          </button>
        </div>
      </article>
    </main>
  );
};

export default Home;
