import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import phone from "../../assets/icons/call.svg";
import book from "../../assets/icons/Book.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-gray-200 fixed top-0 left-0 w-full z-50 shadow-[0_1px_0_#e5e9f2]">
      <div className="max-w-[1280px] flex flex-wrap items-center justify-between mx-auto p-4 xl:px-0">
        <div className="flex items-center gap-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              className="w-28 h-20"
              alt="Farobiy IT Academy Logo"
            />
          </Link>

          <Link
            to="our-course"
            smooth={true}
            duration={500}
            className="flex gap-2 px-7 py-4 cursor-pointer text-primary bg-bgCard rounded-2xl hover:scale-105 transition duration-300"
          >
            <span className="text-base font-normal">Kurslar</span>
            <img src={book} alt="" />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="navBar-dropdown">
            <li>
              <Link
                to="our-teachers"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
              >
                Bizning ustozlarimiz
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="navLink"
                activeClass="active"
                spy={true}
              >
                Biz haqimizda
              </Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("language")}
              onMouseLeave={handleMouseLeave}
              className="relative hidden lg:block border border-bgCard p-4 rounded-2xl"
            >
              <button
                onClick={() => handleMouseEnter("language")}
                className="flex items-center text-sm text-primary"
              >
                UZ
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {activeDropdown === "language" && (
                <div
                  className={`absolute left-0 top-[54px] z-50 bg-white rounded-2xl border border-bgCard`}
                >
                  <ul className="text-sm text-primary">
                    <li>
                      <Link
                        to="russian"
                        className="block px-6 py-2 hover:bg-secondary cursor-pointer rounded-2xl"
                      >
                        UZ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="english"
                        className="block px-6 py-2 hover:bg-secondary cursor-pointer rounded-2xl"
                      >
                        RU
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="tel:+998946408356"
                className="flex gap-2 px-7 py-4 cursor-pointer text-primary bg-bgCard rounded-2xl hover:scale-105 transition duration-300"
              >
                <img src={phone} alt="" />
                <span className="text-base font-normal">+998 94 6408356</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
