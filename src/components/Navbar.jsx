import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
              src={logo}
              alt="Illajjj Ghar Logo"
              className="h-12 md:h-16 w-auto cursor-pointer invert"
            />
          </a>
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden lg:flex gap-8 text-gray-900 text-lg font-extrabold uppercase tracking-tight">
          <li><a href="/" className="hover:text-green-700 transition-colors">Home</a></li>
          <li><a href="/services" className="hover:text-green-700 transition-colors">Services</a></li>
          <li><a href="/doctors" className="hover:text-green-700 transition-colors">Doctors</a></li>
        </ul>

        {/* DESKTOP ACTION BUTTONS (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <a href="/login" className="text-gray-900 font-extrabold text-lg hover:text-green-700 px-4">
                LOGIN
              </a>
              <button 
                onClick={() => window.location.href = '/login'}
                className="bg-[#8bc34a] text-white px-6 py-3 rounded-md font-extrabold text-lg hover:bg-green-700 transition-colors shadow-sm"
              >
                Book Appointment
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
               <span className="font-bold text-green-700">Hi, User!</span>
               <button className="bg-[#8bc34a] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-green-700 shadow-sm">
                My Appointments
              </button>
            </div>
          )}
        </div>

        {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none p-2"
          >
            {/* Simple SVG for Hamburger Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4 text-gray-900 text-lg font-extrabold uppercase">
          <li><a href="/" onClick={toggleMenu} className="block hover:text-green-700">Home</a></li>
          <li><a href="/services" onClick={toggleMenu} className="block hover:text-green-700">Services</a></li>
          <li><a href="/doctors" onClick={toggleMenu} className="block hover:text-green-700">Doctors</a></li>
          <li><a href="/contact" onClick={toggleMenu} className="block hover:text-green-700">Contact</a></li>
          <hr className="my-2" />
          {!isLoggedIn ? (
            <div className="flex flex-col gap-4">
              <a href="/login" onClick={toggleMenu} className="text-gray-900 font-extrabold text-center py-2">LOGIN</a>
              <button 
                onClick={() => { toggleMenu(); window.location.href = '/login'; }}
                className="bg-[#8bc34a] text-white px-6 py-3 rounded-md font-extrabold text-lg"
              >
                Book Appointment
              </button>
            </div>
          ) : (
            <button className="bg-[#8bc34a] text-white px-6 py-3 rounded-md font-bold text-lg">
              My Appointments
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}