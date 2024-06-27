import { LuHome } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { IoCodeSlash } from "react-icons/io5";
import { SlSpeech } from "react-icons/sl";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <article className=" z-20 flex justify-center w-full fixed bottom-10">
      <div
        className="w-72 h-12 bg-white/15 background-blur-sm rounded-3xl flex
      items-center text-slate-500 gap-4 justify-center text-3xl z-40"
      >
        <div
          className="rounded-full hover:bg-teal-700 transition-all duration-300 w-9 h-9
         flex items-center justify-center"
        >
          <Link to="/">
            {" "}
            <LuHome className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
        <div
          className="rounded-full hover:bg-teal-700 transition-all duration-300 w-9 h-9
         flex items-center justify-center"
        >
          <Link to="/aboutme">
            {" "}
            <GoPerson className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
        <div
          className="rounded-full hover:bg-teal-700 transition-all duration-300 w-9 h-9
         flex items-center justify-center"
        >
          <Link to="/servicescomponent">
            <GoBook className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
        <div
          className="rounded-full hover:bg-teal-700 transition-all duration-300 w-9 h-9
         flex items-center justify-center"
        >
          <Link to="/portfolio">
            <IoCodeSlash className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
        <div
          className="rounded-full hover:bg-teal-700 transition-all duration-300 w-9 h-9
         flex items-center justify-center"
        >
          <Link to="/testimonials">
            <SlSpeech className="w-6 h-6 cursor-pointer" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NavBar;
