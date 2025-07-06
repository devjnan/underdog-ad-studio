
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Award, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  agency: string;
  category: string;
  image: string;
  score: number;
  views: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4 flex gap-2">
          {project.featured && (
            <Badge className="bg-orange-500 text-white animate-pulse">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Featured
            </Badge>
          )}
          <Badge className="bg-white/90 text-gray-800 font-semibold backdrop-blur-sm">
            {project.score}
          </Badge>
        </div>
        
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 text-gray-600 border-gray-300 backdrop-blur-sm">
            <Eye className="w-3 h-3 mr-1" />
            {project.views}
          </Badge>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <Badge variant="outline" className="text-orange-500 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
            {project.category}
          </Badge>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
          {project.title}
        </h4>
        <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">{project.agency}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-500">Award Winner</span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
