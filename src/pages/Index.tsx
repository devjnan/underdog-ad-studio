
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, Award, TrendingUp, Eye, Heart, Share2 } from "lucide-react";

const Index = () => {
  const featuredCampaigns = [
    {
      id: 1,
      title: "Nike Air Max Revolution",
      agency: "Wieden+Kennedy",
      category: "Digital Campaign",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      awards: ["Gold", "Silver"],
      views: "2.3k",
      likes: "156",
    },
    {
      id: 2,
      title: "Spotify Wrapped 2024",
      agency: "Spotify Creative",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
      awards: ["Platinum"],
      views: "5.7k",
      likes: "423",
    },
    {
      id: 3,
      title: "Tesla Model Y Launch",
      agency: "Tesla Design Studio",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop",
      awards: ["Gold"],
      views: "4.1k",
      likes: "289",
    },
  ];

  const categories = [
    "All", "Digital Campaign", "Print", "Social Media", "Video", "Branding", "Product Launch", "Interactive"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">UNDERDOG ADS</h1>
                <p className="text-sm text-gray-400">Marketing Excellence Awards</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-yellow-400 transition-colors">Awards</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Agencies</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Campaigns</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Jobs</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Directory</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  className="bg-gray-900 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-400"
                />
              </div>
              <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Submit
              </Button>
              <Menu className="md:hidden w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                alt="Underdog Ads Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              THE BEST OF<br />
              <span className="text-yellow-400">MARKETING</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Celebrating the most innovative and impactful advertising campaigns from around the world. 
              Where creativity meets strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3">
                Explore Awards
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                Submit Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "ghost"}
                className={index === 0 ? "bg-yellow-400 text-black hover:bg-yellow-500" : "text-gray-300 hover:text-white hover:bg-gray-800"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">Featured Campaigns</h3>
            <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300">
              View All <TrendingUp className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-gray-900 border-gray-800 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {campaign.awards.map((award) => (
                      <Badge
                        key={award}
                        className={`${
                          award === "Platinum" ? "bg-purple-600" :
                          award === "Gold" ? "bg-yellow-600" : "bg-gray-600"
                        } text-white`}
                      >
                        <Award className="w-3 h-3 mr-1" />
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      {campaign.category}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {campaign.title}
                  </h4>
                  <p className="text-gray-400 mb-4">{campaign.agency}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {campaign.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {campaign.likes}
                      </div>
                    </div>
                    <Share2 className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">2,847</div>
              <div className="text-gray-400">Campaigns</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">156</div>
              <div className="text-gray-400">Agencies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">43</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">891</div>
              <div className="text-gray-400">Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/58d49a4a-6574-4600-a6f2-a89c2e2a8a0e.png" 
                  alt="Underdog Ads Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h5 className="font-bold text-lg">UNDERDOG ADS</h5>
              </div>
              <p className="text-gray-400 text-sm">
                Recognizing excellence in marketing and advertising worldwide.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Awards</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Digital</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Print</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Video</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Interactive</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Community</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">About</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Jury</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Underdog Ads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
