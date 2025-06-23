import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

const reactProjects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A feature-rich task management application with drag-and-drop functionality, filtering, and task analytics.",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop",
    year: "2024",
    technologies: "React, TypeScript, Redux, Tailwind CSS"
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard displaying social media analytics with interactive charts and real-time data updates.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    year: "2023",
    technologies: "React, Context API, Chart.js, CSS Modules"
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "An interactive learning platform with course progress tracking, quizzes, and video content integration.",
    imageUrl: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: "React, Firebase, Material UI, React Router"
  }
];

const ReactDevelopmentProjects = () => {
  return (
    <ProjectLayout title="React Development Projects" category="React Development">
      <div className="relative">
        {/* Decorative elements removed */}
        <div className="glass-card p-8 mb-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">About My React Development</h2>
          <p className="text-foreground/90 mb-4 max-w-3xl text-lg leading-relaxed">
            I specialize in building modern, performant React applications with clean, maintainable code 
            and thoughtful component architecture. My React projects focus on delivering smooth user experiences 
            with optimized rendering and state management.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Component Architecture</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">State Management</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Performance Optimization</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Modern React Patterns</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>
        <div className="grid gap-10 mb-16">
          {reactProjects.map(project => (
            <Card key={project.id} className="glass-card overflow-hidden rounded-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="1280"
                    height="720"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="mb-4 flex justify-between items-center">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                      {project.title}
                    </h3>
                    <span className="text-sm bg-foreground/10 text-foreground/80 px-3 py-1 rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-foreground/80 mb-6 text-lg leading-relaxed">{project.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-foreground/10 text-foreground/70 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ReactDevelopmentProjects;
