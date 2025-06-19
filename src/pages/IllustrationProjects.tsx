
import ProjectLayout from "@/components/ProjectLayout";
import { Card } from "@/components/ui/card";

const illustrationProjects = [
  {
    id: 1,
    title: "Children's Book Illustration",
    description: "A series of whimsical illustrations for a children's storybook about underwater adventures.",
    imageUrl: "https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1074&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 2,
    title: "Story Book Cover Design",
    description: "Cover art for a fantasy novel featuring magical creatures and enchanted landscapes.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1176&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: 3,
    title: "Character Design Collection",
    description: "A collection of playful characters designed for an educational app teaching children about nature.",
    imageUrl: "https://images.unsplash.com/photo-1613685301602-373dbf6edc45?q=80&w=1074&auto=format&fit=crop",
    year: "2021"
  }
];

const IllustrationProjects = () => {
  return (
    <ProjectLayout title="Illustration Projects" category="Illustration">
      <p className="text-gray-200 mb-8 max-w-2xl">
        My illustration work focuses on creating vibrant, engaging visuals that spark imagination and 
        bring stories to life, especially for young audiences.
      </p>
      
      <div className="grid gap-8 mb-16">
        {illustrationProjects.map(project => (
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
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ProjectLayout>
  );
};

export default IllustrationProjects;
