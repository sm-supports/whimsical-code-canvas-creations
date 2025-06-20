import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

const webDevelopmentProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    year: "2024",
    technologies: "HTML, CSS, JavaScript, Shopify"
  },
  {
    id: 2,
    title: "Corporate Portfolio",
    description: "A modern, responsive website for a corporate client showcasing their services and case studies.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    year: "2023",
    technologies: "HTML, CSS, JavaScript, WordPress"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A custom blog platform with content management system, search functionality and newsletter integration.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL"
  }
];

const WebDevelopmentProjects = () => {
  return (
    <ProjectLayout title="Web Development Projects" category="Web Development">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary rounded-full" />
        <div className="absolute top-40 -left-20 w-40 h-40 bg-purple-500 rounded-full" />

        <div className="glass-card p-8 mb-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">About My Web Development</h2>
          <p className="text-foreground/90 mb-4 max-w-3xl text-lg leading-relaxed">
            I build responsive, performance-optimized websites that deliver exceptional user experiences 
            across all devices. My web development approach focuses on clean code and modern design principles.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Responsive Design</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Performance Optimization</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Modern UI/UX</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Clean Code</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>

        <div className="grid gap-10 mb-16">
          {webDevelopmentProjects.map(project => (
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

export default WebDevelopmentProjects;
