
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, category, imageUrl, link }: ProjectCardProps) => {
  return (
    <Link to={link} className="block">
      <div 
        className="group relative overflow-hidden rounded-2xl will-change-transform"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(var(--primary), 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover will-change-transform"
            style={{
              transition: 'transform 0.5s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            loading="lazy" // Add lazy loading for images
          />

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
            style={{
              opacity: 0.6,
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.6';
            }}
          />

          {/* Decorative Elements - Simplified for better performance */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 opacity-0 group-hover:opacity-100" 
            style={{ transition: 'opacity 0.3s ease' }} />
          <div className="absolute bottom-4 left-4 w-20 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100" 
            style={{ transition: 'opacity 0.3s ease, width 0.3s ease' }} />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2" 
              style={{ transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}>
              {title}
            </h3>
            <div className="flex items-center text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100"
              style={{ 
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                transform: 'translateY(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
                e.currentTarget.style.transform = 'translateY(8px)';
              }}>
              View Project <ArrowRight className="w-4 h-4 ml-2" 
                style={{ 
                  transition: 'transform 0.3s ease',
                  transform: 'translateX(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
