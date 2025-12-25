import React from 'react';

const services = [
  {
    title: "Online Consultation",
    desc: "Connect with certified doctors from the comfort of your home via video or audio chat in under 60 seconds.",
    icon: "📱",
  },
  {
    title: "Specialist Appointments",
    desc: "Book direct appointments with top specialists in Cardiology, Dermatology, Pediatrics, and more.",
    icon: "👨‍⚕️",
  },
  {
    title: "Electronic Prescriptions",
    desc: "Receive digital prescriptions instantly after your consultation, valid at all leading pharmacies.",
    icon: "📄",
  },
  {
    title: "Home Sample Collection",
    desc: "Book lab tests through our app and have our professionals collect samples right from your doorstep.",
    icon: "🩸",
  },
  {
    title: "Mental Health Support",
    desc: "Confidential and compassionate therapy sessions with experienced psychologists and psychiatrists.",
    icon: "🧠",
  },
  {
    title: "24/7 Emergency Care",
    desc: "Access to medical advice and urgent care coordination at any time of the day or night.",
    icon: "🚑",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-white py-16 px-6 border-b">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Medical <span className="text-[#8bc34a]">Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Illajjj Ghar provides a comprehensive digital healthcare ecosystem designed to bring 
            world-class medical expertise directly to your fingertips.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#8bc34a] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="text-[#8bc34a] font-bold hover:text-green-700 flex items-center gap-2 transition-colors">
                  Learn More <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#8bc34a] py-16 px-6 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to prioritize your health?</h2>
          <p className="text-xl mb-8 opacity-90">Book an appointment with our experts today.</p>
          <button 
            onClick={() => window.location.href = '/login'}
            className="bg-white text-[#8bc34a] px-10 py-4 rounded-full font-extrabold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}