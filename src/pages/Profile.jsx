import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  
  // 1. Initialize user and appointment states
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem("appointments")) || []);
  const [isEditing, setIsEditing] = useState(false);
  
  // 2. Temporary state for medical fields
  const [tempData, setTempData] = useState({ 
    bloodGroup: "Not Set",
    weight: "Not Set",
    height: "Not Set",
    age: "Not Set",
    gender: "Not Set",
    phone: "Not Set",
    ...userData 
  });

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    }
  };

  const handleSave = () => {
    setUserData(tempData);
    localStorage.setItem("user", JSON.stringify(tempData));
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  const cancelAppointment = (id) => {
    if (window.confirm("Do you want to cancel this appointment?")) {
      const updatedApps = appointments.filter(app => app.id !== id);
      setAppointments(updatedApps);
      localStorage.setItem("appointments", JSON.stringify(updatedApps));
    }
  };

  if (!userData.name) return <div className="text-center mt-20 font-bold text-gray-500">No user data found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        
        {/* TOP PROFILE CARD */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-10 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-[#8bc34a] to-green-600 rounded-full flex items-center justify-center text-white text-3xl sm:text-5xl font-black shadow-lg shadow-green-100 shrink-0">
              {userData.name[0]}
            </div>
            <div className="text-center sm:text-left flex-1 min-w-0 w-full">
              {isEditing ? (
                <input 
                  className="text-xl sm:text-2xl font-bold border-b-2 border-[#8bc34a] outline-none w-full bg-transparent"
                  value={tempData.name}
                  onChange={(e) => setTempData({...tempData, name: e.target.value})}
                />
              ) : (
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 truncate">{userData.name}</h1>
              )}
              <p className="text-gray-400 font-medium text-sm sm:text-base">Patient ID: #IG-2025-001</p>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              {isEditing ? (
                <button onClick={handleSave} className="flex-1 sm:flex-none bg-[#8bc34a] text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:bg-green-700 transition-all text-sm">
                  Save Changes
                </button>
              ) : (
                <button onClick={() => setIsEditing(true)} className="flex-1 sm:flex-none text-[#8bc34a] border-2 border-[#8bc34a] px-6 py-2 rounded-xl font-bold hover:bg-[#8bc34a] hover:text-white transition-all text-sm">
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* MEDICAL DASHBOARD */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
                <span>📋</span> Medical Dashboard
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-6">
                <InfoField label="Full Name" value={userData.name} isEditing={isEditing} tempValue={tempData.name} onChange={(v) => setTempData({...tempData, name: v})} />
                <InfoField label="Email Address" value={userData.email} isEditing={isEditing} tempValue={tempData.email} onChange={(v) => setTempData({...tempData, email: v})} />
                <InfoField label="Phone Number" value={userData.phone || "Not Set"} isEditing={isEditing} tempValue={tempData.phone} onChange={(v) => setTempData({...tempData, phone: v})} />
                <InfoField label="Age" value={userData.age || "Not Set"} isEditing={isEditing} tempValue={tempData.age} onChange={(v) => setTempData({...tempData, age: v})} />
                <InfoField label="Blood Group" value={userData.bloodGroup || "Not Set"} isEditing={isEditing} tempValue={tempData.bloodGroup} onChange={(v) => setTempData({...tempData, bloodGroup: v})} />
                <InfoField label="Gender" value={userData.gender || "Not Set"} isEditing={isEditing} tempValue={tempData.gender} onChange={(v) => setTempData({...tempData, gender: v})} />
                <InfoField label="Weight (kg)" value={userData.weight || "Not Set"} isEditing={isEditing} tempValue={tempData.weight} onChange={(v) => setTempData({...tempData, weight: v})} />
                <InfoField label="Height (ft/cm)" value={userData.height || "Not Set"} isEditing={isEditing} tempValue={tempData.height} onChange={(v) => setTempData({...tempData, height: v})} />
              </div>
            </div>

            {/* UPCOMING APPOINTMENTS */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
                <span>📅</span> Upcoming Appointments
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                {appointments.length > 0 ? (
                  appointments.map((app) => (
                    <div key={app.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-xl sm:text-2xl shrink-0">
                          {app.type === "Video Call" ? "💻" : "🏥"}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800 text-sm sm:text-base truncate">{app.doctorName || "Specialist Doctor"}</p>
                          <p className="text-[11px] sm:text-xs text-gray-500 font-medium">{app.date} • {app.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-3 md:pt-0">
                        <span className="text-[10px] font-black bg-green-100 text-green-600 px-3 py-1 rounded-full uppercase">
                          {app.status || "Confirmed"}
                        </span>
                        <button 
                          onClick={() => cancelAppointment(app.id)}
                          className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 text-gray-400 italic text-sm">
                    No appointments booked yet. 
                    <button onClick={() => navigate('/doctors')} className="text-[#8bc34a] ml-1 font-bold hover:underline">Book Now</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 text-white shadow-xl">
              <h3 className="font-bold mb-3 flex items-center gap-2"><span>💬</span> Help Center</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">Having trouble with your profile or medical records? Connect with us.</p>
              <button className="w-full py-3 bg-[#8bc34a] text-white rounded-xl font-bold text-sm hover:bg-green-700 transition-all">
                Live Support
              </button>
              <button onClick={handleLogout} className="w-full mt-4 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-red-400 transition-colors">
                Logout Dashboard
              </button>
            </div>

            <div className="bg-[#8bc34a] rounded-2xl sm:rounded-3xl p-6 text-white shadow-lg hidden sm:block">
                <h3 className="font-bold mb-2 text-sm sm:text-base">Health Tip</h3>
                <p className="text-[11px] sm:text-xs opacity-90 leading-relaxed">Drinking 8 glasses of water a day helps maintain your energy levels and keeps your skin glowing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// REUSABLE FIELD COMPONENT
function InfoField({ label, value, isEditing, tempValue, onChange }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{label}</p>
      {isEditing ? (
        <input 
          className="w-full border-b border-gray-200 py-1 focus:border-[#8bc34a] outline-none text-gray-800 font-medium bg-transparent text-sm sm:text-base"
          value={tempValue}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <p className="text-gray-800 font-bold text-base sm:text-lg break-words">{value}</p>
      )}
    </div>
  );
}