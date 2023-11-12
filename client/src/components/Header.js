import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import scrollTo from "gatsby-plugin-smoothscroll";

const Header = () => {
  return (
    <nav className="bg-yellow-300 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <IoFastFoodOutline color="blue" size={35} />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-700">
            Michelin<span className="text-blue-700">-Food</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-3 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"
            onClick={() => scrollTo("#info-form")}
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
