
import { Trophy, Users, Star, Zap } from "lucide-react";

const StatsBar = () => {
  const stats = [
    { icon: Trophy, value: "2,847", label: "Projects", color: "text-orange-500" },
    { icon: Users, value: "456", label: "Agencies", color: "text-blue-500" },
    { icon: Star, value: "1,234", label: "Awards", color: "text-yellow-500" },
    { icon: Zap, value: "67", label: "Countries", color: "text-green-500" }
  ];

  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-2 group-hover:animate-bounce`} />
              <div className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
