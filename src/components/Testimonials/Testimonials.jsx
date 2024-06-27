import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "../../../public/Data/Data";

const Testimonials = () => {
  return (
    <main className="min-h-screen bg-black text-white ">
      <h2 className="text-white text-2xl lg:text-4xl font-bold text-center pt-44 flex-wrap">
        Algunos testimonios
      </h2>
      <>
        <div className="flex flex-col justify-center pt-14">
          <div className="flex items-center justify-center">
            <div>
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
              >
                {dataTestimonials.map(({ id, name, description, imageUrl }) => (
                  <SwiperSlide key={id}>
                    <div className="w-[100px] h-[100px] mx-auto rounded-full">
                      <img
                        src={imageUrl}
                        alt={name}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h4 className="text-center">{name}</h4>
                    <div className="mt-5 text-center">{description}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default Testimonials;
