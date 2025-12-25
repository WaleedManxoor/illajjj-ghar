import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!userData) return <div className="text-center mt-20">No user data found. Please sign up.</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-[#8bc34a] rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {userData.name[0]}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{userData.name}</h1>
            <p className="text-gray-500">Patient ID: #IG-2025</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
          <div>
            <p className="text-sm text-gray-400">Email Address</p>
            <p className="text-lg font-medium">{userData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Account Status</p>
            <p className="text-lg font-medium text-green-600">● Active</p>
          </div>
        </div>

        <button onClick={handleLogout} className="mt-10 text-red-500 font-bold hover:underline">
          Logout from Account
        </button>
      </div>
    </div>
  );
}