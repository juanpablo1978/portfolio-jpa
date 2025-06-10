import { serviceData } from "/public/Data/Data.jsx";

const SlideServices = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 gap-y-8">
      {serviceData.map((service) => {
        return (
          <article
            className="w-[340px] h-[330px] lg:w-[400px] lg:h-[440px] md:w-[350px] md:h-[440px] rounded-md
               border-slate-500  border-[2px] px-4 py-6 flex flex-col gap-y-4 "
            key={service.id}
          >
            <span className="text-teal-700">{service.icon}</span>
            <h2 className="text-3xl">{service.title}</h2>

            <p className="text-2xl text-gray-500">{service.description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default SlideServices;
