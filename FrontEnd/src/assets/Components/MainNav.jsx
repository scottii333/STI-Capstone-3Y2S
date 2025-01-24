import { useState } from "react";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border flex justify-between items-center h-16 px-4 md:px-8 relative">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          className="flex flex-col justify-between w-8 h-6 cursor-pointer focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-black rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Navigation Links (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:flex space-x-8">
        <div>Admission</div>
        <div>Log-In</div>
      </div>

      {/* Dropdown Menu (visible when hamburger is toggled on small screens) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <div>Admission</div>
          <div>Log-In</div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
