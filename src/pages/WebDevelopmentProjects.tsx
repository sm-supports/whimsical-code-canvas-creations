import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Code, Zap, Shield, Search } from "lucide-react";
import { Link } from "react-router-dom";

const webDevelopmentProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process. Built with modern web technologies and best practices for performance and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project"
  },
  {
    id: 2,
    title: "Corporate Portfolio",
    description: "A modern, responsive website for a corporate client showcasing their services and case studies. Features dynamic content management and optimized performance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    year: "2023",
    technologies: ["React", "Gatsby", "GraphQL", "Contentful", "Netlify"],
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A custom blog platform with content management system, search functionality and newsletter integration. Built with performance and SEO in mind.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/example/project"
  }
];

const WebDevelopmentProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-12 sm:mb-16">
          <Button
            variant="ghost"
            className="mb-6 sm:mb-8 -ml-4 flex items-center gap-2 hover:bg-primary/10 text-sm sm:text-base"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>

          {/* Title and Description */}
          <div className="relative">
            <div className="absolute -left-4 sm:-left-8 top-0 h-16 sm:h-20 w-1 sm:w-2 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
            <div className="pl-2 sm:pl-2">
              <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Web Development
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Showcasing my expertise in building modern, responsive, and performant web applications.
                Each project demonstrates attention to detail and commitment to excellence.
              </p>
            </div>
          </div>

          {/* Skills Badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Code className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Clean Code</span>
              <span className="sm:hidden">Clean</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Zap className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Responsive Design</span>
              <span className="sm:hidden">Responsive</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Shield className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Performance Optimized</span>
              <span className="sm:hidden">Fast</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Search className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">SEO Friendly</span>
              <span className="sm:hidden">SEO</span>
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {webDevelopmentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              year={project.year}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentProjects;
