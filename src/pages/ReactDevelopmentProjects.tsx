import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Code, Zap, Shield, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const reactProjects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A feature-rich task management application with drag-and-drop functionality, filtering, and task analytics. Built with modern React patterns and real-time updates.",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
    year: "2024",
    technologies: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard displaying social media analytics with interactive charts and real-time data updates. Features dark mode and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    year: "2023",
    technologies: ["React", "Context API", "Chart.js", "CSS Modules", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: undefined
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "An interactive learning platform with course progress tracking, quizzes, and video content integration. Built with accessibility and user experience in mind.",
    imageUrl: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: ["React", "Firebase", "Material UI", "React Router", "Jest"],
    liveUrl: undefined,
    githubUrl: "https://github.com/example/project"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ReactDevelopmentProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <Button
            variant="ghost"
            className="mb-6 sm:mb-8 -ml-4 gap-2 hover:bg-primary/10 text-sm sm:text-base"
            asChild
          >
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 h-16 sm:h-20 w-1 sm:w-2 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
              <div className="pl-2 sm:pl-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  React Development
                  <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                  Showcasing my expertise in building modern React applications with clean, maintainable code 
                  and thoughtful component architecture. Each project demonstrates mastery of React patterns
                  and best practices.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Layers className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Component Architecture</span>
              <span className="sm:hidden">Components</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Code className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">State Management</span>
              <span className="sm:hidden">State</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Zap className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Performance Optimization</span>
              <span className="sm:hidden">Performance</span>
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
              <Shield className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Modern React Patterns</span>
              <span className="sm:hidden">Patterns</span>
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reactProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                year={project.year}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReactDevelopmentProjects;
