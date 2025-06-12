import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

//https://www.youtube.com/shorts/k6ug-vCi20I

const Home = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <main
      className="min-h-screen text-4xl bg-gradient-to-r from-blue-950 to-black z-20
    flex justify-center items-center"
    >
      <section
        className="flex flex-col lg:flex-row lg:gap-[115px] md:gap-[115px] my-[190px]
       items-center "
      >
        <div className="text-2xl lg:text-[53px] lg:font-bold font-medium pt-20 md:pt-0 lg:pt-0 pb-7">
          <h1 className="text-teal-500 text-[53px]">Juan Pablo Andrujovich</h1>
          <br />
          <h2 className="text-blue-200 leading-[70px]">
            FRONTEND DEVELOPER
            <span className="text-[23px]">
              {" "}
              <br />
              <span className="text-teal-500 text-[35px]">REACT</span> | CSS |
              HTML5 | Next.js | Javascript | Typescript
              <br />
              <span className="text-teal-500 text-[35px]">
                PERFECT PIXEL | Tailwind
              </span>
            </span>
          </h2>
        </div>
        <article className="lg:flex lg:flex-col md:flex md:flex-col">
          <div className="text-white px-11 text-left">
            <div className="lg:w-96 md:w-96">
              <p className="text-lg lg:text-2xl pb-11 text-slate-300">
                Desarrollo y mantenimiento de sitios web atractivos y
                funcionales. Me gusta mantenerme actualizado en las últimas
                tendencias del sector. Mi objetivo es crear buenas experiencias
                para los usuarios y optimizar el rendimiento de los sitios.
              </p>
            </div>
          </div>
          <div className="flex text-lg justify-start px-11 gap-3">
            <button
              onClick={goToPortfolio}
              className="text-teal-300 hover:text-teal-500 p-2 rounded-[55px] text-2xl font-normal
          transition-all duration-300 w-52 bg-white/15 background-blur-sm lg:w-[358px] lg:h-[67px] flex
           items-center justify-center gap-x-2"
            >
              <span>EXPERIENCIA / PROYECTOS</span>
              <span className="text-[23px]">
                <MdArrowOutward />
              </span>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
