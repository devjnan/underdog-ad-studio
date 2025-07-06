
import { Award, Users, Briefcase, Globe } from "lucide-react";

const InteractiveStats = () => {
  const stats = [
    { 
      icon: Award, 
      value: "150+", 
      label: "Award-Winning Projects", 
      description: "International recognition for creative excellence"
    },
    { 
      icon: Users, 
      value: "500+", 
      label: "Happy Clients", 
      description: "Brands that trust our creative vision"
    },
    { 
      icon: Briefcase, 
      value: "8 Years", 
      label: "Industry Experience", 
      description: "Proven track record of success"
    },
    { 
      icon: Globe, 
      value: "25+", 
      label: "Countries Served", 
      description: "Global reach with local expertise"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black">
            By The Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every project we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-black transition-all duration-500 hover:-translate-y-2 hover:shadow-xl text-center"
            >
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-black text-black mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-bold text-black mb-3">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
