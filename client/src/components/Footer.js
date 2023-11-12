import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-blue-600 w-full shadow dark:bg-gray-900  text-yellow-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <IoFastFoodOutline color="yellow" size={35} />
            <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-700">
              Michelin<span className="text-yellow-300">-Food</span>
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium   sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center font-semibold">
          {new Date().getFullYear()}
          -Michelin-Food All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;