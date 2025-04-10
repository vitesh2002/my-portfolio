import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Namburu sai srinivas vitesh</h1>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 dark:hover:text-blue-300">{item}</a>
              </li>
            ))}
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
