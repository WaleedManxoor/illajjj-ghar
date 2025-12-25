import React, { useState } from 'react';

// Data Generator for 100+ Doctors
const generateDoctors = () => {
  const specialties = [
    { name: "General Physician", icon: "🩺" },
    { name: "Gynecologist", icon: "🤰" },
    { name: "Dermatologist", icon: "✨" },
    { name: "Pediatrician", icon: "👶" },
    { name: "Neurologist", icon: "🧠" },
    { name: "Gastroenterologist", icon: "🧪" }
  ];
  
  return Array.from({ length: 120 }, (_, i) => {
    const spec = specialties[i % specialties.length];
    return {
      id: i + 1,
      name: `Dr. ${["Hamza", "Ayesha", "Waleed", "Zainab", "Bilal", "Sana"][i % 6]} ${i + 1}`,
      specialty: spec.name,
      icon: spec.icon,
      experience: `${(i % 12) + 3} Years`,
      fees: `${800 + (i % 15) * 100} PKR`,
      contact: `+92-321-${5000000 + i}`,
      image: `https://i.pravatar.cc/150?u=doc${i}`,
      available: i % 3 === 0 ? "Available Today" : "Next Available: Tomorrow"
    };
  });
};

const allDoctors = generateDoctors();
const categories = [
  "All", "General Physician", "Gynecologist", "Dermatologist", 
  "Pediatrician", "Neurologist", "Gastroenterologist"
];

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = allDoctors.filter(doc => 
    (selectedCategory === "All" || doc.specialty === selectedCategory) &&
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white border-b px-6 py-8">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Find a Specialist</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR CATEGORIES */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider text-sm">Categories</h2>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all text-left border ${
                    selectedCategory === cat 
                    ? "bg-[#8bc34a] text-white border-[#8bc34a] shadow-md shadow-green-100" 
                    : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* DOCTORS LIST */}
        <div className="w-full lg:w-3/4">
          <div className="mb-4 text-gray-500 text-sm font-medium">
            Showing <span className="text-[#8bc34a] font-bold">{filteredDoctors.length}</span> doctors in <span className="italic">{selectedCategory}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-xl transition-all group overflow-hidden relative">
                
                {/* Availability Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    doc.available.includes("Today") ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                  }`}>
                    {doc.available}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <img src={doc.image} alt="" className="w-16 h-16 rounded-2xl object-cover border-2 border-green-50" />
                  <div>
                    <h3 className="font-extrabold text-gray-800 group-hover:text-[#8bc34a] transition-colors">{doc.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span>{doc.icon}</span> {doc.specialty}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 py-3 border-t border-b border-dashed border-gray-100 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 italic">Exp: {doc.experience}</span>
                    <span className="font-bold text-gray-700">Fee: {doc.fees}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium">📞 {doc.contact}</p>
                </div>

                <button 
                  onClick={() => window.location.href = `/booking?id=${doc.id}`}
                  className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-[#8bc34a] transition-all active:scale-95"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border">
              <p className="text-gray-400">No doctors found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}