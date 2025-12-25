import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("storage")); 
      navigate("/profile");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-8">
      
      {/* CHANGES MADE:
          - max-w-[340px] on very small screens, max-w-md on desktop.
          - p-5 on mobile instead of p-6/p-10.
          - space-y-5 instead of space-y-8 to keep it compact.
      */}
      <div className="w-full max-w-[340px] sm:max-w-md space-y-5 sm:space-y-8 bg-white p-5 sm:p-10 rounded-2xl shadow-xl border-t-8 border-[#8bc34a]">
        
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            Access your dashboard
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div className="space-y-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
                ✉️
              </span>
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-700" 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-sm">
                🔒
              </span>
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className="w-full pl-9 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8bc34a] focus:border-transparent outline-none transition-all text-sm sm:text-base text-gray-700" 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button type="button" className="text-[10px] sm:text-xs font-semibold text-[#8bc34a] hover:text-green-700">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#8bc34a] text-white py-3 rounded-xl font-bold text-md sm:text-lg hover:bg-green-700 transition-all active:scale-[0.98] shadow-md uppercase"
          >
            Login
          </button>
        </form>

        <div className="text-center pt-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-600">
            New here?{" "}
            <Link 
              to="/signup" 
              className="text-[#8bc34a] font-bold hover:underline decoration-2 underline-offset-4"
            >
              Sign Up Free
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