import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-8">
      
      {/* - max-w-[340px] for a clean look on mobile
          - sm:max-w-md for tablets/desktops
          - p-5 for mobile, p-10 for larger screens
      */}
      <div className="w-full max-w-[340px] sm:max-w-md space-y-5 sm:space-y-8 bg-white p-5 sm:p-10 rounded-2xl shadow-xl border-t-8 border-[#8bc34a]">
        
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
            Create Account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Join Pakistan's top healthcare network
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <div className="space-y-3">
            {/* Name Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
                👤
              </span>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-700" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
                ✉️
              </span>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-700" 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
                🔒
              </span>
              <input 
                type="password" 
                placeholder="Create Password" 
                required 
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-700" 
                onChange={(e) => setFormData({...formData, password: e.target.value})} 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#8bc34a] text-white py-3 rounded-xl font-bold text-md sm:text-lg hover:bg-green-700 transition-all active:scale-[0.98] shadow-md uppercase tracking-wide mt-2"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              to="/login" 
              className="text-[#8bc34a] font-bold hover:underline decoration-2 underline-offset-4"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <Link to="/" className="mt-6 text-gray-400 text-xs hover:text-gray-600 transition-colors">
        ← Back to Homepage
      </Link>
    </div>
  );
}