import { serviceData } from "/public/Data/Data.jsx";

const SlideServices = () => {
  return (
    <section
      className="min-h-screen grid grid-cols-1 gap-y-10 mt-5 md:grid-cols-1 md:gap-7
    lg:grid-cols-3 bg-gradient-to-r from-blue-950 to-black lg:gap-10"
    >
      {serviceData.map((service) => {
        return (
          <article
            className="w-[300px] h-[430px] md:w-[420px] md:h-[530px] rounded-xl px-6 py-8 lg:h-[410px]
           flex flex-col gap-6 items-center text-center 
           bg-transparent border border-white/10
           shadow-2xl transition-colors duration-300
           hover:bg-blue-900/10 hover:border-blue-500/30"
            key={service.id}
          >
            <span className="text-teal-300 ">{service.icon}</span>
            <h2 className="text-[20px] md:text-[22px] text-blue-200">
              {service.title}
            </h2>

            <p className=" text-[16px] md:text-[25px] lg:text-[20px] leading-7 font-normal text-gray-300">
              {service.description}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default SlideServices;
