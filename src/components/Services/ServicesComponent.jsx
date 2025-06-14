import SlideServices from "./SlideServices";

const ServicesComponent = () => {
  return (
    <main
      className="min-h-screen text-4xl bg-gradient-to-r from-blue-950 to-black text-white flex justify-center 
    flex-col py-36 items-center"
    >
      <section className="px-7 lg:mr-10 lg:px-[290px] md:px-[150px]">
        <h2 className="text-center py-8 lg:pb-8 lg:text-[40px] text-3xl font-semibold text-slate-200">
          Mis servicios
        </h2>
   
      </section>
      <section>
        <SlideServices />
      </section>
    </main>
  );
};

export default ServicesComponent;
