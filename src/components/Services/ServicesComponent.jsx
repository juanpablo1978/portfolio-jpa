import SlideServices from "./SlideServices";

const ServicesComponent = () => {
  return (
    <main
      className="min-h-screen text-4xl bg-gradient-to-r from-blue-950 to-black text-white flex justify-center 
    flex-col py-36 items-center"
    >
      <section className="px-7 lg:mr-10 lg:px-[290px] md:px-[150px]">
        <h2 className="text-center py-8 lg:pb-8 lg:text-[40px] text-3xl font-semibold">
          Mis servicios
        </h2>
        <p className="text-[22px] text-slate-300 pb-6">
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
