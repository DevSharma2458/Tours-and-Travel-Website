import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed top-0 bottom-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-300 md:hidden rounded-r-xl shadow-lg ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      {/* User Info */}
      <div>
        <div className="flex items-center gap-3">
          <FaUserCircle size={50} className="text-gray-700 dark:text-gray-300" />
          <div>
            <h1 className="text-lg font-semibold">Hello User</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Premium user
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="space-y-5 text-lg font-medium">
            {NavbarLinks.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="block hover:text-blue-500 transition-colors"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Made with <span className="text-red-500">❤</span> by{" "}
        <a
          href="https://dilshad-ahmed.github.io/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-blue-500"
        >
          Dev
        </a>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
