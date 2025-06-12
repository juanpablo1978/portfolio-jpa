import { socialNetworks } from "../../../public/Data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-950 to-black z-40 flex flex-col justify-center w-full items-center
      lg:flex-row lg:justify-around h-40 lg:h-20 pt-14 lg:pt-0 fixed"
    >
      <article className="text-blue-200 text-2xl lg:text-[40px] font-bold flex justify-center pb-5 lg:pb-0">
        <Link to="/"> JPA</Link>
      </article>

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
