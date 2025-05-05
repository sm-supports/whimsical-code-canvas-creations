
import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

const fullstackProjects = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "A comprehensive data visualization platform with user authentication, role-based permissions, and real-time data updates.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
    year: "2024",
    technologies: "React, Node.js, Express, MongoDB, Socket.io"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A complete e-commerce solution with product management, shopping cart, payment processing, and order tracking.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop",
    year: "2023",
    technologies: "React, Next.js, Node.js, PostgreSQL, Stripe"
  },
  {
    id: 3,
    title: "Community Forum",
    description: "A feature-rich discussion platform with user profiles, threaded comments, content moderation, and real-time notifications.",
    imageUrl: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: "React, Redux, Node.js, Express, MySQL, WebSockets"
  }
];

const FullStackProjects = () => {
  return (
    <ProjectLayout title="Full-Stack Development Projects" category="Full Stack Development">
      <p className="text-gray-600 mb-8 max-w-2xl">
        My full-stack projects demonstrate end-to-end development expertise, combining 
        responsive front-end interfaces with robust back-end systems. I focus on creating 
        secure, scalable applications with optimized performance.
      </p>
      
      <div className="grid gap-8 mb-16">
        {fullstackProjects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="aspect-video rounded-md overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="mb-2 flex justify-between items-center">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-portfolio-purple">
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

export default FullStackProjects;
