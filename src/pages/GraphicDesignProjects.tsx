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
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary rounded-full" />
        <div className="absolute top-40 -left-20 w-40 h-40 bg-purple-500 rounded-full" />

        <div className="glass-card p-8 mb-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">About My Graphic Design</h2>
          <p className="text-foreground/90 mb-4 max-w-3xl text-lg leading-relaxed">
            My graphic design work combines visual aesthetics with strategic thinking to create 
            memorable brand experiences and effective visual communication materials.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Brand Identity</span>
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Visual Communication</span>
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Print Design</span>
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Packaging</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>

        <div className="grid gap-10 mb-16">
          {graphicDesignProjects.map(project => (
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
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Client</p>
                    <div className="inline-block px-4 py-2 bg-foreground/10 text-foreground/80 rounded-full text-sm font-medium">
                      {project.client}
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

export default GraphicDesignProjects;
