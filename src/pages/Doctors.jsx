import React, { useState } from 'react';

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
      name: `Dr. ${["Hamza", "Muneeb", "Talha", "Arsalan", "Bilal", "Hamad"][i % 6]} ${i + 1}`,
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
const categories = ["All", "General Physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Gastroenterologist"];

export default function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = allDoctors.filter(doc => 
    (selectedCategory === "All" || doc.specialty === selectedCategory) &&
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER SECTION */}
      <div className="bg-white border-b px-4 py-6 md:py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Find a Specialist</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 flex flex-col lg:flex-row gap-6 md:gap-8">
        
        {/* SIDEBAR / CATEGORY NAV */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-24">
            <h2 className="hidden lg:block text-xs font-black text-gray-400 uppercase tracking-widest mb-4 ml-2">Categories</h2>
            
            {/* Horizontal scroll on mobile, Vertical list on desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap lg:whitespace-normal px-5 py-3 rounded-2xl text-sm font-bold transition-all text-left border flex-shrink-0 lg:flex-shrink-1 ${
                    selectedCategory === cat 
                    ? "bg-[#8bc34a] text-white border-[#8bc34a] shadow-lg shadow-green-100" 
                    : "bg-white text-gray-600 border-gray-100 hover:border-green-200 hover:bg-green-50/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* DOCTOR LISTING */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6 flex justify-between items-center px-2">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-tight">
              Found <span className="text-[#8bc34a]">{filteredDoctors.length}</span> Results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-3xl border border-gray-100 p-5 hover:shadow-2xl hover:shadow-gray-200/50 transition-all group relative">
                
                {/* Availability Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter ${
                    doc.available.includes("Today") ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                  }`}>
                    {doc.available}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <img src={doc.image} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-4 border-gray-50" />
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-lg shadow-sm text-lg">
                      {doc.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-[#8bc34a] transition-colors truncate">{doc.name}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">{doc.specialty}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-5 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase">Experience</p>
                    <p className="text-sm font-bold text-gray-700">{doc.experience}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Fees</p>
                    <p className="text-sm font-bold text-[#8bc34a]">{doc.fees}</p>
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = `/booking?id=${doc.id}`}
                  className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#8bc34a] transition-all active:scale-95 shadow-lg shadow-gray-200"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[40px] border border-dashed border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-gray-400 font-bold">We couldn't find any doctors matching your search.</p>
              <button 
                onClick={() => {setSelectedCategory("All"); setSearchTerm("")}}
                className="mt-4 text-[#8bc34a] font-black uppercase text-xs hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}