
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
              alt="Underdog Ads Logo" 
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">UNDERDOG ADS</h1>
              <p className="text-xs text-gray-500">Marketing Excellence</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Projects</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Agencies</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Awards</a>
            <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Directory</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                className="bg-gray-100 border-0 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-300"
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 transition-all duration-200">
              Submit Project
            </Button>
            <Menu className="md:hidden w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
