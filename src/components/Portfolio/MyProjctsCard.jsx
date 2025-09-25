import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { useState } from "react";
import PropTypes from "prop-types"



const MyProjctsCard = ({data}) => {

  const {id, image, title, description, urlDemo, urlGithub, tecnologias, portugues} = data;

   const [open, setOpen] = useState(false);
    const togleOpen = () => setOpen(true);
  const togleClose = () => setOpen(false);

  return (
       <article
                key={id}
                className="w-[325px] h-[600px] lg:w-[570px] lg:h-[640px] md:w-[350px] md:h-[650px] rounded-md
                           bg-transparent border border-white/10 shadow-2xl transition-colors duration-300
                           hover:bg-blue-900/10 hover:border-blue-500/30"
              >
                <article className="w-[323px] h-[250px] lg:w-[568px] lg:h-[360px] md:w-[348px] md:h-[300px] rounded-t-md pb-5">
                  <img
                    className="w-full h-full object-cover rounded-t-md"
                    src={image}
                    alt="proyecto imagen"
                  />
                </article>
    
                <article className="gap-3 px-3">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <h3 className="text-slate-200 text-[18px] lg:text-3xl font-normal pb-2 px-3 lg:my-2">
                        {title}
                      </h3>
                    </div>
    
                    {/* BOTÓN PORTUGUÉS */}
                    <div>
                      <button
                        onClick={togleOpen}
                        className="mt-2 inline-block px-4 py-1 rounded-full border border-teal-400 text-[14px]
                               text-teal-400  hover:bg-yellow-300 hover:border-yellow-300
                               mb-4 hover:text-black transition-colors"
                      >
                        PORTUGUÉS
                      </button>
                    </div>
                  </div>
    
                  {/* MODAL */}
                  {open && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
                      <div
                        className="bg-gradient-to-br from-blue-950 to-black border border-white/10 
                                      shadow-2xl rounded-lg max-w-md w-full mx-4 p-8 relative"
                      >
                        <button
                          onClick={togleClose}
                          className="absolute top-4 right-4 text-slate-400 hover:text-teal-400 transition-colors"
                          aria-label="Cerrar"
                        >
                          ✕
                        </button>
                        {

                        }
                        <p className="text-slate-200 text-[18px] leading-relaxed text-center">
                         {portugues}
                        </p>
                      </div>
                    </div>
                  )}
    
                  <p className="text-gray-500 text-xl mb-5">{description}</p>
    
                  <article className="flex lg:gap-x-8 mt-[26px]">
                    <div className="flex gap-x-5 px-3">
                      <a
                        href={urlGithub}
                        target="_blank"
                        className="hover:text-teal-700 text-teal-500 transition-all duration-300"
                      >
                        <FaGithub className="lg:text-[35px] text-[19px]" />
                      </a>
                      <a
                        href={urlDemo}
                        target="_blank"
                        className="text-slate-500 hover:text-slate-600 transition-all duration-300"
                      >
                        <FaLink className="lg:text-[35px] text-[19px]" />
                      </a>
                    </div>
    
                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 lg:px-3">
                      {tecnologias?.map((tec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full border border-white/10 shadow-2xl
                                     transition-colors duration-300 hover:bg-blue-900/10 hover:border-blue-500/30
                                     text-teal-200 text-[10px] lg:text-[15px]"
                        >
                          {tec}
                        </span>
                      ))}
                    </div>
                  </article>
                </article>
              </article>
  )
}

MyProjctsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
       portugues: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlGithub: PropTypes.string,
    urlDemo: PropTypes.string,
    tecnologias: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}


export default MyProjctsCard