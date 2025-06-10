import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <main
      className="min-h-screen text-4xl bg-black z-20
    flex justify-center items-center"
    >
      <section className="lg:flex lg:gap-[115px] md:gap-[115px] mt-52 lg:mt-0 md:mt-0 px-11 lg:px-0 md:px-0">
        <article className="rounded-full w-[300px] h-[300px] z-40  lg:mt-8  md:mt-8">
          <img
            className="rounded-full w-full h-full object-cover"
            src="/Images/perfilport.jpg"
            alt="foto de perfil"
          />
        </article>
        <article className="lg:flex lg:flex-col md:flex md:flex-col">
          <div className="text-white px-11 text-left">
            <div className="text-2xl lg:text-3xl lg:font-bold font-medium pt-20 lg:pt-0 pb-7">
              <h2>
                <span>Hola, soy Desarrollador</span>
                <br />
                <span className=" text-teal-700">Frontend React</span>
              </h2>
            </div>
            <div className="lg:w-96 md:w-96">
              <p className="text-lg pb-11">
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
              className="text-slate-500 border-[2px] border-slate-500 p-2 rounded-lg text-2xl font-normal
          hover:text-slate-700 hover:border-gray-700 transition-all duration-300 lg:w-52"
            >
              PROYECTOS
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
