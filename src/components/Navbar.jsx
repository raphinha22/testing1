import React, { useEffect, useState } from "react";
import navItems from "./navbarr";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isSticky, setIsSticky] = useState();

  //set toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);      
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-[gold] duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#">
            <span className="text-[#263238]">NEXCENT</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => {
              return (
                <Link
                  to={path}
                  spy={true}
                  key={path}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray900 hover:text-branPrimary first:font-medium"
                >
                  {link}
                </Link>
              );
            })}
          </ul>

          <div className={`space-y-4 px-4 mt-16 py-7 bg-branPrimary ${isMenuOpen ? "block fixed top-20 left-0 right-0" : "hidden"}`}>
            {navItems.map(({ link, path }) => {
              return (
                <Link
                  to={path}
                  spy={true}
                  key={path}
                  smooth={true}
                  offset={-100}
                  className="block text-base text-gray900 hover:text-branPrimary first:font-medium"
                >
                  {link}
                </Link>
              );
            })}
          </div>

          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="#"
              className="hidden lg:flex items-center text-branPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-branPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray">
              Sign up
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGray focus:outline-none focus:text-gray-500">
              {
                isMenuOpen? (<FaXmark className="h-6 w-6"/>) : (<FaBars className="h-6 w-6"/>)
              }
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
