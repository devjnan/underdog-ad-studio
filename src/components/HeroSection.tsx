
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-500/20 rounded-full blur-sm animate-bounce"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent block">
              Where Creativity
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent block relative">
              Meets Innovation
              <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-yellow-400 animate-spin" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover groundbreaking campaigns, revolutionary designs, and visionary creativity 
            from the world's most innovative marketing minds. Join the creative revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-6 text-xl font-bold border-0 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 group">
              <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Explore Universe
              <Zap className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-400 text-purple-200 hover:bg-purple-400/10 px-10 py-6 text-xl font-bold backdrop-blur-sm hover:border-pink-400 transform hover:scale-105 transition-all duration-300">
              Submit Masterpiece
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {[
              { number: "10K+", label: "Creatives" },
              { number: "50K+", label: "Projects" },
              { number: "200+", label: "Awards" },
              { number: "100+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-purple-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
