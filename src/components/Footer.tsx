
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-12 h-12 object-contain rounded-full border-2 border-white p-1"
              />
              <div>
                <h5 className="text-2xl font-bold">
                  UNDERDOG ADS
                </h5>
                <p className="text-gray-400 text-sm">Creative Studio</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              We're a creative studio that believes in the power of design to transform businesses and inspire audiences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">hello@underdogads.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
          
          <div>
            <h6 className="font-bold text-white mb-6 text-lg">Services</h6>
            <ul className="space-y-3">
              {[
                "Brand Identity",
                "Web Design", 
                "Digital Marketing",
                "Video Production",
                "Consulting"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="font-bold text-white mb-6 text-lg">Company</h6>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Process",
                "Careers",
                "Contact",
                "Blog"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2024 Underdog Ads. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
