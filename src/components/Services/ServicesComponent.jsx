import SlideServices from "./SlideServices";

const ServicesComponent = () => {
  return (
    <main
      className="min-h-screen text-4xl bg-black text-white flex justify-center 
    flex-col lg:flex-row py-36 items-center"
    >
      <section className="px-7 lg:w-[500px] lg:mr-10">
        <h2 className="text-center py-8 lg:pb-8 lg:text-4xl text-3xl font-semibold">
          Mis servicios
        </h2>
        <p className="text-lg text-slate-500 pb-6">
          Enfocado en crear y mantener la parte visual e interactiva de las
          aplicaciones web utilizando React.js ; aquí un desglose de mis
          principales responsabilidades: Desarrollo de interfaces de usuario -
          Implementación de diseño responsivo - Integración APIs - Colaboración
          con otros equipos de trabajo.
        </p>
      </section>
      <section>
        <SlideServices />
      </section>
    </main>
  );
};

export default ServicesComponent;
