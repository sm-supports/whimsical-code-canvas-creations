import ProjectCard from "@/components/ProjectCard";
import ProjectLayout from "@/components/ProjectLayout";
import { PenTool, Layers, Shield, Zap } from "lucide-react";

const IllustrationProjects = () => {
  const badges = [
    {
      icon: <Layers className="h-3 w-3 mr-1" />,
      text: "Digital Art",
      mobileText: "Art"
    },
    {
      icon: <PenTool className="h-3 w-3 mr-1" />,
      text: "Custom Illustration",
      mobileText: "Custom"
    },
    {
      icon: <Zap className="h-3 w-3 mr-1" />,
      text: "Creativity",
      mobileText: "Creative"
    },
    {
      icon: <Shield className="h-3 w-3 mr-1" />,
      text: "Precision",
      mobileText: "Precise"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Character Design Series",
      description: "A collection of original character designs for a mobile game, including concept art, expressions, and poses.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
      year: "2024",
      technologies: ["Procreate", "Adobe Photoshop", "Digital Art", "Character Design"],
      liveUrl: "https://example.com",
      githubUrl: undefined
    },
    {
      id: 2,
      title: "Editorial Illustrations",
      description: "Series of editorial illustrations for digital and print publications, focusing on abstract concepts and storytelling.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
      year: "2023",
      technologies: ["Adobe Illustrator", "Digital Painting", "Editorial Design"],
      liveUrl: "https://example.com",
      githubUrl: undefined
    },
    {
      id: 3,
      title: "Icon Set Design",
      description: "Custom icon set design for a web application, featuring consistent style and clear visual communication.",
      imageUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000",
      year: "2023",
      technologies: ["Adobe Illustrator", "Icon Design", "UI Graphics"],
      liveUrl: undefined,
      githubUrl: undefined
    }
  ];

  return (
    <ProjectLayout
      title="Illustration"
      category="Illustration"
      description="Explore a gallery of custom digital illustrations, each crafted for web, print, and branding with creativity and precision. From character design to editorial illustrations."
      badges={badges}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          year={project.year}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </ProjectLayout>
  );
};

export default IllustrationProjects; 