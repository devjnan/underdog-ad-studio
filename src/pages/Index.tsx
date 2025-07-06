
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, Trophy, Star, Users, Zap, ArrowRight, Play, Award } from "lucide-react";

const Index = () => {
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

  const categories = [
    "All Projects", "Digital Experience", "Brand Campaign", "Product Launch", 
    "Social Campaign", "E-commerce", "Mobile App", "Interactive"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
                  className="bg-gray-100 border-0 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Submit Project
              </Button>
              <Menu className="md:hidden w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the
              <span className="text-orange-500 block">Best Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore award-winning campaigns, innovative designs, and creative excellence 
              from the world's most talented marketing teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Explore Projects
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-4 text-lg">
                Submit Your Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Trophy className="w-8 h-8 text-orange-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,847</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">456</div>
              <div className="text-sm text-gray-500">Agencies</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">1,234</div>
              <div className="text-sm text-gray-500">Awards</div>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">67</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "ghost"}
                className={index === 0 
                  ? "bg-orange-500 text-white hover:bg-orange-600" 
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h3>
              <p className="text-gray-600">Handpicked excellence in marketing and advertising</p>
            </div>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <Badge className="bg-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge className="bg-white/90 text-gray-800 font-semibold">
                      {project.score}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-600 border-gray-300">
                      {project.views} views
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50">
                      {project.category}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{project.agency}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-500">Award Winner</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                  alt="Underdog Ads Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h5 className="font-bold text-lg text-gray-900">UNDERDOG ADS</h5>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Celebrating excellence in marketing and advertising creativity worldwide.
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Projects</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Campaigns</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Product Launch</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Community</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Awards</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Company</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Underdog Ads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
