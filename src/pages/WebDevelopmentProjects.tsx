import ProjectCard from "@/components/ProjectCard";
import ProjectLayout from "@/components/ProjectLayout";
import { Code, Zap, Shield, Globe } from "lucide-react";

const webDevelopmentProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process. Built with modern web technologies and best practices for performance and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project"
  },
  {
    id: 2,
    title: "Corporate Portfolio",
    description: "A modern, responsive website for a corporate client showcasing their services and case studies. Features dynamic content management and optimized performance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    year: "2023",
    technologies: ["React", "Gatsby", "GraphQL", "Contentful", "Netlify"],
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A custom blog platform with content management system, search functionality and newsletter integration. Built with performance and SEO in mind.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
    year: "2022",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/example/project"
  }
];

const WebDevelopmentProjects = () => {
  const badges = [
    {
      icon: <Code className="h-3 w-3 mr-1" />,
      text: "Clean Code",
      mobileText: "Clean"
    },
    {
      icon: <Zap className="h-3 w-3 mr-1" />,
      text: "Responsive Design",
      mobileText: "Responsive"
    },
    {
      icon: <Shield className="h-3 w-3 mr-1" />,
      text: "Performance Optimized",
      mobileText: "Fast"
    },
    {
      icon: <Globe className="h-3 w-3 mr-1" />,
      text: "SEO Friendly",
      mobileText: "SEO"
    }
  ];

  return (
    <ProjectLayout
      title="Web Development"
      category="Web Development"
      description="Showcasing my expertise in building modern, responsive, and performant web applications. Each project demonstrates attention to detail and commitment to excellence."
      badges={badges}
    >
      {webDevelopmentProjects.map((project) => (
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

export default WebDevelopmentProjects;
