
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Video, 
  Camera, 
  Headphones,
  ArrowRight
} from "lucide-react";

const CreativeCategories = () => {
  const categories = [
    {
      icon: Palette,
      title: "Brand Identity",
      count: "47",
      description: "Visual identity systems that make brands unforgettable"
    },
    {
      icon: Monitor,
      title: "Digital Experiences",
      count: "63",
      description: "Websites and interfaces that captivate users"
    },
    {
      icon: Video,
      title: "Motion Graphics",
      count: "89",
      description: "Dynamic animations that bring stories to life"
    },
    {
      icon: Camera,
      title: "Photography",
      count: "124",
      description: "Compelling visuals that communicate powerfully"
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      count: "56",
      description: "App experiences that users love"
    },
    {
      icon: Headphones,
      title: "Audio Branding",
      count: "28",
      description: "Sonic identities that resonate"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized creative services across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-gray-900 border-gray-800 hover:border-white transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">
                    {category.count}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Projects
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-bold transform hover:scale-105 transition-all duration-300">
            View All Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeCategories;
