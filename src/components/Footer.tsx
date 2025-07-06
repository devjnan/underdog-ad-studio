
import { Heart, Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300 rounded-full border-2 border-purple-400 p-1"
              />
              <div>
                <h5 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  UNDERDOG ADS
                </h5>
                <p className="text-purple-300 text-sm">Creative Excellence Hub</p>
              </div>
            </div>
            <p className="text-purple-200 text-lg leading-relaxed mb-6 max-w-md">
              Empowering creative minds worldwide to showcase their brilliance and connect with opportunities that matter.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, color: "hover:text-blue-400" },
                { icon: Instagram, color: "hover:text-pink-400" },
                { icon: Linkedin, color: "hover:text-blue-500" },
                { icon: Github, color: "hover:text-gray-400" },
                { icon: Mail, color: "hover:text-green-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-purple-300 ${social.color} transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h6 className="font-bold text-white mb-6 text-lg">Discover</h6>
            <ul className="space-y-3">
              {[
                "Featured Projects",
                "Top Creators", 
                "Award Winners",
                "Trending Work",
                "New Releases"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h6 className="font-bold text-white mb-6 text-lg">Community</h6>
            <ul className="space-y-3">
              {[
                "Join Network",
                "Creator Program",
                "Submit Work",
                "Awards System",
                "Help Center"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm mb-4 md:mb-0">
            &copy; 2024 Underdog Ads. Crafted with <Heart className="inline w-4 h-4 text-red-400 mx-1" /> for creators worldwide.
          </p>
          <div className="flex space-x-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <a key={index} href="#" className="text-purple-300 hover:text-white transition-colors duration-300">
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
