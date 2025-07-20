import ProjectCard from "@/components/ProjectCard";
import ProjectLayout from "@/components/ProjectLayout";
import { Code, Zap, Shield, Layers, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ReactDevelopmentProjects = () => {
  const badges = [
    {
      icon: <Layers className="h-3 w-3 mr-1" />,
      text: "Component Architecture",
      mobileText: "Architecture"
    },
    {
      icon: <Code className="h-3 w-3 mr-1" />,
      text: "State Management",
      mobileText: "State"
    },
    {
      icon: <Zap className="h-3 w-3 mr-1" />,
      text: "Performance Optimization",
      mobileText: "Performance"
    },
    {
      icon: <Shield className="h-3 w-3 mr-1" />,
      text: "Modern React Patterns",
      mobileText: "Patterns"
    }
  ];

  const projects = [
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

  return (
    <ProjectLayout
      title="React Development"
      category="React Development"
      description="Showcasing my expertise in building modern React applications with clean, maintainable code and thoughtful component architecture. Each project demonstrates mastery of React patterns and best practices."
      badges={badges}
    >
      {projects.map((project) => (
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
    </ProjectLayout>
  );
};

export default ReactDevelopmentProjects;
