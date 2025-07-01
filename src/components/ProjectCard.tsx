import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  year,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 active:scale-[0.98]">
      {/* Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={250}
          loading="lazy"
          decoding="async"
        />
        
        {/* Year Badge - Floating on image */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg text-xs sm:text-sm">
            <Calendar className="h-3 w-3 mr-1" />
            {year}
          </Badge>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-secondary/30 border-border/50 text-xs font-medium px-2 py-1"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="bg-secondary/30 border-border/50 text-xs font-medium px-2 py-1">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {(liveUrl || githubUrl) && (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base py-2.5 sm:py-2 px-5 shadow-sm hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ boxShadow: '0 2px 8px 0 rgba(64, 224, 208, 0.08)' }}
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">View Live</span>
                <span className="sm:hidden">Live</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-background text-foreground font-semibold text-sm sm:text-base py-2.5 sm:py-2 px-5 shadow-sm hover:bg-accent/20 hover:border-primary/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ boxShadow: '0 2px 8px 0 rgba(64, 224, 208, 0.06)' }}
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">Code</span>
                <span className="sm:hidden">GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
