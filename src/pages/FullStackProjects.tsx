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
      <div className="relative">
        {/* Decorative elements removed */}

        <div className="glass-card p-8 mb-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">About My Full-Stack Development</h2>
          <p className="text-foreground/90 mb-4 max-w-3xl text-lg leading-relaxed">
            My full-stack projects demonstrate end-to-end development expertise, combining 
            responsive front-end interfaces with robust back-end systems. I focus on creating 
            secure, scalable applications with optimized performance.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">End-to-End Solutions</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Scalable Architecture</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Database Design</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">API Development</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>

        <div className="grid gap-10 mb-16">
          {fullstackProjects.map(project => (
            <Card key={project.id} className="glass-card overflow-hidden rounded-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
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

export default FullStackProjects;
