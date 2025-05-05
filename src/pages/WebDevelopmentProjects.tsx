
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
      <p className="text-gray-600 mb-8 max-w-2xl">
        I build responsive, performance-optimized websites that deliver exceptional user experiences 
        across all devices. My web development approach focuses on clean code and modern design principles.
      </p>
      
      <div className="grid gap-8 mb-16">
        {webDevelopmentProjects.map(project => (
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

export default WebDevelopmentProjects;
