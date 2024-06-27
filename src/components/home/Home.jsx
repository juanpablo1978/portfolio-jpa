import { CoverParticles } from "../CoverParticles/CoverParticles";

const Home = () => {
  return (
    <main
      className="min-h-screen text-4xl bg-black z-20
    flex justify-center items-center"
    >
      <CoverParticles />
      <section className="lg:flex lg:gap-[115px]">
        <article className="rounded-full w-[300px] h-[300px] z-40 hidden xl:block lg:mt-8">
          <img
            className="rounded-full w-full h-full object-cover"
            src="/Images/perfilport.jpg"
            alt="foto de perfil"
          />
        </article>
        <article className="lg:flex lg:flex-col">
          <div className="text-white px-11 text-left">
            <div className="text-2xl lg:text-3xl lg:font-bold font-medium pt-20 lg:pt-0 pb-7">
              <h2>
                <span>Hola, soy Desarrollador</span>
                <br />
                <span className=" text-teal-700">Frontend React</span>
              </h2>
            </div>
            <div className="lg:w-96">
              <p className="text-lg pb-11">
                Experiencia desarrollo y mantenimiento de sitios web atractivos
                y funcionales. Tengo conocimientos de las tecnologías web
                actuales y me gusta mantenerme actualizado en las últimas
                tendencias del sector. Mi objetivo es crear buenas experiencias
                y optimizar el rendimiento de los sitios.
              </p>
            </div>
          </div>
          <div className="flex text-lg justify-start px-11 gap-3">
            <button
              className="text-slate-500 border-[2px] border-slate-500 p-2 rounded-lg
          hover:text-slate-600 hover:border-gray-600 transition-all duration-300"
            >
              Ver proyectos
            </button>
            <button
              className="text-teal-700 border-[2px] border-teal-700 p-2 rounded-lg
           hover:text-teal-800 hover:border-teal-800 transition-all duration-300 hover:shadow-2xl"
            >
              Contacta conmigo
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
