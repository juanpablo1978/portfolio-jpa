import SlideServices from "./SlideServices";

const ServicesComponent = () => {
  return (
    <main
      className="min-h-screen text-4xl bg-black text-white flex justify-center 
    flex-col lg:flex-row py-36 items-center"
    >
      <section className="px-7 lg:w-[500px] lg:mr-10">
        <h2 className="text-center py-10 lg:text-4xl text-3xl font-semibold">
          Mis servicios
        </h2>
        <p className="text-[18px] text-slate-500">
          Enfocado en crear y mantener la parte visual e interactiva de las
          aplicaciones web utilizando React.js; aquí un desglose de mis
          principales responsabilidades: Desarrollo de interfaces de usuario,
          Implementación de diseño responsivo, Integración con APIs,
          Colaboración con otros equipos.
        </p>
        <button
          className="text-teal-700 border-[2px] border-teal-700 p-2 rounded-lg
           hover:text-teal-800 hover:border-teal-800 transition-all duration-300 hover:shadow-2xl
           h-11 w-48 text-[21px] pb-12 my-8 ml-16 lg:ml-32"
        >
          Contacta conmigo
        </button>
      </section>
      <section className="">
        <SlideServices />
      </section>
    </main>
  );
};

export default ServicesComponent;
