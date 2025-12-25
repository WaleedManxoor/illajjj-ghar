import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const doctorId = searchParams.get('id');

  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    reason: "",
    type: "In-Person" // Default option
  });

  // Example: Find doctor details (In a real app, you'd fetch this from an API)
  const doctorName = "Dr. Hamza Ali"; // Placeholder - you can pass name via query params too

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing appointments or empty array
    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    
    const newAppointment = {
      ...bookingData,
      id: Date.now(),
      doctorId: doctorId,
      doctorName: doctorName,
      status: "Confirmed"
    };

    // Save to local storage
    localStorage.setItem("appointments", JSON.stringify([...existingAppointments, newAppointment]));

    alert(`Appointment confirmed with ${doctorName} on ${bookingData.date}`);
    navigate("/profile"); // Redirect to profile to see the appointment
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header */}
        <div className="bg-[#8bc34a] p-8 text-white text-center">
          <h2 className="text-3xl font-extrabold italic">Book Appointment</h2>
          <p className="opacity-90 mt-2">Secure your slot with our specialist</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Select Date</label>
              <input 
                type="date" 
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8bc34a]"
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
              />
            </div>

            {/* Time Picker */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400">Select Time</label>
              <select 
                required
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8bc34a]"
                onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
              >
                <option value="">Choose Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:30 PM">04:30 PM</option>
              </select>
            </div>
          </div>

          {/* Appointment Type */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400">Consultation Type</label>
            <div className="flex gap-4">
              {["In-Person", "Video Call"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setBookingData({...bookingData, type: t})}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all border ${
                    bookingData.type === t 
                    ? "bg-[#8bc34a] text-white border-[#8bc34a]" 
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Reason for Visit */}
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400">Reason / Symptoms</label>
            <textarea 
              placeholder="Briefly describe your health concern..."
              rows="3"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#8bc34a]"
              onChange={(e) => setBookingData({...bookingData, reason: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-[#8bc34a] transition-all shadow-lg active:scale-95 uppercase tracking-widest"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}