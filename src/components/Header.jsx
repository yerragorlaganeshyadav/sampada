import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div
      className="w-full h-full bg-[#003f5c] flex-col"
      data-testId="header-section"
    >
      <div className="flex flex-row items-center">
        <div className="mt-2">
          <HamburgerMenu />
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-yellow-500 tracking-wide uppercase">
          Sampada
        </div>
      </div>
    </div>
  );
};

export default Header;
