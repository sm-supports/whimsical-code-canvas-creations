import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Smartphone, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = {
    "React Development": {
      skills: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Component Architecture"],
      icon: <Globe className="h-6 w-6" />,
      description: "Building modern, scalable web applications with React, TypeScript, and Vite for optimal performance."
    },
    "React Native": {
      skills: ["React Native", "TypeScript", "Native Modules", "Mobile UI/UX", "App Store Deployment"],
      icon: <Smartphone className="h-6 w-6" />,
      description: "Creating cross-platform mobile applications with React Native for iOS and Android platforms."
    },
    "Full-Stack Development": {
      skills: ["PostgreSQL", "REST APIs", "Node.js", "TypeScript", "Database Design"],
      icon: <Server className="h-6 w-6" />,
      description: "End-to-end web solutions with modern frontend and robust PostgreSQL backend."
    },
    "Modern Tools": {
      skills: ["Vite", "TypeScript", "Tailwind CSS", "Git", "Docker"],
      icon: <Code className="h-6 w-6" />,
      description: "Using cutting-edge development tools and technologies for optimal performance and developer experience."
    },
    "UI/UX Design": {
      skills: ["Responsive Design", "Tailwind CSS", "Component Design", "User Experience"],
      icon: <Palette className="h-6 w-6" />,
      description: "Creating beautiful, responsive user interfaces with modern CSS frameworks and design principles."
    }
  };

  return (
    <section id="skills" className="relative py-12 bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background decorations removed */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized in modern React development with TypeScript, React Native, and full-stack solutions
            using PostgreSQL and cutting-edge tools for optimal performance and developer experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, { skills: categorySkills, icon, description }], index) => (            <Card 
              key={category}
              className="group relative overflow-hidden bg-background/50 dark:bg-card/50 border-border/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0" />
              <div className="absolute inset-0 opacity-0">
                <div className="absolute -inset-[1000%] bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-shimmer" />
              </div>
              <CardContent className="relative p-8">
                <div className="mb-6">
                  <div className="relative w-14 h-14 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {category}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
