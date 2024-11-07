import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1 focus:outline-none"
      >
        <span
          className={`block w-8 h-1 bg-yellow-500 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-yellow-500 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-yellow-500 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <nav className="absolute z-20 top-full left-0 w-[120px] bg-white shadow-lg p-4 space-y-2 mt-2">
          <button
            onClick={() => handleScrollToSection("home")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection("photos")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Photos
          </button>
          <button
            onClick={() => handleScrollToSection("services")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Services
          </button>
        </nav>
      )}
    </div>
  );
}

export default HamburgerMenu;
