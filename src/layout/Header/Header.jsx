import { socialNetworks } from "../../../public/Data/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import perfil from "/public/Images/perfilport.jpg"


const Header = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-950 to-black z-40 flex flex-col justify-center w-full items-center
      lg:flex-row lg:justify-around h-[230px] lg:h-[90px] fixed"
    >
      <motion.article
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl font-medium lg:text-[35px] hover:text-slate-300 shadow-2xl 
                 transition-colors duration-300 pb-5 lg:pb-0 text-slate-400"
      >
        <Link to="/">
          <article className="flex items-center gap-4 flex-col lg:flex-row ">
            <div className="w-[70px] h-[70px] rounded-full object-cover border-[3px] border-blue-200/30">
              <img
                className="rounded-full object-cover"
                src={perfil}
                alt="foto perfil"
              />
            </div>
            <div className="font-thin lg:text-[35px] text-[27px] mb-4 lg:mb-0">
              Juan Pablo Andrujovich
             
            </div>
          </article>
        </Link>
      </motion.article>

      <article className="flex items-center text-slate-300 gap-5 justify-center text-3xl">
        {socialNetworks.map(({ logo, src, id }) => (
          <a
            href={src}
            className="w-7 h-7 lg:w-8 lg:h-8 transition-all duration-300 cursor-pointer
        hover:text-white text-slate-400"
            key={id}
            target="_blank"
          >
            {logo}
          </a>
        ))}
      </article>
    </section>
  );
};

export default Header;
