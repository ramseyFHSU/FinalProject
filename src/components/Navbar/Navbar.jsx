import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import SearchBar from "../SearchBar/SearchBar"; // Uncomment if SearchBar is ready to use

const Navbar = () => {
  const navList = (
    <ul className="flex space-x-4 md:space-x-6 text-custom-mauve font-semibold text-sm md:text-base">
      <li>
        <Link
          to={"/"}
          className="hover:text-custom-peach transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/allProducts"}
          className="hover:text-custom-peach transition-colors duration-200"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          to={"/signUp"}
          className="hover:text-custom-peach transition-colors duration-200"
        >
          SignUp
        </Link>
      </li>
      <li>
        <Link to={"/user-dashboard"}>Kamal</Link> {/* User-Dashboard */}
      </li>
      <li>
        <Link to={"/admin-dashboard"}>Admin</Link> {/* Admin Dashboard */}
      </li>
      <li>
        <Link
          to={"/cart"}
          className="hover:text-custom-peach transition-colors duration-200"
        >
          Cart
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-custom-purple-dark sticky top-0 shadow-md">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between items-center py-2 md:py-4">
        <div className="text-left">
          <Link to={"/"}>
            <h2 className="font-bold text-gray-800 text-lg md:text-2xl">STS</h2>
          </Link>
        </div>
        <div>{navList}</div>
        <div className="flex items-center space-x-4">
          {/* Uncomment the following line if SearchBar is ready to use */}
          {/* <SearchBar /> */}
          <Link to={"/search"} className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to={"/profile"} className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to={"/cart"} className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
