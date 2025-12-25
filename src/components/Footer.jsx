import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 px-6 md:px-20 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main Grid: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <img 
              src= {logo}
              alt="Illajjj Ghar Logo" 
              className="w-40 h-auto invert" // Invert logo to white if it's dark
            />
            <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left">
              ILLAJJJ GHAR is Pakistan's leading telemedicine platform, connecting patients with top doctors in under 60 seconds.
            </p>
            <div className="flex gap-4 mt-2">
              {/* Social Icons */}
              {['f', 't', 'in'].map((social) => (
                <span 
                  key={social}
                  className="w-8 h-8 bg-[#8bc34a] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors font-bold"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Find a Doctor</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Our Services</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">How it Works</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#8bc34a] cursor-pointer transition-colors">Help Center</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-3">
                <span className="text-[#8bc34a]">📍</span>
                123 Healthcare Plaza, Karachi, Pakistan
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-[#8bc34a]">📞</span>
                +92-300-1234567
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3">
                <span className="text-[#8bc34a]">✉️</span>
                support@illajjjghar.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 ILLAJJJ GHAR. All rights reserved.</p>
          <p className="mt-1">Managed by <span className="text-[#8bc34a] font-semibold">Mr. Waleed Manzoor</span></p>
        </div>
      </div>
    </footer>
  );
}