import { Link } from "react-router-dom";
import { itemsNavbar } from "../../../public/Data/Data";

const NavBar = () => {
  return (
    <article className=" z-20 flex justify-center w-full fixed bottom-10">
      <div
        className="w-72 h-12 bg-white/15 background-blur-sm rounded-3xl flex
      items-center text-slate-500 gap-4 justify-center text-3xl z-40"
      >
        {itemsNavbar.map((item) => (
          <div
            className="rounded-full hover:bg-teal-700 transition-all duration-300 w-10 h-10
         flex items-center justify-center"
            key={item.id}
          >
            <Link to={item.link}>
              <span className="cursor-pointer">{item.icon}</span>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default NavBar;
