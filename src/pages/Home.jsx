import { useState } from "react";
import heroImage from "../assets/hero.png"; 
import myPhoto from "../assets/my-photo.png"; 

export default function Home() {
  // --- DOCTOR DATA ---
  const allDoctors = [
    { id: 1, name: "Dr. Sarah Khan", exp: "8 years", specialty: "General Physician", rating: 4.9, img: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg" },
    { id: 2, name: "Dr. Ahmed Raza", exp: "10 years", specialty: "Dermatologist", rating: 4.8, img: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg" },
    { id: 3, name: "Dr. Zainab Ali", exp: "5 years", specialty: "Pediatrician", rating: 4.7, img: "https://xsgames.co/randomusers/assets/avatars/female/10.jpg" },
    { id: 4, name: "Dr. Bilal Sheikh", exp: "12 years", specialty: "Cardiologist", rating: 5.0, img: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg" },
    { id: 5, name: "Dr. Maria Sunal", exp: "7 years", specialty: "Gynaecologist", rating: 4.6, img: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg" },
    { id: 6, name: "Dr. Usman Pirzada", exp: "15 years", specialty: "Neurologist", rating: 4.9, img: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg" },
  ];

  // --- TESTIMONIAL DATA ---
  const testimonials = [
    { id: 1, name: "Mr. Waleed Manzoor", role: "CEO of Tech Solutions Pvt Ltd", text: "Illajjj Ghar has completely changed how I access healthcare. The speed of connection and the quality of doctors available online is truly impressive.", img: myPhoto },
    { id: 2, name: "Mr. Javed Ahmed", role: "CEO of Jubilee Life", text: "One thing which worked out very well is the application itself. We have never had any complaints regarding doctors availability.", img: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg" },
    { id: 3, name: "Ayesha Malik", role: "Mother of Two", text: "The pediatrician service is a lifesaver. I was able to consult a doctor at 2 AM when my son had a high fever.", img: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg" }
  ];

  const [docIndex, setDocIndex] = useState(0);
  // Show 3 doctors on desktop, 1 on mobile
  const [testIndex, setTestIndex] = useState(0);

  const visibleDoctors = allDoctors.slice(docIndex, docIndex + 3);

  const nextTestimonial = () => setTestIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  const prevTestimonial = () => setTestIndex((prev) => (prev - 1 < 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#f2f9e9] min-h-[70vh] md:min-h-[80vh] flex items-center px-4 sm:px-10 lg:px-20 py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-700 leading-tight mb-6">
              Connect with best<br className="hidden sm:block" /> 
              doctor online within <br /><span className="text-[#8bc34a]">60 seconds</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Connect to the best doctors in Pakistan providing quality and affordable 
              healthcare services in less than 60 secs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <select className="w-full p-4 pl-10 border-2 border-green-200 rounded-full bg-white outline-none focus:border-green-500 appearance-none">
                  <option>Select Problem</option>
                </select>
                <span className="absolute left-4 top-4 text-green-600">✚</span>
              </div>
              <div className="relative flex-1">
                <select className="w-full p-4 pl-10 border-2 border-green-200 rounded-full bg-white outline-none focus:border-green-500 appearance-none">
                  <option>Select Specialist</option>
                </select>
                <span className="absolute left-4 top-4 text-green-600">✚</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-[#a2d149] text-white px-10 py-4 rounded-full font-black text-xl hover:bg-green-700 transition-all shadow-md uppercase tracking-wider">
              Find Now
            </button>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <img src={heroImage} alt="Online Doctor" className="w-full h-auto max-w-md lg:max-w-full mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-4 sm:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">Our Medical Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {[
            { title: "General Physician", desc: "Common illnesses & general checkups" },
            { title: "Dermatologist", desc: "Skin, hair & allergy treatments" },
            { title: "Pediatrician", desc: "Child health & care specialists" },
            { title: "Others ...", desc: "Specialized care & more" }
          ].map((service, index) => (
            <div key={index} className="group border-2 border-green-100 rounded-xl p-8 text-center shadow-sm hover:bg-[#8bc34a] transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-green-50">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#8bc34a] py-16 px-4 sm:px-10 lg:px-20 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Convenient accessibility to healthcare</h2>
            <p className="text-green-50 opacity-90 max-w-2xl mx-auto">One-stop telemedicine solution for your primary health issues.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 order-2 lg:order-1">
              {[
                { title: "Instant Access", desc: "Connect with experts based on symptoms." },
                { title: "Saved History", desc: "All medical records in one secure place." },
                { title: "Home Samples", desc: "Order Labs and Medicines at your doorstep." },
                { title: "24/7 Consult", desc: "Start a video call in less than 60 seconds." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl text-white">✔</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-green-50 opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="relative border-[8px] border-gray-800 rounded-[2.5rem] h-[450px] w-[230px] bg-white shadow-2xl overflow-hidden mx-auto">
                <div className="bg-gray-800 h-6 w-28 mx-auto rounded-b-xl mb-4"></div>
                <div className="p-4 space-y-4">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-28 w-full bg-green-100 rounded-lg"></div>
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-10 w-full bg-[#8bc34a] rounded-full mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONALS SECTION */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Meet our Professionals</h2>
          </div>
          <div className="relative flex items-center group">
            <button onClick={() => setDocIndex(p => Math.max(0, p - 3))} className="absolute left-0 z-10 p-2 bg-white shadow-md rounded-full sm:p-3 hover:bg-green-50 transition-colors">❮</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8 md:px-12">
              {visibleDoctors.map((doc) => (
                <div key={doc.id} className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
                  <img src={doc.img} className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-green-50" alt={doc.name} />
                  <h3 className="text-lg font-bold text-gray-800">{doc.name}</h3>
                  <p className="text-sm text-[#8bc34a] font-semibold">{doc.exp}</p>
                  <p className="text-sm text-gray-500 h-8 mt-1">{doc.specialty}</p>
                  <hr className="w-full my-4" />
                  <p className="text-lg font-bold">{doc.rating} ★</p>
                  <p className="text-xs text-gray-400">Patients Reviews</p>
                </div>
              ))}
            </div>
            <button onClick={() => setDocIndex(p => (p + 3 >= allDoctors.length ? 0 : p + 3))} className="absolute right-0 z-10 p-2 bg-white shadow-md rounded-full sm:p-3 hover:bg-green-50 transition-colors">❯</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden px-4">
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-12 italic">Testimonials</h2>
          <div className="max-w-3xl mx-auto flex items-center gap-2 sm:gap-6">
            <button onClick={prevTestimonial} className="text-2xl text-black hover:text-green-600">❮</button>
            <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-10">
              <img src={testimonials[testIndex].img} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-xl border-4 border-white mb-6" alt="User" />
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 italic">"{testimonials[testIndex].text}"</p>
              <h4 className="font-extrabold text-gray-800">{testimonials[testIndex].name}</h4>
              <p className="text-[#8bc34a] text-xs font-bold uppercase tracking-widest mt-1">{testimonials[testIndex].role}</p>
            </div>
            <button onClick={nextTestimonial} className="text-2xl text-black hover:text-green-600">❯</button>
          </div>
        </div>
      </section>
    </div>
  );
}