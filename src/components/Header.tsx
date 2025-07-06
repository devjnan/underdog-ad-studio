
import { Button } from "@/components/ui/button";
import { Search, Menu, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-12 h-12 object-contain rounded-full border-2 border-white p-1 hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                UNDERDOG ADS
              </h1>
              <p className="text-xs text-gray-400">Creative Studio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Studio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Awards
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-gray-900 border border-gray-700 rounded-full py-3 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 w-64"
              />
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              <User className="w-4 h-4 mr-2" />
              Get Started
            </Button>
            <Menu className="md:hidden w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
