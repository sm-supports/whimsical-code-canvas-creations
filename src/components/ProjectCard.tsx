
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, category, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group block transition-transform hover:-translate-y-2 duration-300">
      <Card className="glass-card overflow-hidden border-none h-full rounded-2xl">
        <div className="relative overflow-hidden aspect-video">
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 text-white w-full">
              <p className="text-sm uppercase tracking-wider mb-2 text-portfolio-primary">{category}</p>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <p className="text-sm text-portfolio-primary uppercase tracking-wider mb-2 font-medium">{category}</p>
          <h3 className="font-semibold text-lg text-white">{title}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
