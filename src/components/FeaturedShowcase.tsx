
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Eye, Heart, Share2, Award, TrendingUp } from "lucide-react";

const FeaturedShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Neural Brand Experience",
      creator: "AI Creative Labs",
      category: "Interactive Design",
      image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=600&h=400&fit=crop",
      likes: "2.4K",
      views: "18.7K",
      rating: 9.8,
      trending: true,
      featured: true
    },
    {
      id: 2,
      title: "Quantum Commerce Platform",
      creator: "Future Design Co",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      likes: "1.8K",
      views: "12.3K", 
      rating: 9.5,
      trending: false,
      featured: true
    },
    {
      id: 3,
      title: "Metaverse Brand Journey",
      creator: "Dimension Studios",
      category: "Virtual Reality",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      likes: "3.2K",
      views: "25.1K",
      rating: 9.9,
      trending: true,
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Future Campaign",
      creator: "Green Creative",
      category: "Social Impact",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      likes: "2.1K",
      views: "16.4K",
      rating: 9.3,
      trending: false,
      featured: false
    },
    {
      id: 5,
      title: "AI Art Revolution",
      creator: "Neural Networks Inc",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      likes: "4.1K",
      views: "31.8K",
      rating: 9.7,
      trending: true,
      featured: true
    },
    {
      id: 6,
      title: "Holographic Product Launch",
      creator: "Holo Dynamics",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      likes: "1.9K",
      views: "14.2K",
      rating: 9.1,
      trending: false,
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Featured Showcase
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover the most innovative and award-winning creative projects from around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-500 overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 animate-pulse">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                  {project.trending && (
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-4 right-4">
                  <Badge className="bg-slate-900/80 text-white border-slate-600 backdrop-blur-sm">
                    ⭐ {project.rating}
                  </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white/90 text-slate-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-red-500/90 text-white hover:bg-red-500 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-blue-500/90 text-white hover:bg-blue-500 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <div className="mb-4">
                  <Badge variant="outline" className="text-purple-300 border-purple-400 bg-purple-500/20 hover:bg-purple-500/30 transition-colors">
                    {project.category}
                  </Badge>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-purple-200 mb-4 group-hover:text-purple-100 transition-colors">{project.creator}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{project.views}</span>
                    </div>
                  </div>
                  <Award className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-bold transform hover:scale-105 transition-all duration-300">
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
