
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
      <p className="text-gray-200 mb-8 max-w-2xl">
        I specialize in building modern, performant React applications with clean, maintainable code 
        and thoughtful component architecture. My React projects focus on delivering smooth user experiences 
        with optimized rendering and state management.
      </p>
      
      <div className="grid gap-8 mb-16">
        {reactProjects.map(project => (
          <Card key={project.id} className="glass-card overflow-hidden rounded-2xl">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-2 flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-gray-300">{project.year}</span>
                </div>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <p className="text-sm text-portfolio-primary">
                  <span className="font-medium">Technologies:</span> {project.technologies}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ProjectLayout>
  );
};

export default ReactDevelopmentProjects;
