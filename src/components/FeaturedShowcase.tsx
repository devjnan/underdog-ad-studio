
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";

const FeaturedShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Minimalist Banking App",
      client: "FinTech Startup",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Fashion Campaign",
      client: "Eco Brand",
      category: "Brand Campaign",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      year: "2024",
      featured: false
    },
    {
      id: 3,
      title: "Tech Conference Identity",
      client: "Innovation Summit",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      year: "2023",
      featured: true
    },
    {
      id: 4,
      title: "Luxury Watch Commercial",
      client: "Swiss Timepieces",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
      year: "2023",
      featured: false
    },
    {
      id: 5,
      title: "Architecture Portfolio",
      client: "Modern Studios",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      year: "2024",
      featured: true
    },
    {
      id: 6,
      title: "Coffee Shop Rebrand",
      client: "Artisan Coffee Co.",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
      year: "2023",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-black">
            Selected Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of our most impactful creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="group bg-white border-gray-200 hover:border-black transition-all duration-500 overflow-hidden hover:-translate-y-4 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute top-4 left-4">
                  {project.featured && (
                    <Badge className="bg-black text-white border-0">
                      <Award className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-black border-gray-300">
                    {project.year}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Button size="sm" className="opacity-0 group-hover:opacity-100 bg-white text-black hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-gray-600 border-gray-300">
                    {project.category}
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-black mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600">{project.client}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-bold transform hover:scale-105 transition-all duration-300">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
