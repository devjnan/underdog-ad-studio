
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Spotify Year in Music 2024",
      agency: "In-House Design Team",
      category: "Digital Experience",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
      score: 9.2,
      views: "12.4K",
      featured: true
    },
    {
      id: 2,
      title: "Nike Air Revolution Campaign",
      agency: "Wieden+Kennedy",
      category: "Brand Campaign",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
      score: 8.9,
      views: "8.7K",
      featured: false
    },
    {
      id: 3,
      title: "Tesla Model S Interactive Launch",
      agency: "Tesla Creative",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
      score: 9.5,
      views: "15.2K",
      featured: true
    },
    {
      id: 4,
      title: "Coca-Cola Summer Stories",
      agency: "McCann Worldgroup",
      category: "Social Campaign",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      score: 8.6,
      views: "6.3K",
      featured: false
    },
    {
      id: 5,
      title: "Apple Vision Pro Experience",
      agency: "Apple Marketing",
      category: "Product Demo",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
      score: 9.8,
      views: "22.1K",
      featured: true
    },
    {
      id: 6,
      title: "Airbnb Belong Anywhere",
      agency: "DesignStudio",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      score: 8.4,
      views: "9.8K",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h3>
            <p className="text-gray-600">Handpicked excellence in marketing and advertising</p>
          </div>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:scale-105 transition-all duration-200">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
