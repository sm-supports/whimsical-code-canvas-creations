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
      <div className="relative">
        {/* Decorative elements removed */}

        <div className="glass-card p-8 mb-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">About My Illustrations</h2>
          <p className="text-foreground/90 mb-4 max-w-3xl text-lg leading-relaxed">
            My illustration work focuses on creating vibrant, engaging visuals that spark imagination and 
            bring stories to life, especially for young audiences.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 text-primary rounded-full text-sm font-medium">Children's Books</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Character Design</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Digital Art</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Storytelling</span>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>

        <div className="grid gap-10 mb-16">
          {illustrationProjects.map(project => (
            <Card key={project.id} className="glass-card overflow-hidden rounded-2xl border-0">
              <div className="grid md:grid-cols-2 gap-8 p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    width="1280"
                    height="720"
                    loading="lazy"
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default IllustrationProjects;
