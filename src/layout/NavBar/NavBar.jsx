import { Link } from "react-router-dom";
import { itemsNavbar } from "../../../public/Data/Data";

const NavBar = () => {
  return (
    <article className=" z-20 flex justify-center w-full fixed bottom-10">
      <div
        className="w-72 h-12 lg:w-[300px] lg:h-[52px] rounded-3xl flex bg-gradient-to-r from-blue-950 to-black
      items-center text-teal-300 gap-4 justify-center text-3xl z-40 border border-white/15 background-blur-sm "
      >
        {itemsNavbar.map((item) => (
          <div
            className="rounded-full transition-all duration-300 w-10 h-10
         flex items-center justify-center hover:bg-white/15 background-blur-sm "
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
