
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Video, 
  Camera, 
  Headphones,
  Gamepad2,
  Globe,
  Zap,
  Sparkles
} from "lucide-react";

const CreativeCategories = () => {
  const categories = [
    {
      icon: Palette,
      title: "Brand Design",
      count: "2,847",
      color: "from-pink-500 to-rose-500",
      description: "Visual identity & branding"
    },
    {
      icon: Monitor,
      title: "Web Design",
      count: "3,291",
      color: "from-blue-500 to-cyan-500", 
      description: "Digital experiences & interfaces"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      count: "1,956",
      color: "from-green-500 to-emerald-500",
      description: "iOS & Android applications"
    },
    {
      icon: Video,
      title: "Motion Graphics",
      count: "2,134",
      color: "from-purple-500 to-violet-500",
      description: "Animation & video content"
    },
    {
      icon: Camera,
      title: "Photography",
      count: "4,567",
      color: "from-orange-500 to-amber-500",
      description: "Commercial & artistic photography"
    },
    {
      icon: Headphones,
      title: "Audio Design",
      count: "892",
      color: "from-teal-500 to-cyan-500",
      description: "Sound design & music production"
    },
    {
      icon: Gamepad2,
      title: "Game Design",
      count: "1,234",
      color: "from-red-500 to-pink-500",
      description: "Interactive gaming experiences"
    },
    {
      icon: Globe,
      title: "AR/VR",
      count: "654",
      color: "from-indigo-500 to-purple-500",
      description: "Immersive virtual experiences"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Creative Categories
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Explore diverse creative disciplines and find inspiration across all mediums
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-transparent transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${category.color} rounded-xl w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                      {category.count}
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      projects
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-bold transform hover:scale-105 transition-all duration-300 group">
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Explore All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeCategories;
