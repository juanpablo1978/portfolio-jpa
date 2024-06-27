import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <section
      className="bg-black z-40 flex flex-col justify-center w-full items-center
      lg:flex-row lg:justify-around h-40 lg:h-20 pt-14 lg:pt-0 fixed"
    >
      <article className="text-white text-2xl lg:text-4xl font-bold flex justify-center pb-5 lg:pb-0">
        Juan Pablo A<span className="text-teal-700">ndrujovich</span>
      </article>
      <article className="flex items-center text-slate-300 gap-5 justify-center text-3xl">
        <CiLinkedin
          className="w-7 h-7 lg:w-8 lg:h-8 transition-all duration-300 cursor-pointer
        hover:text-teal-700"
        />
        <FaGithub
          className="w-7 h-7 lg:w-8 lg:h-8 cursor-pointer transition-all duration-300
          hover:text-teal-700"
        />
        <CiFacebook
          className="w-7 h-7 lg:w-8 lg:h-8 cursor-pointer transition-all duration-300
        hover:text-teal-700"
        />
        <FaXTwitter
          className="w-7 h-7 lg:w-8 lg:h-8 cursor-pointer transition-all duration-300
         hover:text-teal-700"
        />
      </article>
    </section>
  );
};

export default Header;
