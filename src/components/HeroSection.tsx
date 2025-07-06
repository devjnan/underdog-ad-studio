
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 2px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-gray-900 px-6 py-2 rounded-full border border-gray-800 mb-8">
              <span className="text-sm text-gray-300">● Live • Creative Studio</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block">Creative</span>
            <span className="block relative">
              Excellence
              <div className="absolute -top-4 -right-8 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft extraordinary digital experiences that push boundaries and redefine what's possible in modern advertising.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 group">
              <Play className="w-6 h-6 mr-3" />
              View Our Work
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300">
              Start Project
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
          
          {/* Minimalist stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "150+", label: "Projects" },
              { number: "25", label: "Awards" },
              { number: "12", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
