import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/best-places" },
];

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] hidden sm:block">
            <div className="flex items-center justify-between text-sm">
              <p>20% off on next booking</p>
              <p>Contact: +91 8306946005</p>
            </div>
          </div>
        </div>

        {/* Navbar Main */}
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="TravelloGo Logo" className="h-16" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((item) => (
                  <li key={item.name} className="py-4">
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `transition-colors hover:text-primary ${
                          isActive ? "text-primary font-semibold" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}

                {/* Dropdown Menu */}
                <li className="group relative cursor-pointer">
                  <button
                    className="flex h-[72px] items-center gap-[2px]"
                    aria-haspopup="true"
                  >
                    Quick Links
                    <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute -left-9 z-[9999] hidden w-[160px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            href={data.link}
                            className="block w-full rounded-md p-2 hover:bg-primary/20 transition-colors"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                onClick={handleOrderPopup}
              >
                Book Now
              </button>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-transform"
                    size={30}
                    aria-label="Close menu"
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-transform"
                    size={30}
                    aria-label="Open menu"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
