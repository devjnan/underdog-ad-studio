
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
              alt="Underdog Ads Logo" 
              className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Discover the
            <span className="text-orange-500 block relative">
              Best Marketing
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform scale-x-0 animate-[scale-x-100_1s_ease-out_2s_forwards]"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Explore award-winning campaigns, innovative designs, and creative excellence 
            from the world's most talented marketing teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Play className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg hover:scale-105 transition-all duration-200">
              Submit Your Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
