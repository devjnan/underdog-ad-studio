
import { Button } from "@/components/ui/button";
import { Search, Menu, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-12 h-12 object-contain rounded-full border-2 border-purple-400 p-1 hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                UNDERDOG ADS
              </h1>
              <p className="text-xs text-purple-300">Creative Excellence Hub</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-purple-200 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group">
              Showcase
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-purple-200 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group">
              Creators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-purple-200 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group">
              Awards
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-purple-200 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Discover amazing work..."
                className="bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-full py-3 pl-12 pr-6 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 w-64"
              />
            </div>
            <Button className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              <User className="w-4 h-4 mr-2" />
              Join Community
            </Button>
            <Menu className="md:hidden w-6 h-6 text-purple-200 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
