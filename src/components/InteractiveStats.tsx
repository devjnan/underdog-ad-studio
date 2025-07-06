
import { Trophy, Users, Zap, Globe, Award, TrendingUp } from "lucide-react";

const InteractiveStats = () => {
  const stats = [
    { 
      icon: Trophy, 
      value: "10,847", 
      label: "Award Winners", 
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      description: "Creative excellence recognized globally"
    },
    { 
      icon: Users, 
      value: "25,690", 
      label: "Active Creators", 
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      description: "Talented professionals worldwide"
    },
    { 
      icon: Zap, 
      value: "150,234", 
      label: "Projects Launched", 
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      description: "Innovative campaigns and designs"
    },
    { 
      icon: Globe, 
      value: "180+", 
      label: "Countries", 
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      description: "Global creative community"
    },
    { 
      icon: Award, 
      value: "5,670", 
      label: "Awards Given", 
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      description: "Recognition for outstanding work"
    },
    { 
      icon: TrendingUp, 
      value: "89%", 
      label: "Success Rate", 
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      description: "Projects meeting excellence standards"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Platform Impact
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            See how our community is reshaping the creative industry worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${stat.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:animate-pulse`} />
              </div>
              
              <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>
              
              <div className="text-lg font-bold text-purple-200 mb-3 group-hover:text-purple-100 transition-colors">
                {stat.label}
              </div>
              
              <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.description}
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-slate-700">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 font-medium">Live stats updating every second</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
