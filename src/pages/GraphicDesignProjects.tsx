import ProjectCard from "@/components/ProjectCard";
import ProjectLayout from "@/components/ProjectLayout";
import { Palette, Layers, Shield, Zap } from "lucide-react";

const GraphicDesignProjects = () => {
  const badges = [
    {
      icon: <Layers className="h-3 w-3 mr-1" />,
      text: "Branding",
      mobileText: "Brand"
    },
    {
      icon: <Palette className="h-3 w-3 mr-1" />,
      text: "UI/UX Design",
      mobileText: "UI/UX"
    },
    {
      icon: <Zap className="h-3 w-3 mr-1" />,
      text: "Creativity",
      mobileText: "Creative"
    },
    {
      icon: <Shield className="h-3 w-3 mr-1" />,
      text: "Design Systems",
      mobileText: "Systems"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Identity System",
      description: "A comprehensive brand identity system including logo design, color palette, typography, and brand guidelines for a tech startup.",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000",
      year: "2024",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Brand Design"],
      liveUrl: "https://example.com",
      githubUrl: undefined
    },
    {
      id: 2,
      title: "UI Design System",
      description: "A modular UI design system with reusable components, design tokens, and documentation for a SaaS platform.",
      imageUrl: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1000",
      year: "2023",
      technologies: ["Figma", "Design Systems", "UI/UX", "Documentation"],
      liveUrl: "https://example.com",
      githubUrl: undefined
    },
    {
      id: 3,
      title: "Marketing Collateral",
      description: "A series of marketing materials including social media graphics, email templates, and print collateral for a product launch.",
      imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1000",
      year: "2023",
      technologies: ["Adobe Creative Suite", "Social Media", "Print Design"],
      liveUrl: undefined,
      githubUrl: undefined
    }
  ];

  return (
    <ProjectLayout
      title="Graphic Design"
      category="Graphic Design"
      description="Discover a portfolio of graphic design work, including branding, UI/UX, and creative assets for digital and print media. Each project showcases attention to detail and creative problem-solving."
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

export default GraphicDesignProjects; 