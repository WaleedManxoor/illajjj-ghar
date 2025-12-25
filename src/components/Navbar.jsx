import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to check login status
  const checkLoginStatus = () => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(status);
  };

  useEffect(() => {
    // Check status on mount
    checkLoginStatus();

    // Listen for the custom "storage" event we created in the Login page
    window.addEventListener("storage", checkLoginStatus);

    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto invert" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-gray-900 text-lg font-extrabold uppercase tracking-tight">
          <li><Link to="/" className="hover:text-green-700">Home</Link></li>
          
          {/* CONDITIONAL LINKS */}
          {!isLoggedIn ? (
            <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
          ) : (
            <li><Link to="/doctors" className="hover:text-green-700">Doctors</Link></li>
          )}
        </ul>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-gray-900 font-extrabold text-lg hover:text-green-700 px-4">
                LOGIN
              </Link>
              <button 
                onClick={() => navigate('/login')}
                className="bg-[#8bc34a] text-white px-6 py-3 rounded-md font-extrabold text-lg hover:bg-green-700 shadow-sm"
              >
                Book Appointment
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
               <Link to="/profile" className="font-bold text-green-700 hover:underline">My Profile</Link>
               <button 
                onClick={handleLogout}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-bold text-lg hover:bg-red-100 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-800">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="flex flex-col p-6 gap-4 font-extrabold uppercase text-center">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          
          {!isLoggedIn ? (
            <>
              <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <hr />
              <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
              <button onClick={() => {navigate('/login'); setIsOpen(false)}} className="bg-[#8bc34a] text-white p-3 rounded-md">Book Appointment</button>
            </>
          ) : (
            <>
              <li><Link to="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link></li>
              <hr />
              <li><Link to="/profile" onClick={() => setIsOpen(false)} >My Profile</Link></li>
              <button onClick={handleLogout} className="text-red-500">Logout</button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}