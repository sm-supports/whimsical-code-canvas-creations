
import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

const graphicDesignProjects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines for a tech startup.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1064&auto=format&fit=crop",
    year: "2023",
    client: "TechInnovate"
  },
  {
    id: 2,
    title: "Marketing Collateral",
    description: "Series of brochures, flyers, and social media graphics for a product launch campaign.",
    imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1170&auto=format&fit=crop",
    year: "2023",
    client: "EcoProducts"
  },
  {
    id: 3,
    title: "Packaging Design",
    description: "Distinctive packaging design for a premium food product line emphasizing sustainability and quality.",
    imageUrl: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?q=80&w=1632&auto=format&fit=crop",
    year: "2022",
    client: "OrganicHarvest"
  }
];

const GraphicDesignProjects = () => {
  return (
    <ProjectLayout title="Graphic Design Projects" category="Graphic Design">
      <p className="text-gray-600 mb-8 max-w-2xl">
        My graphic design work combines visual aesthetics with strategic thinking to create 
        memorable brand experiences and effective visual communication materials.
      </p>
      
      <div className="grid gap-8 mb-16">
        {graphicDesignProjects.map(project => (
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
                  <span className="font-medium">Client:</span> {project.client}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ProjectLayout>
  );
};

export default GraphicDesignProjects;
